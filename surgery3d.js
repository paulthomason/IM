let scene, camera, renderer, animationId, controls;
const stations = {};
let currentStation = null;
let nearStation = null;
const keys = {};

function createZone(pos, radius = 1.5){
  const geom = new THREE.CircleGeometry(radius, 32);
  const mat = new THREE.MeshBasicMaterial({color:0xffff00, opacity:0.3, transparent:true});
  const circle = new THREE.Mesh(geom, mat);
  circle.rotation.x = -Math.PI/2;
  circle.position.set(pos.x, 0.01, pos.z);
  circle.userData.radius = radius;
  scene.add(circle);
  return circle;
}

function initSurgeryScene(){
  const canvas = document.getElementById('surgeryCanvas');
  renderer = new THREE.WebGLRenderer({canvas, antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  window.addEventListener('resize', onWindowResize);
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x222222);
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.set(0,1.6,5);
  clock = new THREE.Clock();
  if("ontouchstart" in window){
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.target.set(0,1,0);
    controls.update();
  }else{
    controls = new THREE.PointerLockControls(camera, document.body);
    scene.add(controls.getObject());
    canvas.addEventListener("click", ()=>controls.lock());
  }
  const light = new THREE.AmbientLight(0xffffff,0.6);
  scene.add(light);
  const dirLight = new THREE.DirectionalLight(0xffffff,0.6);
  dirLight.position.set(5,10,7);
  dirLight.castShadow = true;
  scene.add(dirLight);

  const texLoader = new THREE.TextureLoader();
  const floorTex = texLoader.load('https://threejs.org/examples/textures/floors/FloorsCheckerboard_S_Diffuse.jpg');
  floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(4,4);

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20,20),
    new THREE.MeshPhongMaterial({map: floorTex})
  );
  floor.rotation.x = -Math.PI/2;
  floor.receiveShadow = true;
  scene.add(floor);

  const wallMat = new THREE.MeshPhongMaterial({color: 0xffffff, side: THREE.DoubleSide});
  const wallGeom = new THREE.PlaneGeometry(20,5);
  const backWall = new THREE.Mesh(wallGeom, wallMat);
  backWall.position.set(0,2.5,-10);
  scene.add(backWall);
  const frontWall = backWall.clone();
  frontWall.rotation.y = Math.PI;
  frontWall.position.set(0,2.5,10);
  scene.add(frontWall);
  const leftWall = backWall.clone();
  leftWall.rotation.y = Math.PI/2;
  leftWall.position.set(10,2.5,0);
  scene.add(leftWall);
  const rightWall = backWall.clone();
  rightWall.rotation.y = -Math.PI/2;
  rightWall.position.set(-10,2.5,0);
  scene.add(rightWall);

  let bed, surgeonObj, spot;

  // Load hospital bed model
  const bedMtl = new THREE.MTLLoader();
  bedMtl.setPath('surgery_models/Hospital Bed/');
  bedMtl.load('Hospital Bed.mtl', mtl => {
    mtl.preload();
    const bedLoader = new THREE.OBJLoader();
    bedLoader.setMaterials(mtl);
    bedLoader.setPath('surgery_models/Hospital Bed/');
    bedLoader.load('Hospital Bed.obj', obj => {
      obj.traverse(c => {
        if(c.isMesh){
          c.castShadow = true;
          c.receiveShadow = true;
        }
      });
      obj.scale.set(0.1,0.1,0.1);
      obj.position.set(0,0.63,0);
      obj.rotation.y = Math.PI/2;
      bed = obj;
      scene.add(obj);
      if(surgeonObj) surgeonObj.lookAt(obj.position);
      if(spot) spot.target = obj;
    });
  });

  // Surgeon model loaded from file with materials
  const mtlLoader = new THREE.MTLLoader();
  mtlLoader.setPath('surgery_models/Surgeon/');
  mtlLoader.load('Surgeon.mtl', materials => {
    materials.preload();
    const objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('surgery_models/Surgeon/');
    objLoader.load('Surgeon.obj', obj => {
      obj.traverse(child => {
        if(child.isMesh){
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      obj.scale.set(0.01, 0.01, 0.01);
      obj.position.set(1.5, 0, 0);
      surgeonObj = obj;
      if(bed) obj.lookAt(bed.position);
      scene.add(obj);
    });
  });

  // Overhead surgical light
  const lamp = new THREE.Group();
  const lampPole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05,0.05,3,8),
    new THREE.MeshPhongMaterial({color:0xaaaaaa})
  );
  lampPole.position.y = 1.5;
  lamp.add(lampPole);
  const lampHead = new THREE.Mesh(
    new THREE.CylinderGeometry(0.3,0.3,0.2,16),
    new THREE.MeshPhongMaterial({color:0xcccccc})
  );
  lampHead.position.y = 3;
  lamp.add(lampHead);
  spot = new THREE.SpotLight(0xffffff,1.2);
  spot.position.set(0,3,0);
  spot.angle = Math.PI/6;
  spot.penumbra = 0.2;
  spot.castShadow = true;
  if(bed) spot.target = bed;
  lamp.add(spot);
  if(spot.target) lamp.add(spot.target);
  scene.add(lamp);

  // Crash cart station
  const cart = new THREE.Group();
  const cartBody = new THREE.Mesh(new THREE.BoxGeometry(1,1.2,0.6), new THREE.MeshPhongMaterial({color:0xff0000}));
  cartBody.position.y = 0.6;
  cart.add(cartBody);
  for(let i=0;i<3;i++){
    const drawer = new THREE.Mesh(new THREE.BoxGeometry(0.9,0.25,0.55), new THREE.MeshPhongMaterial({color:0xcc0000}));
    drawer.position.set(0,0.3 + i*0.35,0);
    cart.add(drawer);
    const dHandle = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.05,0.05), new THREE.MeshPhongMaterial({color:0xaaaaaa}));
    dHandle.position.set(0,0.3 + i*0.35,0.28);
    cart.add(dHandle);
  }
  const shelf = new THREE.Mesh(new THREE.BoxGeometry(1,0.1,0.6), new THREE.MeshPhongMaterial({color:0xff6666}));
  shelf.position.y = 1.25;
  cart.add(shelf);
  const defib = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.2,0.3), new THREE.MeshPhongMaterial({color:0x222222}));
  defib.position.set(0,1.35,0);
  cart.add(defib);
  const defibScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.3,0.15), new THREE.MeshPhongMaterial({color:0x00ff00}));
  defibScreen.position.set(0,1.38,0.16);
  cart.add(defibScreen);
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.8,8), new THREE.MeshPhongMaterial({color:0xaaaaaa}));
  handle.rotation.z = Math.PI/2;
  handle.position.set(0.55,0.9,0);
  cart.add(handle);
  for(let x=-0.35;x<=0.35;x+=0.7){
    for(let z=-0.25;z<=0.25;z+=0.5){
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.05,12), new THREE.MeshPhongMaterial({color:0x333333}));
      wheel.rotation.z = Math.PI/2;
      wheel.position.set(x,0.05,z);
      cart.add(wheel);
    }
  }
  cart.position.set(4,0,-4);
  scene.add(cart);
  const cartZone = createZone(cart.position);
  stations.cart = {
    mesh: cart,
    zone: cartZone,
    index: 0,
    questions: [
      {question: 'Which drug is recommended at 0.01 mg/kg IV during CPR in dogs?', options:['Epinephrine','Atropine','Lidocaine','Diazepam'], answer:0},
      {question: 'Approximate canine shock dose of isotonic crystalloids?', options:['90 mL/kg','10 mL/kg','20 mL/kg','60 mL/kg'], answer:0}
    ]
  };

  // Anesthesia machine station
  const machineMtl = new THREE.MTLLoader();
  machineMtl.setPath('surgery_models/Anesthesia Machine/');
  machineMtl.load('Anesthesia Machine.mtl', mats => {
    mats.preload();
    const machineLoader = new THREE.OBJLoader();
    machineLoader.setMaterials(mats);
    machineLoader.setPath('surgery_models/Anesthesia Machine/');
    machineLoader.load('Anesthesia Machine.obj', obj => {
      obj.traverse(c => {
        if(c.isMesh){
          c.castShadow = true;
          c.receiveShadow = true;
        }
      });
      obj.position.set(-1.5,0,0);
      scene.add(obj);
      const anesthesiaZone = createZone(obj.position);
      stations.anesthesia = {
        mesh: obj,
        zone: anesthesiaZone,
        index: 0,
        questions: [
          {question: 'Normal end tidal CO2 in anesthetized dogs is:', options:['20-30 mmHg','35-45 mmHg','50-60 mmHg','70-80 mmHg'], answer:1},
          {question: 'Recommended oxygen flow rate for mask induction in small animals?', options:['1-2 L/min','5-10 mL/kg/min','100 mL/kg/hr','20 L/min'], answer:0}
        ]
      };
    });
  });

  // Instrument table station
  const instr = new THREE.Group();
  const instrTop = new THREE.Mesh(new THREE.BoxGeometry(1.5,0.1,1), new THREE.MeshPhongMaterial({color:0x0000ff}));
  instrTop.position.y = 1;
  instr.add(instrTop);
  const scalpelHandle = new THREE.Mesh(new THREE.BoxGeometry(0.4,0.02,0.05), new THREE.MeshPhongMaterial({color:0xaaaaaa}));
  scalpelHandle.position.set(-0.3,1.06,0);
  instr.add(scalpelHandle);
  const scalpelBlade = new THREE.Mesh(new THREE.BoxGeometry(0.2,0.01,0.02), new THREE.MeshPhongMaterial({color:0xdddddd}));
  scalpelBlade.position.set(-0.1,1.065,0);
  instr.add(scalpelBlade);
  const forceps1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.4,8), new THREE.MeshPhongMaterial({color:0x888888}));
  forceps1.rotation.z = Math.PI/8;
  forceps1.position.set(0.3,1.06,0.1);
  instr.add(forceps1);
  const forceps2 = forceps1.clone();
  forceps2.rotation.z = -Math.PI/8;
  forceps2.position.set(0.34,1.06,-0.1);
  instr.add(forceps2);
  const iLegGeom = new THREE.CylinderGeometry(0.05,0.05,1,8);
  for(let x=-0.65;x<=0.65;x+=1.3){
    for(let z=-0.45;z<=0.45;z+=0.9){
      const leg = new THREE.Mesh(iLegGeom,new THREE.MeshPhongMaterial({color:0x0000ff}));
      leg.position.set(x,0.5,z);
      instr.add(leg);
    }
  }
  instr.position.set(0,0,4);
  scene.add(instr);
  const instrZone = createZone(instr.position);
  stations.instrument = {
    mesh: instr,
    zone: instrZone,
    index: 0,
    questions: [
      {question:'Which instrument is used to clamp small vessels?', options:['Halsted mosquito hemostat','Kelly forceps','Scalpel handle','Needle driver'], answer:0},
      {question:'Which suture pattern is commonly used to close skin?', options:['Simple interrupted','Purse string','Ford interlocking','Chinese finger trap'], answer:0}
    ]
  };

  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('keyup', onKeyUp);
  showIntro();
  animate();
}

function onKeyDown(e){ keys[e.code] = true; }
function onKeyUp(e){ keys[e.code] = false; }

function setupJoystick(el){
  const stick = el.querySelector('.stick');
  let startX = 0, startY = 0;
  const threshold = 20;
  el.addEventListener('touchstart', e=>{
    const t = e.touches[0];
    startX = t.clientX;
    startY = t.clientY;
    stick.style.transform = 'translate(0,0)';
    e.preventDefault();
  });
  el.addEventListener('touchmove', e=>{
    const t = e.touches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;
    const angle = Math.atan2(dy, dx);
    const dist = Math.min(40, Math.hypot(dx, dy));
    stick.style.transform = `translate(${dist*Math.cos(angle)}px,${dist*Math.sin(angle)}px)`;
    keys['ArrowLeft'] = dx < -threshold;
    keys['ArrowRight'] = dx > threshold;
    keys['ArrowUp'] = dy < -threshold;
    keys['ArrowDown'] = dy > threshold;
    e.preventDefault();
  });
  el.addEventListener('touchend', () => {
    keys['ArrowLeft'] = false;
    keys['ArrowRight'] = false;
    keys['ArrowUp'] = false;
    keys['ArrowDown'] = false;
    stick.style.transform = 'translate(0,0)';
  });
}

function moveCamera(delta){
  const moveSpeed = 2;
  if(controls instanceof THREE.PointerLockControls){
    if(keys["KeyW"] || keys["ArrowUp"]) controls.moveForward(moveSpeed * delta);
    if(keys["KeyS"] || keys["ArrowDown"]) controls.moveForward(-moveSpeed * delta);
    if(keys["KeyA"] || keys["ArrowLeft"]) controls.moveRight(-moveSpeed * delta);
    if(keys["KeyD"] || keys["ArrowRight"]) controls.moveRight(moveSpeed * delta);
  }else{
    const rotSpeed = 1.5 * delta;
    if(keys["ArrowLeft"] || keys["KeyA"]) camera.rotation.y += rotSpeed;
    if(keys["ArrowRight"] || keys["KeyD"]) camera.rotation.y -= rotSpeed;
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    dir.y = 0;
    dir.normalize();
    if(keys["ArrowUp"] || keys["KeyW"]) camera.position.add(dir.multiplyScalar(moveSpeed * delta));
    if(keys["ArrowDown"] || keys["KeyS"]) camera.position.add(dir.multiplyScalar(-moveSpeed * delta));
  }
}
function animate(){
  animationId = requestAnimationFrame(animate);
  const delta = clock.getDelta();
  moveCamera(delta);
  if(controls.update) controls.update();
  renderer.render(scene,camera);
  checkStations();
}

function showIntro(){
  const qEl = document.getElementById('surgeryQuestion');
  qEl.textContent = "Click the canvas to lock the cursor. Use WASD or the on-screen joystick to move, and drag the mouse to look around. Approach a station and press E to start questions.";
  document.getElementById('surgeryOptions').innerHTML = '';
  document.getElementById('surgeryNext').classList.add('hidden');
  const promptEl = document.getElementById('interactPrompt');
  if(promptEl) promptEl.classList.add('hidden');
}

function checkStations(){
  if(currentStation) return;
  const camPos2D = new THREE.Vector2(camera.position.x, camera.position.z);
  let found = false;
  for(const key in stations){
    const st = stations[key];
    if(!st.zone || st.index >= st.questions.length) continue;
    const zonePos = new THREE.Vector2(st.zone.position.x, st.zone.position.z);
    const dist = camPos2D.distanceTo(zonePos);
    if(dist < st.zone.userData.radius){
      nearStation = st;
      found = true;
      const promptEl = document.getElementById('interactPrompt');
      if(promptEl){
        promptEl.textContent = 'Press E to start quiz';
        promptEl.classList.remove('hidden');
      }
      if(keys['KeyE']){
        keys['KeyE'] = false;
        currentStation = st;
        nearStation = null;
        if(promptEl) promptEl.classList.add('hidden');
        loadQuestion();
      }
      break;
    }
  }
  if(!found && nearStation){
    nearStation = null;
    const promptEl = document.getElementById('interactPrompt');
    if(promptEl) promptEl.classList.add('hidden');
  }
}

function loadQuestion(){
  if(!currentStation) return;
  const q = currentStation.questions[currentStation.index];
  const qEl = document.getElementById('surgeryQuestion');
  const optDiv = document.getElementById('surgeryOptions');
  qEl.textContent = q.question;
  optDiv.innerHTML = '';
  q.options.forEach((opt,idx)=>{
    const b = document.createElement('button');
    b.textContent = opt;
    b.onclick = ()=>selectAnswer(idx);
    optDiv.appendChild(b);
  });
  document.getElementById('surgeryNext').classList.add('hidden');
}

function selectAnswer(i){
  const q = currentStation.questions[currentStation.index];
  const feedback = document.createElement('p');
  feedback.textContent = i===q.answer ? 'Correct!' : 'Incorrect.';
  document.getElementById('surgeryOptions').appendChild(feedback);
  document.getElementById('surgeryNext').classList.remove('hidden');
}

function nextQuestion(){
  if(!currentStation) return;
  currentStation.index++;
  if(currentStation.index < currentStation.questions.length){
    loadQuestion();
  }else{
    const qEl = document.getElementById('surgeryQuestion');
    const optDiv = document.getElementById('surgeryOptions');
    qEl.textContent = 'Station complete! Move to another area.';
    optDiv.innerHTML = '';
    currentStation = null;
    document.getElementById('surgeryNext').classList.add('hidden');
  }
}

function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function exitSurgery(){
  cancelAnimationFrame(animationId);
  document.removeEventListener('keydown', onKeyDown);
  document.removeEventListener('keyup', onKeyUp);
  const container = document.querySelector('.container');
  const s3dContainer = document.getElementById('surgery3DContainer');
  if(container && s3dContainer){
    s3dContainer.classList.add('hidden');
    container.classList.remove('hidden');
  }else{
    window.location.href = 'index.html';
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  const startBtn = document.getElementById('surgery3DBtn');
  const nextBtn = document.getElementById('surgeryNext');
  const exitBtn = document.getElementById('surgeryExit');
  const joystickEl = document.getElementById('joystick');

  if(startBtn && startBtn.tagName.toLowerCase() === 'button'){
    startBtn.addEventListener('click', ()=>{
      const container = document.querySelector('.container');
      if(container){
        container.classList.add('hidden');
      }
      document.getElementById('surgery3DContainer').classList.remove('hidden');
      if(!scene){
        initSurgeryScene();
      }else{
        showIntro();
      }
    });
  }else{
    initSurgeryScene();
  }

  if(nextBtn){
    nextBtn.addEventListener('click', nextQuestion);
  }
  if(exitBtn){
    exitBtn.addEventListener('click', exitSurgery);
  }

  if(joystickEl && 'ontouchstart' in window){
    joystickEl.classList.remove('hidden');
    setupJoystick(joystickEl);
  }
});

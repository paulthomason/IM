let scene, camera, renderer, animationId;
const stations = {};
let currentStation = null;
const keys = {};

function initSurgeryScene(){
  const canvas = document.getElementById('surgeryCanvas');
  renderer = new THREE.WebGLRenderer({canvas});
  renderer.setSize(window.innerWidth, window.innerHeight);
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x222222);
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.set(0,1.6,5);

  const light = new THREE.AmbientLight(0xffffff,0.6);
  scene.add(light);
  const dirLight = new THREE.DirectionalLight(0xffffff,0.6);
  dirLight.position.set(5,10,7);
  scene.add(dirLight);

  const texLoader = new THREE.TextureLoader();
  const floorTex = texLoader.load('https://threejs.org/examples/textures/hardwood2_diffuse.jpg');
  floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(4,4);
  const wallTex = texLoader.load('https://threejs.org/examples/textures/brick_diffuse.jpg');
  wallTex.wrapS = wallTex.wrapT = THREE.RepeatWrapping;
  wallTex.repeat.set(2,1);

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20,20),
    new THREE.MeshPhongMaterial({map: floorTex})
  );
  floor.rotation.x = -Math.PI/2;
  scene.add(floor);

  const wallMat = new THREE.MeshPhongMaterial({map: wallTex, side:THREE.DoubleSide});
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

  const table = new THREE.Group();
  const tableTop = new THREE.Mesh(new THREE.BoxGeometry(3,0.2,2), new THREE.MeshPhongMaterial({color:0x8e44ad}));
  tableTop.position.y = 1;
  table.add(tableTop);
  const legGeom = new THREE.CylinderGeometry(0.1,0.1,1,6);
  for(let x=-1.3;x<=1.3;x+=2.6){
    for(let z=-0.8;z<=0.8;z+=1.6){
      const leg = new THREE.Mesh(legGeom,new THREE.MeshPhongMaterial({color:0x555555}));
      leg.position.set(x,0.5,z);
      table.add(leg);
    }
  }
  scene.add(table);

  // Crash cart station
  const cart = new THREE.Group();
  const cartBody = new THREE.Mesh(new THREE.BoxGeometry(1,1.2,0.6), new THREE.MeshPhongMaterial({color:0xff0000}));
  cartBody.position.y = 0.6;
  cart.add(cartBody);
  for(let i=0;i<3;i++){
    const drawer = new THREE.Mesh(new THREE.BoxGeometry(0.9,0.25,0.55), new THREE.MeshPhongMaterial({color:0xcc0000}));
    drawer.position.set(0,0.3 + i*0.35,0);
    cart.add(drawer);
  }
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
  stations.cart = {
    mesh: cart,
    index: 0,
    questions: [
      {question: 'Which drug is recommended at 0.01 mg/kg IV during CPR in dogs?', options:['Epinephrine','Atropine','Lidocaine','Diazepam'], answer:0},
      {question: 'Approximate canine shock dose of isotonic crystalloids?', options:['90 mL/kg','10 mL/kg','20 mL/kg','60 mL/kg'], answer:0}
    ]
  };

  // Anesthesia machine station
  const machine = new THREE.Group();
  const base = new THREE.Mesh(new THREE.BoxGeometry(1,0.2,1), new THREE.MeshPhongMaterial({color:0x00ff00}));
  base.position.y = 0.1;
  machine.add(base);
  const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,1.2,8), new THREE.MeshPhongMaterial({color:0x00ff00}));
  stand.position.y = 0.7;
  machine.add(stand);
  const top = new THREE.Mesh(new THREE.BoxGeometry(1,0.2,0.8), new THREE.MeshPhongMaterial({color:0x00ff00}));
  top.position.y = 1.3;
  machine.add(top);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.6,0.4), new THREE.MeshPhongMaterial({color:0x333333}));
  screen.position.set(0,1.5,0.41);
  machine.add(screen);
  const hose = new THREE.Mesh(new THREE.TorusGeometry(0.3,0.02,8,16), new THREE.MeshPhongMaterial({color:0xaaaaaa}));
  hose.rotation.x = Math.PI/2;
  hose.position.set(0.3,1.1,0);
  machine.add(hose);
  machine.position.set(-4,0,-4);
  scene.add(machine);
  stations.anesthesia = {
    mesh: machine,
    index: 0,
    questions: [
      {question: 'Normal end tidal CO2 in anesthetized dogs is:', options:['20-30 mmHg','35-45 mmHg','50-60 mmHg','70-80 mmHg'], answer:1},
      {question: 'Recommended oxygen flow rate for mask induction in small animals?', options:['1-2 L/min','5-10 mL/kg/min','100 mL/kg/hr','20 L/min'], answer:0}
    ]
  };

  // Instrument table station
  const instr = new THREE.Group();
  const instrTop = new THREE.Mesh(new THREE.BoxGeometry(1.5,0.1,1), new THREE.MeshPhongMaterial({color:0x0000ff}));
  instrTop.position.y = 1;
  instr.add(instrTop);
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
  stations.instrument = {
    mesh: instr,
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

function moveCamera(){
  const moveSpeed = 0.1;
  const rotSpeed = 0.03;
  if(keys['ArrowLeft']) camera.rotation.y += rotSpeed;
  if(keys['ArrowRight']) camera.rotation.y -= rotSpeed;
  const dir = new THREE.Vector3();
  camera.getWorldDirection(dir);
  dir.y = 0;
  dir.normalize();
  if(keys['ArrowUp']) camera.position.add(dir.multiplyScalar(moveSpeed));
  if(keys['ArrowDown']) camera.position.add(dir.multiplyScalar(-moveSpeed));
}

function animate(){
  animationId = requestAnimationFrame(animate);
  moveCamera();
  renderer.render(scene,camera);
  checkStations();
}

function showIntro(){
  const qEl = document.getElementById('surgeryQuestion');
  qEl.textContent = 'Use arrow keys to move around the room. Approach a station for questions.';
  document.getElementById('surgeryOptions').innerHTML = '';
  document.getElementById('surgeryNext').classList.add('hidden');
}

function checkStations(){
  if(currentStation) return;
  const pos = camera.position;
  for(const key in stations){
    const st = stations[key];
    if(pos.distanceTo(st.mesh.position) < 1.5 && st.index < st.questions.length){
      currentStation = st;
      loadQuestion();
      break;
    }
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
});

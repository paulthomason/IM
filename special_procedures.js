let scene, camera, renderer, clock, animationId;
const keys = {};

function initScene() {
  const canvas = document.getElementById('specialCanvas');
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 1.6, 5);
  clock = new THREE.Clock();

  const ambient = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambient);

  createRoom();
  loadDesk();
  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('keyup', onKeyUp);
  window.addEventListener('resize', onWindowResize);
  animate();
}

function createRoom() {
  const floorMat = new THREE.MeshPhongMaterial({ color: 0x444444 });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), floorMat);
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  function createNumberMaterial(num) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 400px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(num.toString(), canvas.width / 2, canvas.height / 2);
    const texture = new THREE.CanvasTexture(canvas);
    return new THREE.MeshPhongMaterial({ map: texture, side: THREE.DoubleSide });
  }

  const northWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 5), createNumberMaterial(1));
  northWall.position.set(0, 2.5, -10);
  scene.add(northWall);

  const southWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 5), createNumberMaterial(2));
  southWall.position.set(0, 2.5, 10);
  southWall.rotation.y = Math.PI;
  scene.add(southWall);

  const eastWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 5), createNumberMaterial(3));
  eastWall.position.set(10, 2.5, 0);
  eastWall.rotation.y = -Math.PI / 2;
  scene.add(eastWall);

  const westWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 5), createNumberMaterial(4));
  westWall.position.set(-10, 2.5, 0);
  westWall.rotation.y = Math.PI / 2;
  scene.add(westWall);

  const table = new THREE.Mesh(new THREE.BoxGeometry(20, 0.4, 0.6), new THREE.MeshPhongMaterial({ color: 0x888888 }));
  table.position.set(0, 0.2, -9.7);
  scene.add(table);
}

function loadDesk() {
  const mtlLoader = new THREE.MTLLoader();
  mtlLoader.setPath('Special_Procedures_3D_Models/computer_Desk/');
  mtlLoader.load('computer_desk.mtl', mats => {
    mats.preload();
    const objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(mats);
    objLoader.setPath('Special_Procedures_3D_Models/computer_Desk/');
    objLoader.load('computer_desk.obj', obj => {
      obj.scale.set(0.01, 0.01, 0.01);
      // Place the desk in the corner where wall 4 meets wall 1
      obj.position.set(-9.7, 0, -9.7);
      obj.rotation.y = Math.PI / 2;
      scene.add(obj);
    });
  });
}

function onKeyDown(e) { keys[e.code] = true; }
function onKeyUp(e) { keys[e.code] = false; }

function moveCamera(delta) {
  const speed = 3;
  const rotSpeed = 1.5 * delta;
  if (keys['KeyA']) camera.rotation.y += rotSpeed;
  if (keys['KeyD']) camera.rotation.y -= rotSpeed;

  const dir = new THREE.Vector3();
  camera.getWorldDirection(dir);
  dir.y = 0;
  dir.normalize();
  if (keys['KeyW']) camera.position.add(dir.multiplyScalar(speed * delta));
  if (keys['KeyS']) camera.position.add(dir.multiplyScalar(-speed * delta));
}

function animate() {
  animationId = requestAnimationFrame(animate);
  const delta = clock.getDelta();
  moveCamera(delta);
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function exit() {
  cancelAnimationFrame(animationId);
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
  initScene();
  document.getElementById('specialExit').addEventListener('click', exit);
});

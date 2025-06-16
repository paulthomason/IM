let scene, camera, renderer, controls, animationId;
let questionIndex = 0;
const questions3D = [
  {
    question: "Which drug is used to reverse xylazine in dogs?",
    options: ["Atipamezole", "Flumazenil", "Naloxone", "Yohimbine"],
    answer: 3
  },
  {
    question: "Normal end tidal CO2 in anesthetized dogs is:",
    options: ["20-30 mmHg", "35-45 mmHg", "50-60 mmHg", "65-75 mmHg"],
    answer: 1
  },
  {
    question: "For emergency IV fluids in a cat, the shock dose is:",
    options: ["10 mL/kg", "30 mL/kg", "60 mL/kg", "90 mL/kg"],
    answer: 2
  }
];
function initSurgeryScene(){
  const canvas = document.getElementById('surgeryCanvas');
  renderer = new THREE.WebGLRenderer({canvas});
  renderer.setSize(window.innerWidth, window.innerHeight);
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x222222);
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.set(0,2,5);
  const light = new THREE.AmbientLight(0xffffff,1);
  scene.add(light);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(20,20), new THREE.MeshPhongMaterial({color:0x555555}));
  floor.rotation.x = -Math.PI/2;
  scene.add(floor);
  const table = new THREE.Mesh(new THREE.BoxGeometry(3,1,2), new THREE.MeshPhongMaterial({color:0x8e44ad}));
  table.position.set(0,0.5,0);
  scene.add(table);
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  animate();
  loadQuestion();
}
function animate(){
  animationId = requestAnimationFrame(animate);
  renderer.render(scene,camera);
}
function loadQuestion(){
  const q = questions3D[questionIndex];
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
  const q = questions3D[questionIndex];
  const feedback = document.createElement('p');
  if(i===q.answer){
    feedback.textContent = 'Correct!';
  } else {
    feedback.textContent = 'Incorrect.';
  }
  document.getElementById('surgeryOptions').appendChild(feedback);
  document.getElementById('surgeryNext').classList.remove('hidden');
}
function nextQuestion(){
  questionIndex++;
  if(questionIndex < questions3D.length){
    loadQuestion();
  }else{
    document.getElementById('surgeryUI').innerHTML = '<p>Training complete!</p><button id="surgeryExit">Exit</button>';
    document.getElementById('surgeryExit').addEventListener('click', exitSurgery);
  }
  document.getElementById('surgeryNext').classList.add('hidden');
}
function exitSurgery(){
  cancelAnimationFrame(animationId);
  document.getElementById('surgery3DContainer').classList.add('hidden');
  document.querySelector('.container').classList.remove('hidden');
}
document.getElementById('surgery3DBtn').addEventListener('click', ()=>{
  document.querySelector('.container').classList.add('hidden');
  document.getElementById('surgery3DContainer').classList.remove('hidden');
  if(!scene){
    initSurgeryScene();
  }else{
    loadQuestion();
  }
});
document.getElementById('surgeryNext').addEventListener('click', nextQuestion);
document.getElementById('surgeryExit').addEventListener('click', exitSurgery);

function main(){
  var scene = new THREE.Scene();
  var box = generateBox(1,1,1);
  box.name = "box-1";
  box.position.y =       box.geometry.parameters.width/2;

  var box2 = generateBox2(1,1,1);
  box2.name = "box-2";
  box2.position.y =       box2.geometry.parameters.width/2;
  
  var floor = generateFloor(100, 200);
  floor.name = "floor";
  floor.rotation.x = Math.PI/2;
  //floor.add(box);
  var pointLight = generatePointLight(0xffffff, 1);
  pointLight.position.y =70;
  scene.add(box);
  box.translateX(-1);
  scene.add(box2);
  box2.translateX(1);
  scene.add(floor);
  scene.add(pointLight);
  a = 0;
  a2 =0; 
  b = 0;
  b2 =0;
  c = 0;
  c2 =0;
  d = 0; 
  d2 =0;
  e = 0;

  var camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth/window.innerHeight,
1,
1000

);
camera.position.x = 1;
camera.position.y = 5;
camera.position.z = 10;
camera.lookAt(new THREE.Vector3(0,0,-5));
//box.add(camera);

var renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = false;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('rgb(50,150,225)');
document.getElementById
('test').appendChild(renderer.domElement);
update(renderer, scene, camera);
return scene;
}

function generateFloor(w,d) { 
  var geo = new THREE.PlaneGeometry(w, d);
  var mat = new THREE.MeshPhongMaterial({
color: 'rgb(100,100,100',
side: THREE.DoubleSide
 });
  var mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
   return mesh;
}


function generateBox(w, h, d){
var geo = new THREE.BoxGeometry(w, h, d);
var mat = new THREE.MeshPhongMaterial(
{color: 'rgb(100,225,100)'
});
var mesh = new THREE.Mesh(geo, mat);
mesh.castShadow = true;
return mesh;
}



function generateBox2(w, h, d){
var geo = new THREE.BoxGeometry(w, h, d);
var mat = new THREE.MeshPhongMaterial(
{color: 'rgb(225,225,100)'
});
var mesh = new THREE.Mesh(geo, mat);
mesh.castShadow = true;
return mesh;
}


function generatePointLight(color, intensity){
  var light = new THREE.PointLight(color, intensity);
light.castShadow = true;
return light;
}

function arightDown(){

  a =0.1;
  e =0;
  
}
function arightUp(){
  a = 0;
}

function brightDown(){
  b =0.1;
  e =0;
}
function brightUp(){
  b = 0;
}

function crightDown(){
  c =0.1;
  e =0;
}
function crightUp(){
  c = 0;
}

function drightDown(){
  d =0.3;
  e =0;
}
function drightUp(){
  d = 0;
}


function arightDown2(){

  a2 =0.1;
  e =1;
  
}
function arightUp2(){
  a2 = 0;
}

function brightDown2(){
  b2 =0.1;
  e =1;
}
function brightUp2(){
  b2 = 0;
}

function crightDown2(){
  c2 =0.1;
  e =1;
}
function crightUp2(){
  c2 = 0;
}

function drightDown2(){
  d2 =0.3;
  e =1;
}
function drightUp2(){
  d2 = 0;
}

function update(renderer, scene, camera){
  renderer.render(scene, camera);


   if (a>0&&'drightDown'){}
  var box = scene.getObjectByName("box-1");
  
  scene.children[0].rotation.y += a;
  scene.children[0].rotation.y -= b;
  scene.children[0].translateZ(c);
  scene.children[0].translateZ(-d);
  //scene.children[0].add(camera);

  var box2 = scene.getObjectByName("box-2");
  
  scene.children[1].rotation.y += a2;
  scene.children[1].rotation.y -= b2;
  scene.children[1].translateZ(c2);
  scene.children[1].translateZ(-d2);
  scene.children[e].add(camera);



  scene.traverse(function(child){
    //child.position.x += 0.001;
  });
  requestAnimationFrame(function(){
    update(renderer, scene, camera);
  });
}
var scene = main();
console.log(scene);
function main(){
  var scene = new THREE.Scene();

  var sphere = generateSphere(.5,40,40);
  sphere.name = "sphere-1";
  //sphere.position.y =       sphere.geometry.parameters.width/2;

  var sphere2 = generateSphere2(.5,40,40);
  sphere2.name = "sphere-2";
  //sphere.position.y =       sphere2.geometry.parameters.width/2;

 var sphere3 = generateSphere3(.05,40,40);
  sphere3.name = "sphere-3";
  //sphere.position.y =       sphere3.geometry.parameters.width/2;


  var box2 = generateBox2(4,.2,4);
  box2.name = "box-2";
  //box2.position.y =       box2.geometry.parameters.width/2;
  
  var floor = generateFloor(100, 200);
  floor.name = "floor";
  floor.rotation.x = Math.PI/2;
  //floor.add(box);
  var pointLight = generatePointLight(0xffffff, 1);
  pointLight.position.y =70;
  scene.add(sphere);
  sphere.translateY(.5);
  sphere.translateZ(-30);
  sphere.translateX(-30);
  scene.add(sphere2);
  sphere2.translateY(.5);
  scene.add(sphere3);
  sphere3.translateY(.5);
  scene.add(box2);
  box2.translateZ(-4);
  box2.translateY(1.8);
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
  g = 1;
  h = 0;
  

  var camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth/window.innerHeight,
1,
1000

);
camera.position.x =0;//1;
camera.position.y =0;//5;
camera.position.z =0;//10;
camera.lookAt(new THREE.Vector3(0,0,-5));
sphere.add(camera);

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


function generateSphere(w, h, d){
var geo = new THREE.SphereGeometry(w, h, d);
var mat = new THREE.MeshPhongMaterial(
{color: 'rgb(100,225,100)'
});
var mesh = new THREE.Mesh(geo, mat);
mesh.castShadow = true;
return mesh;
}

function generateSphere2(w, h, d){
var geo = new THREE.SphereGeometry(w, h, d);
var mat = new THREE.MeshPhongMaterial(
{color: 'rgb(100,225,100)'
});
var mesh = new THREE.Mesh(geo, mat);
mesh.castShadow = true;
return mesh;
}


function generateSphere3(w, h, d){
var geo = new THREE.SphereGeometry(w, h, d);
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
b =1;

}
function brightUp(){
  b = 0;
  g=0;
}
function crightDown(){
  c =0.1;
  e =0;
}
function crightUp(){
  c = 0;
}

function drightDown(){
  d =3;
  e =0;
dr();
}
function drightUp(){
  d =3;
}


function arightDown2(){

  a2 =0.01;
  e =1;
  
}
function arightUp2(){
  a2 = 0;
}

function brightDown2(){
  b2 =0.01;
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

//shoot
 setInterval(function dr(){
d =0;
 
scene.children[2].position.z=scene.children[1].position.z;

scene.children[2].position.y=scene.children[1].position.y;

scene.children[2].position.x=scene.children[1].position.x;


},500)

//shoot end

function update(renderer, scene, camera){
  renderer.render(scene, camera);


   if (a>0&&'drightDown'){}
  var box = scene.getObjectByName("sphere-1");
  

 
scene.children[1].add(camera);

  
  scene.children[1].rotation.y += a2;
  scene.children[1].rotation.y -= b2;
  scene.children[1].translateZ(c2);
  scene.children[1].translateZ(-d2);


  scene.children[2].rotation.y += a2;
  scene.children[2].rotation.y -= b2;
  scene.children[2].translateZ(c2);
  scene.children[2].translateZ(-d2);
  scene.children[2].translateZ(-d);

//movement

if(scene.children[0].position.z-.75>scene.children[1].position.z){
scene.children[0].position.z-=.05;
}

if(scene.children[0].position.z<scene.children[1].position.z-.75){
scene.children[0].position.z+=.05;
}

if(scene.children[0].position.x-.75>scene.children[1].position.x){
scene.children[0].position.x-=.05;
}

if(scene.children[0].position.x<scene.children[1].position.x-.75){
scene.children[0].position.x+=.05;
}
//movement end

//jump

if (b>0 && g>0 && scene.children[1].position.y<31){

scene.children[1].position.y+=b;
scene.children[2].position.y+=b;


}

if (scene.children[1].position.y>0.5+h){


scene.children[1].position.y-=0.5;
scene.children[2].position.y-=0.5;

}

if (scene.children[1].position.y>10+h){g=0;};

if (scene.children[1].position.y<.6+h)
{g=1;}


//jump end

//collision abfrage

//up

if (scene.children[1].position.z-.5 < scene.children[3].position.z+2||
scene.children[1].position.z+.5 > scene.children[3].position.z-2
){
 
h=2;
}; 


if (scene.children[1].position.x-.5 < scene.children[3].position.x+2||
scene.children[1].position.x+.5 > scene.children[3].position.x-2
){
 
h=2;
}; 
//down

if (scene.children[1].position.z-.5 > scene.children[3].position.z+2||
scene.children[1].position.z+.5< scene.children[3].position.z-2){
 
h=0;
}; 

if (scene.children[1].position.x-.5 > scene.children[3].position.x+2||
scene.children[1].position.x+.5 < scene.children[3].position.x-2){
 
h=0;
}; 
//end collision

//enemy kill
if (scene.children[2].position.z-.5 < scene.children[0].position.z+.5&&
scene.children[2].position.z+.5 > scene.children[0].position.z-.5
&&scene.children[2].position.x-.5 < scene.children[0].position.x+.5&&
scene.children[2].position.x+.5 > scene.children[0].position.x-.5
){
scene.children[0].position.x=-30;
scene.children[0].position.z=-30;
}; 

//end enemy kill



  scene.traverse(function(child){
    
  });
  requestAnimationFrame(function(){
    update(renderer, scene, camera);
  });
}
var scene = main();
console.log(scene);
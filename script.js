function main(){
  var scene = new THREE.Scene();
  var box = generateBox(1,1,1);
  box.name = "box-1";
  box.position.y =       box.geometry.parameters.width/2;


 var box2 = generateBox2(1,1,1);
  box2.name = "box-2";
  box2.position.y =       box2.geometry.parameters.width/2;


 var box3 = generateBox3(1,1,1);
  box3.name = "box-3";
  box3.position.y =       box2.geometry.parameters.width/2;
  
  var floor = generateFloor(100, 20);
  floor.name = "floor";
  floor.rotation.x = Math.PI/2;
  var pointLight = generatePointLight(0xffffff, 1);
  pointLight.position.y =70;
  scene.add(box);
  box.translateX(-1);
  scene.add(box2);
  box2.translateX(10);
  scene.add(box3);
  box3.translateX(4);

 
  scene.add(floor);
  scene.add(pointLight);

  b = 0;
  g = 1;
  score=0;
  speed=0;

  var camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth/window.innerHeight,
1,
1000

);
camera.position.x = 4;
camera.position.y = 3;
camera.position.z = 25;
camera.lookAt(new THREE.Vector3(4,2,-5));


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
{color: 'rgb(225,100,100)'
});
var mesh = new THREE.Mesh(geo, mat);
mesh.castShadow = true;
return mesh;
}

function generateBox2(w, h, d){
var geo = new THREE.BoxGeometry(w, h, d);
var mat = new THREE.MeshPhongMaterial(
{color: 'rgb(100,225,100)'
});
var mesh = new THREE.Mesh(geo, mat);
mesh.castShadow = true;
return mesh;
}



function generateBox3(w, h, d){
var geo = new THREE.BoxGeometry(w, h, d);
var mat = new THREE.MeshPhongMaterial(
{color: 'rgb(100,225,100)'
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


function brightDown(){
b =1;

}
function brightUp(){
  b = 0;
  g=0;
}


function update(renderer, scene, camera){
  renderer.render(scene, camera);

  
  var box = scene.getObjectByName("box-1");
  
  scene.children[0].add(camera);

if(scene.children[0].position.x>scene.children[1].position.x+2){speed=speed+1;}

if(scene.children[0].position.x>scene.children[2].position.x+2){speed=speed+1;}


if(scene.children[1].position.x>-5){scene.children[1].position.x-=0.1+speed/10000;};

if(scene.children[1].position.x<-4){scene.children[1].position.x =10+Math.floor(Math.random() * 24);
score=score+5};


if(scene.children[2].position.x>-5){scene.children[2].position.x-=0.1+speed/10000;};

if(scene.children[2].position.x<-4){scene.children[2].position.x =10+Math.floor(Math.random() * 12);
score=score+5};



if (b>0 && g>0 && scene.children[0].position.y<31){

scene.children[0].position.y+=b;

}

if (scene.children[0].position.y>0.5){

scene.children[0].position.y-=0.5;


}

if (scene.children[0].position.y>10){g=0;};

if (scene.children[0].position.y<0.6)
{g=1;}

if(scene.children[0].position.x>scene.children[1].position.x && scene.children[0].position.x<scene.children[1].position.x+0.1 && scene.children[0].position.y<1){alert(score);
score=0;
}

if(scene.children[0].position.x>scene.children[2].position.x && scene.children[0].position.x<scene.children[2].position.x+0.1 && scene.children[0].position.y<1){alert(score);
score=0;
}
  scene.traverse(function(child){
  });
  requestAnimationFrame(function(){
    update(renderer, scene, camera);
  });
}
var scene = main();
console.log(scene);
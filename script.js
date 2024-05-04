
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
camera.position.y =5;//5;
camera.position.z =20;//10;
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

document.addEventListener('keydown',
function(event){
if (event.key === 'a')
{
a2=0.03;
}
});

document.addEventListener('keyup',
function(event){
if (event.key === 'a')
{
a2=0;
}
});

document.addEventListener('keydown',
function(event){
if (event.key === 'd')
{
b2=0.03;
}
});

document.addEventListener('keyup',
function(event){
if (event.key === 'd')
{
b2=0;
}
});

document.addEventListener('keydown',
function(event){
if (event.key === 'w')
{
d2=0.1;
}
});

document.addEventListener('keyup',
function(event){
if (event.key === 'w')
{
d2=0;
}
});

document.addEventListener('keydown',
function(event){
if (event.key === 's')
{
c2=0.1;
}
});

document.addEventListener('keyup',
function(event){
if (event.key === 's')
{
c2=0;
}
});

document.addEventListener('keydown',
function(event){
if (event.key === 'p')
{
d=3;
}
});

document.addEventListener('keyup',
function(event){
if (event.key === 'p')
{
d=3;
}
});

document.addEventListener('keydown',
function(event){
if (event.key === 'l')
{
b=1;
}
});

document.addEventListener('keyup',
function(event){
if (event.key === 'l')
{
b = 0;
  g=0;
}
});
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






let StickStatus =
{
    xPosition: 0,
    yPosition: 0,
    x: 0,
    y: 0,
    cardinalDirection: "C"
};


var JoyStick = (function(container, parameters, callback)
{
    parameters = parameters || {};
    var title = (typeof parameters.title === "undefined" ? "joystick" : parameters.title),
        width = (typeof parameters.width === "undefined" ? 0 : parameters.width),
        height = (typeof parameters.height === "undefined" ? 0 : parameters.height),
        internalFillColor = (typeof parameters.internalFillColor === "undefined" ? "#ffffff" : parameters.internalFillColor),
        internalLineWidth = (typeof parameters.internalLineWidth === "undefined" ? 10 : parameters.internalLineWidth),
        internalStrokeColor = (typeof parameters.internalStrokeColor === "undefined" ? "#d0d0d0" : parameters.internalStrokeColor),
        externalLineWidth = (typeof parameters.externalLineWidth === "undefined" ? 2 : parameters.externalLineWidth),
        externalStrokeColor = (typeof parameters.externalStrokeColor ===  "undefined" ? "#d0d0d0" : parameters.externalStrokeColor),
        autoReturnToCenter = (typeof parameters.autoReturnToCenter === "undefined" ? true : parameters.autoReturnToCenter);

    callback = callback || function(StickStatus) {};

    // Create Canvas element and add it in the Container object
    var objContainer = document.getElementById(container);
    
    // Fixing Unable to preventDefault inside passive event listener due to target being treated as passive in Chrome [Thanks to https://github.com/artisticfox8 for this suggestion]
    objContainer.style.touchAction = "none";

    var canvas = document.createElement("canvas");
    canvas.id = title;
    if(width === 0) { width = objContainer.clientWidth; }
    if(height === 0) { height = objContainer.clientHeight; }
    canvas.width = width;
    canvas.height = height;
    objContainer.appendChild(canvas);
    var context=canvas.getContext("2d");

    var pressed = 0; // Bool - 1=Yes - 0=No
    var circumference = 2 * Math.PI;
    var internalRadius = (canvas.width-((canvas.width/2)+10))/2;
    var maxMoveStick = internalRadius + 5;
    var externalRadius = internalRadius + 30;
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var directionHorizontalLimitPos = canvas.width / 10;
    var directionHorizontalLimitNeg = directionHorizontalLimitPos * -1;
    var directionVerticalLimitPos = canvas.height / 10;
    var directionVerticalLimitNeg = directionVerticalLimitPos * -1;
    // Used to save current position of stick
    var movedX=centerX;
    var movedY=centerY;

    // Check if the device support the touch or not
    if("ontouchstart" in document.documentElement)
    {
        canvas.addEventListener("touchstart", onTouchStart, false);
        document.addEventListener("touchmove", onTouchMove, false);
        document.addEventListener("touchend", onTouchEnd, false);
    }
    else
    {
        canvas.addEventListener("mousedown", onMouseDown, false);
        document.addEventListener("mousemove", onMouseMove, false);
        document.addEventListener("mouseup", onMouseUp, false);
    }
    // Draw the object
    drawExternal();
    drawInternal();

    /******************************************************
     * Private methods
     *****************************************************/

    /**
     * @desc Draw the external circle used as reference position
     */
    function drawExternal()
    {
        context.beginPath();
        context.arc(centerX, centerY, externalRadius, 0, circumference, false);
        context.lineWidth = externalLineWidth;
        context.strokeStyle = externalStrokeColor;
        context.stroke();
    }

    /**
     * @desc Draw the internal stick in the current position the user have moved it
     */
    function drawInternal()
    {
        context.beginPath();
        if(movedX<internalRadius) { movedX=maxMoveStick; }
        if((movedX+internalRadius) > canvas.width) { movedX = canvas.width-(maxMoveStick); }
        if(movedY<internalRadius) { movedY=maxMoveStick; }
        if((movedY+internalRadius) > canvas.height) { movedY = canvas.height-(maxMoveStick); }
        context.arc(movedX, movedY, internalRadius, 0, circumference, false);
        // create radial gradient
        var grd = context.createRadialGradient(centerX, centerY, 5, centerX, centerY, 120);
        // Light color
        grd.addColorStop(0, internalFillColor);
        // Dark color
        grd.addColorStop(0, internalStrokeColor);
        context.fillStyle = grd;
        context.fill();
        context.lineWidth = internalLineWidth;
        context.strokeStyle = internalStrokeColor;
        context.stroke();
    }

    /**
     * @desc Events for manage touch
     */
    let touchId = null;
    function onTouchStart(event)
    {
        pressed = 1;
        touchId = event.targetTouches[0].identifier;
    }

    function onTouchMove(event)
    {
        if(pressed === 1 && event.targetTouches[0].target === canvas)
        {
            movedX = event.targetTouches[0].pageX;
            movedY = event.targetTouches[0].pageY;
            // Manage offset
            if(canvas.offsetParent.tagName.toUpperCase() === "BODY")
            {
                movedX -= canvas.offsetLeft;
                movedY -= canvas.offsetTop;
            }
            else
            {
                movedX -= canvas.offsetParent.offsetLeft;
                movedY -= canvas.offsetParent.offsetTop;
            }
            // Delete canvas
            context.clearRect(0, 0, canvas.width, canvas.height);
            // Redraw object
            drawExternal();
            drawInternal();

            // Set attribute of callback
            StickStatus.xPosition = movedX;
            StickStatus.yPosition = movedY;
            StickStatus.x = (100*((movedX - centerX)/maxMoveStick)).toFixed();
            StickStatus.y = ((100*((movedY - centerY)/maxMoveStick))*-1).toFixed();
            StickStatus.cardinalDirection = getCardinalDirection();
            callback(StickStatus);
        }
    }

    function onTouchEnd(event)
    {
        if (event.changedTouches[0].identifier !== touchId) return;

        pressed = 0;
        // If required reset position store variable
        if(autoReturnToCenter)
        {
            movedX = centerX;
            movedY = centerY;
        }
        // Delete canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        // Redraw object
        drawExternal();
        drawInternal();

        // Set attribute of callback
        StickStatus.xPosition = movedX;
        StickStatus.yPosition = movedY;
        StickStatus.x = (100*((movedX - centerX)/maxMoveStick)).toFixed();
        StickStatus.y = ((100*((movedY - centerY)/maxMoveStick))*-1).toFixed();
        StickStatus.cardinalDirection = getCardinalDirection();
        callback(StickStatus);
    }

    /**
     * @desc Events for manage mouse
     */
    function onMouseDown(event) 
    {
        pressed = 1;
    }

    /* To simplify this code there was a new experimental feature here: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX , but it present only in Mouse case not metod presents in Touch case :-( */
    function onMouseMove(event) 
    {
        if(pressed === 1)
        {
            movedX = event.pageX;
            movedY = event.pageY;
            // Manage offset
            if(canvas.offsetParent.tagName.toUpperCase() === "BODY")
            {
                movedX -= canvas.offsetLeft;
                movedY -= canvas.offsetTop;
            }
            else
            {
                movedX -= canvas.offsetParent.offsetLeft;
                movedY -= canvas.offsetParent.offsetTop;
            }
            // Delete canvas
            context.clearRect(0, 0, canvas.width, canvas.height);
            // Redraw object
            drawExternal();
            drawInternal();

            // Set attribute of callback
            StickStatus.xPosition = movedX;
            StickStatus.yPosition = movedY;
            StickStatus.x = (100*((movedX - centerX)/maxMoveStick)).toFixed();
            StickStatus.y = ((100*((movedY - centerY)/maxMoveStick))*-1).toFixed();
            StickStatus.cardinalDirection = getCardinalDirection();
            callback(StickStatus);
        }
    }

    function onMouseUp(event) 
    {
        pressed = 0;
        // If required reset position store variable
        if(autoReturnToCenter)
        {
            movedX = centerX;
            movedY = centerY;
        }
        // Delete canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        // Redraw object
        drawExternal();
        drawInternal();

        // Set attribute of callback
        StickStatus.xPosition = movedX;
        StickStatus.yPosition = movedY;
        StickStatus.x = (100*((movedX - centerX)/maxMoveStick)).toFixed();
        StickStatus.y = ((100*((movedY - centerY)/maxMoveStick))*-1).toFixed();
        StickStatus.cardinalDirection = getCardinalDirection();
        callback(StickStatus);
    }

    function getCardinalDirection()
    {
        let result = "";
        let orizontal = movedX - centerX;
        let vertical = movedY - centerY;
        
        if(vertical >= directionVerticalLimitNeg && vertical <= directionVerticalLimitPos)
        {
            result = "C";
        }
        if(vertical < directionVerticalLimitNeg)
        {
            result = "N";
        }
        if(vertical > directionVerticalLimitPos)
        {
            result = "S";
        }
        
        if(orizontal < directionHorizontalLimitNeg)
        {
            if(result === "C")
            { 
                result = "W";
            }
            else
            {
                result += "W";
            }
        }
        if(orizontal > directionHorizontalLimitPos)
        {
            if(result === "C")
            { 
                result = "E";
            }
            else
            {
                result += "E";
            }
        }
        
        return result;
    }

    /******************************************************
     * Public methods
     *****************************************************/

    /**
     * @desc The width of canvas
     * @return Number of pixel width 
     */
    this.GetWidth = function () 
    {
        return canvas.width;
    };

    /**
     * @desc The height of canvas
     * @return Number of pixel height
     */
    this.GetHeight = function () 
    {
        return canvas.height;
    };

    /**
     * @desc The X position of the cursor relative to the canvas that contains it and to its dimensions
     * @return Number that indicate relative position
     */
    this.GetPosX = function ()
    {
        return movedX;
    };

    /**
     * @desc The Y position of the cursor relative to the canvas that contains it and to its dimensions
     * @return Number that indicate relative position
     */
    this.GetPosY = function ()
    {
        return movedY;
    };

    /**
     * @desc Normalizzed value of X move of stick
     * @return Integer from -100 to +100
     */
    this.GetX = function ()
    {
        return (100*((movedX - centerX)/maxMoveStick)).toFixed();
    };

    /**
     * @desc Normalizzed value of Y move of stick
     * @return Integer from -100 to +100
     */
    this.GetY = function ()
    {
        return ((100*((movedY - centerY)/maxMoveStick))*-1).toFixed();
    };

    /**
     * @desc Get the direction of the cursor as a string that indicates the cardinal points where this is oriented
     * @return String of cardinal point N, NE, E, SE, S, SW, W, NW and C when it is placed in the center
     */
    this.GetDir = function()
    {
        return getCardinalDirection();
    };




setInterval (function(){if(Joy2.GetPosX()<51&&Joy2.GetPosX()<100){a2=0.03;}},50);
setInterval (function(){if(Joy2.GetPosX()>51&&Joy2.GetPosX()>51){a2=0;}},50);
setInterval (function(){if(Joy2.GetPosX()>149&&Joy2.GetPosX()>100){b2=0.03;}},50);
setInterval (function(){if(Joy2.GetPosX()<149&&Joy2.GetPosX()<149){b2=0;}},50);


setInterval (function(){if(Joy2.GetPosY()<51&&Joy2.GetPosY()<100){d2=0.3;}},50);
setInterval (function(){if(Joy2.GetPosY()>51&&Joy2.GetPosY()>51){d2=0;}},50);
setInterval (function(){if(Joy2.GetPosY()>149&&Joy2.GetPosY()>100){c2=0.3;}},50);
setInterval (function(){if(Joy2.GetPosY()<149&&Joy2.GetPosY()<149){c2=0;}},50);


});

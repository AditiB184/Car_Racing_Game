canvas=document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");
Car1_width=120;
Car1_height=70;
Car1_image="Car1.png";
Car1_x=10;
Car1_y=410;

Car2_width=120;
Car2_height=70;
Car2_image="Car2.png";
Car2_x=10;
Car2_y=100;

background_image=""

function Add(){
background_imgTag= new Image();
background_imgTag.onload= uploadBackground;
background_imgTag.src=background_image;

Car1_imgTag=new Image();
Car1_imgTag.onload=uploadCar1;
Car1_imgTag.src=Car1_image;

Car2_imgTag=new Image();
Car2_imgTag.onload=uploadCar2;
Car2_imgTag.src=Car2_image;
}

function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadCar1(){
ctx.drawImage(Car1_imgTag,Car1_x,Car1_y,Car1_width,Car1_height);
}

function uploadCar2(){
    ctx.drawImage(Car2_imgTag,Car2_x,Car2_y,Car2_width,Car2_height);
    }

window.addEventListener("keydown",MyKeydown);

function MyKeydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38'){
up();
console.log("up");
}

if(keyPressed=='40'){
    down();
    console.log("down");
    }
}

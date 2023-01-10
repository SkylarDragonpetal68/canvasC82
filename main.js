canvas=document.getElementById("c");
ctx= canvas.getContext("2d");
var last_position_of_x,last_position_of_y;
var mouseEvent="Empty";
canvas.addEventListener("MouseDown",mouseDown)

function mouseDown(){
mouseEvent="MouseDown"
}

canvas.addEventListener("MouseMove",mouseMove)

function mouseMove(){
    var current_position_of_x=e.clientX-canvas.offsetLeft;
    var current_position_of_y=e.clientY-canvas.offsetTop;

    if(mouseEvent="MouseDown"){
        ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=4;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_of_x,current_position_of_y);
ctx.stroke();
    }

last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;
}
canvas.addEventListener("MouseUp",mouseUp)
function mouseUp(){
mouseEvent="mouseUp";
}

canvas.addEventListener("MouseLeave",mouseLeave)
function mouseLeave(){
    mouseEvent="mouseLeave";
}

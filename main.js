var mouseevent="empty";
var lastx,lasty;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
color="red";
width=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width-of-line").value;
    radius = document.getElementById("radius").value;
    mouseevent = "mouseDown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseevent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y, radius,0 ,2 * Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e) {
mouseevent="mouseUp";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e) {
    mouseevent="mouseLeave";
}
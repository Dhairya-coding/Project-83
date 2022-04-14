canvas = document.getElementById("MyCanvas");
ctx = canvas.getcontext("2d");

color = "coral";

width_of_line = 5;

var last_position_x, last_position_of_y;

canvas.addEventlistener("touchmove", my_touchmove);
function my_touchmove(e) {
    current_position_of_touch_x = e.touchs[0].cilentX - canvas.offsetLeft;
    current_position_of_touch_y = e.touchs[0].cilentY - canvas.offsetLeft;
    ctx.beginPath();
    ctx.strokeStyle - color;
    ctx.linewidth - width_of_line;
    ctx.moveto(last_position_of_touch_x, last_position_of_touch_y)
    ctx.lineto(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}

canvas.addEventlistener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle - color;
        ctx.linewidth - width_of_line;
        ctx.moveto(last_position_of_x, last_position_of_y);
        ctx.lineto(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
var body = document.querySelector("body");
var button = document.querySelector("button");
var colors = [
    "#4086f7", 
    "#20aba2", 
    "#29c462", 
    "#c6de2f", 
    "#e64919", 
    "#e817de",
    "#0a0102",
    "#2de036"
];

button.addEventListener('click', backgroundChange);

let queue = 0;

function backgroundChange(){
    if(queue == 8) queue = 0;
    console.log(queue)
    const selectedColor = colors[queue];
    queue++;
    body.style.backgroundColor = selectedColor;

}
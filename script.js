// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

/* void setup(){
  size(800,250);
  background(255);
}*/
<<<<<<< HEAD
var color = 222;
=======

>>>>>>> 371cc08e8995d6f9c26cf8d3354f9f812d08eb7c
function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(255);
}


function draw() {
  // statements here

   if (mouseIsPressed){

  fill(222);
<<<<<<< HEAD
  ellipse(mouseX, mouseY, 50, 50);
=======
>>>>>>> 371cc08e8995d6f9c26cf8d3354f9f812d08eb7c
}
else{
  fill(255);
}
rect(mouseX, mouseY, 50, 50);

}

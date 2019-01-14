console.log('reading js');

function setup(){
  // size is createCanvas in p5
  // create a variable to reference the canvas
  var myCanvas = createCanvas(800, 250);

  // connect myCanvas to my mySketch
  myCanvas.parent('mySketch');
}


function draw(){
  ellipse (mouseX, mouseY, 50, 50);
}

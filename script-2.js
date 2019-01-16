// Sam Shapiro
// DES 37 - inMotion

var x = 0;

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;

function setup () {
  var myCanvas = createCanvas (800, 250);
  myCanvas.parent('mySketch');
  noStroke();
}

function draw () {
  colorMode(RGB);
  background(0);
  fill(255);
  rect(x-20, 0, 10, 500);
  rect(x, 0, 10, 500);
  rect(x+20, 0, 10, 500);
  rect(x+40, 0, 10, 500);
  rect(x+60, 0, 10, 500);
  rect(x+80, 0, 10, 500);
  rect(x+100, 0, 10, 500);
  rect(x+120, 0, 10, 500);
  rect(x+140, 0, 10, 500);
  rect(x+160, 0, 10, 500);
  rect(x+180, 0, 10, 500);
  rect(x+200, 0, 10, 500);
  rect(x+220, 0, 10, 500);
  rect(x+240, 0, 10, 500);
  rect(x+260, 0, 10, 500);
  rect(x+280, 0, 10, 500);
  rect(x+300, 0, 10, 500);
  rect(x+320, 0, 10, 500);
  rect(x+340, 0, 10, 500);
  rect(x+360, 0, 10, 500);
  rect(x+380, 0, 10, 500);
  rect(x+400, 0, 10, 500);
  rect(x+420, 0, 10, 500);
  rect(x+440, 0, 10, 500);
  rect(x+460, 0, 10, 500);
  rect(x+480, 0, 10, 500);
  rect(x+500, 0, 10, 500);
  rect(x+520, 0, 10, 500);
  rect(x+540, 0, 10, 500);
  rect(x+560, 0, 10, 500);
  rect(x+580, 0, 10, 500);
  rect(x+600, 0, 10, 500);
  rect(x+620, 0, 10, 500);
  rect(x+640, 0, 10, 500);
  rect(x+660, 0, 10, 500);
  rect(x+680, 0, 10, 500);
  rect(x+700, 0, 10, 500);
  rect(x+720, 0, 10, 500);
  rect(x+740, 0, 10, 500);
  rect(x+760, 0, 10, 500);
  rect(x+780, 0, 10, 500);


  fill(185, 21, 203, 150);
  ellipse(a+250, 125, 250, 220);
  fill(21, 203, 55, 150);
  ellipse(b+250, 125, 200, 175);
  fill(21, 89, 203, 150);
  ellipse(c+250, 125, 150, 150);
  fill(203, 82, 21, 150);
  ellipse(d+250, 125, 100, 125);
  fill(219, 213, 31, 150);
  ellipse(e+250, 125, 50, 100);
  fill(255, 150);

  if (mouseIsPressed == true) {
    colorMode (HSB);
    fill (0+x*2, 100, 100, 150);
    f=f+1.5;
  } else {
    f=0;
  }
  ellipse(mouseX+f*3, mouseY, 100, 100);

  x=x+1;
  if (x>=20) {
    x=0;
  }

  a=a+1.5;
  if (a>=675) {
    a=-675;
  }

  b=b+2.5;
  if (b>=650) {
    b=-650;
  }

  c=c+3.25;
  if (c>=625) {
    c=-625;
  }

  d=d+3;
  if (d>=600) {
    d=-600;
  }

  e=e+2.25;
  if (e>=675) {
    e=-675;
  }
}

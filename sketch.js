function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  rectMode(CENTER)
}

let angle = 0
function draw() {
  background("black");
  fill(225)
  
 //  translate(width / 2, height / 2);
.//rotate(PI / 3.0);
//rect(-26, -26, 52, 52);
  translate(width/2,height/2)
  rotate(angle);
  fill(225)
  rect(100,100,100,200)
  rect(0,0,100,200)
  fill("black")
  circle(0,0,30)

  angle += 12
  
}

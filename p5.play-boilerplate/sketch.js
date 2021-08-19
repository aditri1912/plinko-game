function setup() {
  createCanvas(800,400);
  createSprite(400, 400,800 , 30);
  var divider1 = createSprite(400,300,30,300)
  var divider2 = createSprite(250,300,30,300)
  var divider3 = createSprite(550,300,30,300)
 //row 1 
  var plinko1 = createSprite(300,100,10,10);
  var plinko2 = createSprite(330,100,10,10)
  var plinko3 = createSprite(350,100,10,10)
  var plinko4 = createSprite(370,100,10,10)
  var plinko5 = createSprite(390,100,10,10)
  var plinko6 = createSprite(410,100,10,10)
  var plinko7 = createSprite(430,100,10,10)
  var plinko8 = createSprite(450,100,10,10)
  var plinko9 = createSprite(470,100,10,10)
  var plinko10 = createSprite(490,100,10,10)
//row2
var plinko11 = createSprite(300,150,10,10);
var plinko12 = createSprite(330,150,10,10)
var plinko13 = createSprite(350,150,10,10)
var plinko14 = createSprite(370,150,10,10)
var plinko15 = createSprite(390,150,10,10)
var plinko16 = createSprite(410,150,10,10)
var plinko17 = createSprite(430,150,10,10)
var plinko18 = createSprite(450,150,10,10)
var plinko19 = createSprite(470,150,10,10)
var plinko20 = createSprite(490,150,10,10)


}

function draw() {
  background("pink");  
  drawSprites();
}

ground.display();
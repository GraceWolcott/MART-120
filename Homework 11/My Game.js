// x and y for my character
var characterX = 50;
var characterY = 50;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 20;
var shapeY = 100;
var shapeXSpeed;
var shapeYSpeed;

var shapeA = 500;
var shapeB = 600;
var shapeASpeed;
var shapeBSpeed;

var shapeC = 200;
var shapeD = 400;
var shapeCSpeed;
var shapeDSpeed;

var shapeE = 50;
var shapeF = 100;
var shapeCSpeed;
var shapeDSpeed;

var shapeG = 700;
var shapeH = 200;
var shapeGSpeed;
var shapeHSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

var intro = text("Click to start", 300, 400);
var div = createDiv();

function setup()
{
    createCanvas(800, 800);
   
}

function draw()
{
    background(0,0,0);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);
  
    fill(255,255,0);
    square(765,765,35,);  
  
    // exit message
    fill(255,255,255)
    textSize(16);
    textFont('monospace');
    text("EXIT", 765, 755);

    //character
    fill(255,255,255);
    square(characterX,characterY,35);

    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    else if(keyIsDown(s))
    {
        characterY += 10;   
    }
    else if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    else if(keyIsDown(d))
    {
        characterX += 10;   
    }

    // potential enemy
    fill(255,0,0);
    // draw the shape
    square(shapeX, shapeY, 20);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
  
      // enemy two
    fill(0,255,0);
    // draw the shape
    square(shapeA, shapeB, 20);

     // get a random speed when the it first starts
     shapeASpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 2);
     shapeBSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 2);

    // move the shape
    shapeA += shapeASpeed;
    shapeB += shapeBSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeA > width)
    {
        shapeA = 0;
    }
    if(shapeA < 0)
    {
        shapeA = width;
    }
    if(shapeB > height)
    {
        shapeB = 0;
    }
    if(shapeB < 0)
    {
        shapeB = height;
    }

    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(255,255,255);
        stroke(5);
        textSize(26);
        textFont('monospace');
        text("You Win!", width/2-50, height/2-50);
    }
  
   // enemy three
    fill(0,0,255);
    // draw the shape
    square(shapeC, shapeD, 20);

     // get a random speed when the it first starts
     shapeCSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 1);
     shapeDSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

    // move the shape
    shapeC += shapeCSpeed;
    shapeD += shapeDSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeC > width)
    {
        shapeC = 0;
    }
    if(shapeC < 0)
    {
        shapeC = width;
    }
    if(shapeD > height)
    {
        shapeD = 0;
    }
    if(shapeD < 0)
    {
        shapeD = height;
    }
  
  
   // enemy four
    fill(0,255,255);
    // draw the shape
    square(shapeE, shapeF, 20);

     // get a random speed when the it first starts
     shapeESpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 1);
     shapeFSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 1);

    // move the shape
    shapeE += shapeESpeed;
    shapeF += shapeFSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeE > width)
    {
        shapeE = 0;
    }
    if(shapeE < 0)
    {
        shapeE = width;
    }
    if(shapeF > height)
    {
        shapeF = 0;
    }
    if(shapeF < 0)
    {
        shapeF = height;
    }
  
   // enemy five
    fill(255,0,255);
    // draw the shape
    square(shapeG, shapeH, 20);

     // get a random speed when the it first starts
     shapeGSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 2);
     shapeHSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 2);

    // move the shape
    shapeG += shapeXSpeed;
    shapeH += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeG > width)
    {
        shapeG = 0;
    }
    else(shapeG < 0)
    {
        shapeG = width;
    }
    if(shapeH > height)
    {
        shapeH = 0;
    }
    if(shapeH < 0)
    {
        shapeH = height;
    }

    // check to see if the character has left the exit
    if(characterX > width && characterY > width-0)
    {
        fill(255,255,255);
        stroke(5);
        textSize(26);
        textFont('monospace');
        text("You Win!", width/2-50, height/2-50);
    }
  
  
  if(characterX == 50 && characterY == 50)
    {
        fill(255,255,255);
        textSize(26);
        textFont('monospace');
        text("Click to start", 300, 400);
    }
  

    // create the shape based on the mouse click
    fill(120,130,140);
    square(mouseShapeX, mouseShapeY, 100);
}

    function mouseClicked()
    {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }
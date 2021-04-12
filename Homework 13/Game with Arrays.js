var characterX = 50;
var characterY = 50;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var mouseShapeX;
var mouseShapeY;

var myXs = []; 
var myYs = []; 
var mySize = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var colorR = [];
var colorG = [];
var colorB = [];

function setup()
{
    createCanvas(800, 800);
  
    for (var i = 0; i < 30; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        myXs[i] = getRandomNumber(800);
        myYs[i] = getRandomNumber(800);
        mySize[i] = getRandomNumber(35);
    }
  
    for (var c = 0; c < 255; c++) {
        colorR[c] = getRandomNumber(255);
        colorG[c] = getRandomNumber(255);
        colorB[c] = getRandomNumber(255);
    }
}

function draw()
{
    //background elements
    background(0,0,0);
    stroke(0);
    fill(0); 

    fill(255,255,255)
    textSize(16);
    textFont('monospace');
    text("EXIT", 765, 755);
    
    makeBorders();
  
    //background element
    fill(255,255,0);
    square(765,765,35,); 
  
    drawCharacter();
    zoomingAround();
    enemies();
    didYouWin();
    clickToStart();
    createShape();
}

function makeBorders()
{
    noFill();
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0, height-10,width, 10);
    rect(width-10,0,10,height-50);
}

function drawCharacter()
{
    fill(255,255,255);
    square(characterX,characterY,35);
}

function zoomingAround()
{
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
}

function enemies()
{
    fill(colorR, colorG, colorB);
    for (var i = 0; i < myXs.length; i++) {
        square(myXs[i], myYs[i], mySize[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        myXs[i] += shapeXSpeeds[i];
        myYs[i] += shapeYSpeeds[i];
  
    if(myXs[i] > width)
    {
        myXs[i] = 0;
    }
    if(myXs[i] < 0)
    {
        myXs[i] = width;
    }
    if(myYs[i] > height)
    {
        myYs[i] = 0;
    }
    if(myYs[i] < 0)
    {
        myYs[i] = height;
    }
      
    }
}
 
function didYouWin()
{    
    if(characterX > width && characterY > width-0)
    {
        fill(255,255,255);
        stroke(5);
        textSize(26);
        textFont('monospace');
        text("You Win!", 335, 400);
    }
}

function clickToStart()
{
  if(characterX == 50 && characterY == 50)
    {
        fill(255,255,255);
        textSize(26);
        textFont('monospace');
        text("Click to start", 300, 400);
    }
} 

function createShape()
{
    fill(120,130,140);
    square(mouseShapeX, mouseShapeY, 100);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) 
{
    return Math.floor(Math.random() * number) + 10;
}
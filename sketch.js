// Final Project
// April Lu
// October 14th, 2020

// fix the check grid, bounce title?

const GRIDSIZE = 3;
let lineY, lineX;
let state = "titleScreen";
let cellSize;
let cellSize2;
let grid = [[1,2,3],
  [4,5,6],
  [7,8,9]];
let newGrid = [];
let scenery, scenery1, scenery2, scenery3, scenery4, scenery5, scenery6, scenery7, scenery8, scenery9;

const GRIDSIZE2 = 4;
let lineY2, lineX2;
let grid2 = [[1,2,3,4],
  [5, 6, 7, 8],
  [9, 10,  11, 12],
  [13, 14, 15, 16]];

let newGrid2 = [];
let river, river1, river2, river3, river4, river5, river6, river7, river8, river9, river10, river11, river12, river13, river14, river15, river16;

let shouldMove = false;
let moveCounter;

function preload(){
  scenery = loadImage("assets/scenery.jpg");
  scenery1 = loadImage("assets/scenery1.jpg");
  scenery2 = loadImage("assets/scenery2.jpg");
  scenery3 = loadImage("assets/scenery3.jpg");
  scenery4 = loadImage("assets/scenery4.jpg");
  scenery5 = loadImage("assets/scenery5.jpg");
  scenery6 = loadImage("assets/scenery6.jpg");
  scenery7 = loadImage("assets/scenery7.jpg");
  scenery8 = loadImage("assets/scenery8.jpg");
  scenery9 = loadImage("assets/scenery9.jpg");

  river = loadImage("assets/river.jpg");
  river1 = loadImage("assets/river1.jpg");
  river2 = loadImage("assets/river2.jpg");
  river3 = loadImage("assets/river3.jpg");
  river4 = loadImage("assets/river4.jpg");
  river5 = loadImage("assets/river5.jpg");
  river6 = loadImage("assets/river6.jpg");
  river7 = loadImage("assets/river7.jpg");
  river8 = loadImage("assets/river8.jpg");
  river9 = loadImage("assets/river9.jpg");
  river10 = loadImage("assets/river10.jpg");
  river11 = loadImage("assets/river11.jpg");
  river12 = loadImage("assets/river12.jpg");
  river13 = loadImage("assets/river13.jpg");
  river14 = loadImage("assets/river14.jpg");
  river15 = loadImage("assets/river15.jpg");
  river16 = loadImage("assets/river16.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  if(width < height){
    cellSize = width/GRIDSIZE - 50;
  }
  else{
    cellSize = height/GRIDSIZE - 50;
  }

  if(width < height){
    cellSize2 = width/GRIDSIZE2 - 50;
  }
  else{
    cellSize2 = height/GRIDSIZE2 - 50;
  }
  lineY = windowHeight / 2 - cellSize * 1.5;
  lineX = windowWidth / 2 - cellSize * 1.5;

  lineY2 = windowHeight / 2 - cellSize2 * 2;
  lineX2 = windowWidth /  2 -cellSize2 * 2;
} 

function draw() {
  titlePage();
  // grid2 = shuffleImage2();
  // displayGrid2();
  switchScreens();
}

function switchScreens(){ 
  if (state === "titleScreen"){
    titlePage();
    if (key === "e"){
      state = "game";
      grid = shuffleImage();
      moveCounter = 0;
    }
    if (key === "h"){
      state = "game2";
      grid = shuffleImage2();
      moveCounter = 0;
    }
  }
  else if (state === "game" ){
    background(160, 210, 243);
    fill(0);
    text("moves:", windowWidth/2 - 50, windowHeight - 30);
    text(moveCounter, windowWidth/2 + 50, windowHeight - 30);
    displayGrid();

    if (key === "i"){
      state = "image";
    }
  }

  else if (state === "game2"){
    background(160, 210, 243);
    fill(0);
    text("moves:", windowWidth/2 - 50, windowHeight - 30);
    text(moveCounter, windowWidth/2 + 50, windowHeight - 30);
    displayGrid2();

    if (key === "i"){
      state = "image2";
    }
    
  }
  else if (state === "image"){
    background(160, 210, 243);
    imageMode(CENTER,CENTER);
    image(scenery, windowWidth/2, windowHeight/2, cellSize *2.5, cellSize * 2.5);

    if (key === "e"){
      state === "game";
    }
  }

  else if (state === "image2"){
    background(160, 210, 243);
    imageMode(CENTER,CENTER);
    image(river, windowWidth/2, windowHeight/2, cellSize *2.5, cellSize * 2.5);

    if (key === "h"){
      state === "game2";
    }
  }
}

function titlePage(){
  background(160, 210, 243);
  textFont("fantasy");
  textSize(70);
  fill(255);
  textAlign (CENTER, CENTER);
  text("PICTURE SLIDING PUZZLE", windowWidth / 2, windowHeight / 4);
  
  textSize(40);
  textFont("cursive");
  text("Press the 'e' key for Easy Mode", windowWidth / 2, windowHeight / 2);
  text("Press the 'h' key for Hard Mode", windowWidth / 2, windowHeight / 1.7);
  // text("Hint: Press the 'i' key to see the final image and moves counter", windowWidth / 2, windowHeight / 1.5);
}

function endPage(){
  text("You finally did it!", windowWidth / 2, windowHeight / 2);
  text("You did it!", windowWidth / 2, windowHeight / 2);
}

function displayGrid(){
  // assigning each image to a grid
  for (let y = 0; y < GRIDSIZE; y++){
    for (let x = 0; x < GRIDSIZE; x++){
      newGrid[y][x] = int(newGrid[y][x]);
    
      if (newGrid[y][x] === 1){
        image(scenery1, x*cellSize + lineX, y*cellSize + lineY, cellSize, cellSize);
      }
      if (newGrid[y][x] === 2){
        image(scenery2, x*cellSize + lineX, y*cellSize + lineY, cellSize, cellSize);
      }
      if (newGrid[y][x] === 3){
        image(scenery3, x*cellSize + lineX, y*cellSize + lineY, cellSize, cellSize);
      }
      if (newGrid[y][x] === 4){
        image(scenery4, x*cellSize + lineX, y*cellSize + lineY, cellSize, cellSize);
      }
      if (newGrid[y][x] === 5){
        image(scenery5, x*cellSize + lineX, y*cellSize + lineY, cellSize, cellSize);
      }
      if (newGrid[y][x] === 6){
        image(scenery6, x*cellSize + lineX, y*cellSize + lineY, cellSize, cellSize);
      }
      if (newGrid[y][x] === 7){
        image(scenery7, x*cellSize + lineX, y*cellSize + lineY, cellSize, cellSize);
      }
      if (newGrid[y][x] === 8){
        image(scenery8, x*cellSize + lineX, y*cellSize + lineY, cellSize, cellSize);
      }
      if (newGrid[y][x] === 9) {
        fill(255);
        rect(x*cellSize + lineX, y*cellSize + lineY, cellSize, cellSize);
      }
    }
  }
  strokeLines();
}

function strokeLines(){
  // drawing the stroke lines
  strokeWeight(3);
  stroke(255);
  
  line(lineX, cellSize + lineY, 3*cellSize + lineX, cellSize + lineY);
  line(lineX, 2*cellSize + lineY, 3*cellSize + lineX, 2*cellSize + lineY);
  line(cellSize + lineX, lineY, cellSize + lineX, 3*cellSize + lineY);
  line(2*cellSize + lineX, lineY, 2*cellSize + lineX, 3*cellSize + lineY);

  strokeWeight(6);
  line(lineX, lineY, 3*cellSize + lineX, lineY);
  line(lineX, lineY, lineX, 3*cellSize + lineY);
  line(3*cellSize + lineX, lineY, 3*cellSize + lineX, 3*cellSize + lineY);
  line(lineX, 3*cellSize + lineY, 3*cellSize + lineX, 3*cellSize + lineY);
}

function mousePressed(){
  if (state === "game"){
    let x = floor(mouseX/cellSize -  lineX/cellSize);
    let y = floor(mouseY/cellSize - lineY/cellSize);
    checkGrid(y, x);
  }

  else if (state === "game2"){
    let x = floor(mouseX/cellSize2 -  lineX2/cellSize2);
    let y = floor(mouseY/cellSize2 - lineY2/cellSize2);
    checkGrid2(y, x);
    console.log(y,x);
  }

  if (mouseX > lineX && mouseX < lineX + cellSize * 3 && mouseY > lineY  && mouseY < lineY + cellSize * 3){
    moveCounter += 1;
  }
}

function checkGrid(y, x){
  if (y+1 < GRIDSIZE && x < GRIDSIZE && newGrid[y + 1][x] === 9){
    // to check if it should move down
    
    newGrid[y + 1][x] = newGrid[y][x];
    newGrid[y][x] = 9;
    displayGrid();
  }
  if (x+1 < GRIDSIZE && y < GRIDSIZE && newGrid [y][x + 1] === 9){
    // to check if it should move right
    
    newGrid [y][x + 1] = newGrid[y][x];
    newGrid[y][x] = 9;
    displayGrid();
  }
  if (x-1 >= 0 && y >= 0 && newGrid [y][x - 1] === 9){
    // to check if it should move left
    
    newGrid[y][x - 1] = newGrid[y][x];
    newGrid[y][x] = 9;
    displayGrid();
  }
  if (y-1 >= 0 && x >= 0 && newGrid [y - 1][x] === 9){
    // to check if it should move up
    
    newGrid[y - 1][x] = newGrid[y][x];
    newGrid[y][x] = 9;
    displayGrid();
  } 
  if (newGrid === grid){
    image(scenery9, windowWidth/2 - cellSize*1.5 + cellSize*2, cellSize*2, cellSize, cellSize);
  }
}

function shuffleImage(){
  // to randomize the grid (easy mode)
  for (let x = 0; x < GRIDSIZE; x++){
    newGrid [x] = shuffle(grid[x]);
  }
  displayGrid();
}

function displayGrid2(){
  // assigning each image to a grid
  for (let y = 0; y < GRIDSIZE2; y++){
    for (let x = 0; x < GRIDSIZE2; x++){
      newGrid2[y][x] = int(newGrid2[y][x]);
    
      if (newGrid2[y][x] === 1){
        image(river1, x*cellSize2 + lineX2, y*cellSize2 + lineY2, cellSize2, cellSize2);
      }
      if (newGrid2[y][x] === 2){
        image(river2, x*cellSize2 + lineX2, y*cellSize2 + lineY2, cellSize2, cellSize2);
      }
      if (newGrid2[y][x] === 3){
        image(river3, x*cellSize2 + lineX2, y*cellSize2 + lineY2, cellSize2, cellSize2);
      }
      if (newGrid2[y][x] === 4){
        image(river4, x*cellSize2 + lineX2, y*cellSize2 + lineY2, cellSize2, cellSize2);
      }
      if (newGrid2[y][x] === 5){
        image(river5, x*cellSize2 + lineX2, y*cellSize2  + lineY2, cellSize2, cellSize2);
      }
      if (newGrid2[y][x] === 6){
        image(river6, x*cellSize2 + lineX2, y*cellSize2 + lineY2, cellSize2, cellSize2);
      }
      if (newGrid2[y][x] === 7){
        image(river7, x*cellSize2 + lineX2, y*cellSize2 + lineY2, cellSize2, cellSize2);
      }
      if (newGrid2[y][x] === 8){
        image(river8, x*cellSize2 + lineX2, y*cellSize2 + lineY2, cellSize2, cellSize2);
      }
      if (newGrid2[y][x] === 9){
        image(river9, x*cellSize2 + lineX2, y*cellSize2 + lineY2, cellSize2, cellSize2);
      }
      if (newGrid2[y][x] === 10){
        image(river10, x*cellSize2 + lineX2, y*cellSize2 + lineY2, cellSize2, cellSize2);
      }
      if (newGrid2[y][x] === 11){
        image(river11, x*cellSize2 + lineX2, y*cellSize2 + lineY2, cellSize2, cellSize2);
      }
      if (newGrid2[y][x] === 12){
        image(river12, x*cellSize2 + lineX2, y*cellSize2 + lineY2, cellSize2, cellSize2);
      }
      if (newGrid2[y][x] === 13){
        image(river13, x*cellSize2 + lineX2, y*cellSize2 + lineY2, cellSize2, cellSize2);
      }
      if (newGrid2[y][x] === 14){
        image(river14, x*cellSize2 + lineX2, y*cellSize2 + lineY2, cellSize2, cellSize2);
      }
      if (newGrid2[y][x] === 15){
        image(river15, x*cellSize2 + lineX2, y*cellSize2 + lineY2, cellSize2, cellSize2);
      }

      if (newGrid2[y][x] === 16) {
        fill(255);
        rect(x*cellSize2 + lineX2, y*cellSize2 + lineY2, cellSize2, cellSize2);
      }
    }
  }
  strokeLines2();
}

function strokeLines2(){
  // drawing the stroke lines
  strokeWeight(3);
  stroke(255);
  
  line(lineX2, cellSize2 + lineY2, 4*cellSize2 + lineX2, cellSize2 + lineY2);
  line(lineX2, 2*cellSize2 + lineY2, 4*cellSize2 + lineX2, 2*cellSize2 + lineY2);
  line(lineX2, 3*cellSize2 + lineY2, 4*cellSize2 + lineX2, 3*cellSize2 + lineY2);
  line(cellSize2 + lineX2, lineY2, cellSize2 + lineX2, 4*cellSize2 + lineY2);
  line(2*cellSize2 + lineX2, lineY2, 2*cellSize2 + lineX2, 4*cellSize2 + lineY2);
  line(3*cellSize2 + lineX2, lineY2, 3*cellSize2 +lineX2, 4*cellSize2 + lineY2);

  strokeWeight(6);
  line(lineX2, lineY2, lineX2, 4*cellSize2 + lineY2);
  line(4*cellSize2 + lineX2, lineY2, 4*cellSize2 + lineX2, 4*cellSize2 + lineY2);
  line(lineX2, lineY2, 4*cellSize2 +lineX2, lineY2);
  line(lineX2, 4*cellSize2 + lineY2, 4*cellSize2 +lineX2, 4*cellSize2 + lineY2);
}

function checkGrid2(y, x){
  if (y+1 < GRIDSIZE2 && x < GRIDSIZE2 && newGrid2[y + 1][x] === 16){
    // to check if it should move down
    
    newGrid2[y + 1][x] = newGrid2[y][x];
    newGrid2[y][x] = 16;
    displayGrid2();
  }
  if (x+1 < GRIDSIZE2 && y < GRIDSIZE2 && newGrid2 [y][x + 1] === 16){
    // to check if it should move right
    
    newGrid2 [y][x + 1] = newGrid2[y][x];
    newGrid2[y][x] = 16;
    displayGrid2();
  }
  if (x-1 >= 0 && y >= 0 && newGrid2 [y][x - 1] === 16){
    // to check if it should move left
    
    newGrid2[y][x - 1] = newGrid2[y][x];
    newGrid2[y][x] = 16;
    displayGrid2();
  }
  if (y-1 >= 0 && x >= 0 && newGrid2 [y - 1][x] === 16){
    // to check if it should move up
    
    newGrid2[y - 1][x] = newGrid2[y][x];
    newGrid2[y][x] = 16;
    displayGrid2();
  } 
  if (newGrid2 === grid2){
    image(scenery9, windowWidth/2 - cellSize*1.5 + cellSize*2, cellSize*2, cellSize, cellSize);
  }
}

function shuffleImage2(){
  // to randomize the grid (easy mode)
  for (let x = 0; x < GRIDSIZE2; x++){
    newGrid2[x] = shuffle(grid2[x]);
  }
  displayGrid2();
}
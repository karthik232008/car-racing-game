var db;
var gs = 0;
var pc;
var form,player,game;
var allplayers;
var car1,car2,car3,car4;
var cars;
var car1image,car2image,car3image,car4image;
var track;

function preload(){
    car1image = loadImage("images/car1.png");
    car2image = loadImage("images/car2.png");
    car3image = loadImage("images/car3.png");
    car4image = loadImage("images/car4.png");
    track = loadImage("images/track.jpg");
}

function setup(){
    createCanvas(displayWidth-20, displayHeight-30);

    db = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  
}

function draw(){
      if(pc === 4){
         game.update(1);

      }
      if(gs === 1){
          clear()
          game.play();
      }
      if(gs === 2){
          game.end();
      }
}





/*.
Object Oriented Programming
Components of the code === object of real - world

Real-world objects:
    1. Properties
    2. Functions


    3 Objects:
        1. Form: 
            Name - to the db
            Play button
            New player object
        2. Player
            Player count
            Players' info - name, distance, rank
        3. Game
            Game States
                - Wait (0)
                - Play (1)
                - End (2)

*/

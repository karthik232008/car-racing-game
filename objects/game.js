class Game{
    constructor(){}

    //Read the gamestate from the db
    getState(){
        var gsRef = db.ref("gamestate");
        gsRef.on("value", function(data){
            gs = data.val();
        });
    }

    //Update gamestate into the db
    update(state){
        db.ref("/").update({
            gamestate: state
        });
    }

    //WAIT - 0
    async start(){
        if(gs === 0){
            player = new Player()
            var pcref = await db.ref("playercount").once('value');
            if(pcref.exists()){
               pc=pcref.val();
               player.getCount();

            }
            
            form = new Form();
            form.display();

        }

        car1  = createSprite(100,200);
        car1.addImage(car1image);
        car2  = createSprite(300,200);
        car2.addImage(car2image);
        car3  = createSprite(500,200);
        car3.addImage(car3image);
        car4  = createSprite(700,200);
        car4.addImage(car4image);
        cars = [car1,car2,car3,car4]
        
        
    }

    //PLAY - 1
    play(){
        
        form.hide();
        textSize(30);
        text("game start",120,100);
        Player.getPlayerInfo();
        player.getCarsatend();
        if(allplayers !== undefined){ //allplayers are not undefined (allPlayers are defined)
            background(100,100,255);
            image(track,0,-4*displayHeight,displayWidth,5*displayHeight)
            var carindex = 0
            var x = 0;
            var y;
           for(var i in allplayers){// var index = 0; index < 4; index = index + 1

                carindex = carindex + 1;
                x= x + 200;
                cars[carindex-1].x = x;
               

                y = displayHeight - allplayers[i].distance
                cars[carindex-1].y = y;
              
                //Identifying the currently active player
                if(carindex === player.index){
                    fill("red");
                    ellipse(x, y,60,60);
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[carindex-1].y;
                }
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 20;
            player.update();
        }

        if(player.distance > 4160){
            
            
            gs = 2;
            player.rank++;
            Player.updateCarsatend(player.rank);
        }
        drawSprites();
    }

    //END - 2
    end(){
        console.log("game ended");
        console.log(player.rank)
    }
}

/*
Local Function - available locally inside {}
    function(){}

    "/" - refers to the entire database
*/

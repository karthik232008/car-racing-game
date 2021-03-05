class Form{
    constructor(){
        this.input = createInput("name")
        this.playbutton = createButton("play")
        this.greeting = createElement("h3")
        this.title = createElement("h2");
        this.reset = createButton("reset");

    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2 - 50, 0);
        
        this.input.position(displayWidth/2 - 50,displayHeight/2 - 80);
        this.playbutton.position(displayWidth/2 + 30,displayHeight/2);
        this.reset.position(displayWidth-100,50)
        this.playbutton.mousePressed(
              () => {
                this.input.hide();
                this.playbutton.hide();
                player.name = this.input.value();
                pc = pc + 1
                player.index = pc;
                player.update();
                player.updateCount(pc);
                this.greeting.html("Hello " + player.name);
                this.greeting.position(displayWidth/2 - 70,displayHeight/4);
            }
        )

        this.reset.mousePressed(
           () => {
               game.update(0);
               player.updateCount(0);
               Player.updateCarsatend(0);
               db.ref("/").child("players").remove();
           } 
        )
        
    }
    hide(){
        this.input.hide();
        this.playbutton.hide();
        this.greeting.hide();
         this.title.hide();
    }
}

/*
Arrow function --> Binds the function with the original/root object that called it

        ()=>{}
*/
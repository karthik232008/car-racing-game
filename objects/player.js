class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
        this.rank = null;
    }

    //Read the playercount from the db
    getCount(){
        var pcRef = db.ref("playercount")
        pcRef.on("value",(data) => {
        pc = data.val();
        });

    }
    
    //Update playercount in the db
    updateCount(count){
        db.ref("/").update({
            playercount:count
        })
    }

    //Update player's info in the db
    update(){
        db.ref("players/player" + this.index).set({
            name:this.name,
             distance:this.distance,
        })

    }

    
    static getPlayerInfo(){
       db.ref("players").on("value",(data) => {
           allplayers = data.val();
            
           
       });

    }

    getCarsatend(){
     db.ref("carsatend").on("value",(data)=> {
          this.rank = data.val();

     })
    }

    static updateCarsatend(rank){
        db.ref("/").update({
            carsatend : rank
        })
    }
}
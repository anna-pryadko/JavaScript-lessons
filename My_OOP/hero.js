function Hero(type,power, weapon){   //type,power, weapon
    this.type=type;
    this.life=100;
    this.power=power;
    this.weapons=weapon;
    this.alive=true;

    this.hit=function(){
        return this.power;
    }

 /* hit other plyer */

    this.attack=function() {
         return this.power;
    }

 /*got hurt from other player */

    this.gotHit = function(power){
         this.life-=power;
         if (this.life<=0) {
            this.alive=false;
        }
    }

    this.checkIfAlive = function() {
         return this.alive;
    }

    this.getLife=function() {
        return this.life;
    }

    this.print = function(){
        console.log(this.type+","+this.life+","+this.weapons+", Alive"+this.checkIfAlive());
    } 
}

var player1=new Hero("Warrior",50,"Sowrd");
var player2=new Hero("Healer",30,"Staff");

player1.gotHit(player2.attack());

player1.print();
player2.print();

let gameInit=document.querySelector(".gameInit");
let gameWon=document.querySelector(".gameWon");
let gameOver=document.querySelector(".gameOver");
let wonButton=document.querySelector(".wonButton");

function start(){
    gameInit.classList.add("hide");    
}

function over(){     
     gameOver.classList.add("show");
 }

 function won(){    
    gameWon.classList.add("show");
}

function playAgain(){
    window.location.reload();
    gameOver.classList.remove("show");
 }

 function onceMore(){
    window.location.reload();
    gameWon.classList.remove("show");
 }





// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    this.x=x;
    this.y=y;
    this.speed=speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x+=this.speed*dt;
    
    if(this.x>505){
        this.x=-100;
        //for random position
        this.speed=speedX*Math.floor(Math.random()*10+1);
    }
    this.collision();
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player=function(x,y){
    
    this.x = x;
    this.y = y;    
    this.sprite='images/char-cat-girl.png';
    this.score=0;
    this.lives=3
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.fillText("Lives: " + player.lives, 23, 95); //no.of lives remaining
    ctx.fillText("Score: " + player.score, 218, 95);  //player scoreboard  
    ctx.fillText("LevelUp: " + speedX, 375, 95); //difficulty level
    ctx.font="18px Arial";    
    
};
Player.prototype.update= function(){
    
    //check if lives=0
    if (this.lives === 0) {
    
    over(); //game over
    }
    if(this.score===50){
        won(); //game won
    }
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies=[];
var speedX=60;
for(var i=0;i<3;i++){
    var bugSpeed=speedX*Math.floor(Math.random()*10+1);
    var enemies= new Enemy(-100,50+(90*i),bugSpeed);
    allEnemies.push(enemies);
}
// Place the player object in a variable called player
var player = new Player(200,400);
Player.prototype.initialPos = function() {
    
    this.xCor = 200;
    this.yCor = 400;
    this.x = this.xCor;
    this.y = this.yCor;
};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
Player.prototype.handleInput=function(pressedKey){
    if(pressedKey=='left'){
        if(this.x>0){
            this.x-=101;
        }
    }
    else if(pressedKey=='right'){
        if(this.x<400){
            this.x+=101;
        }
    }
    else if(pressedKey=='up'){
        if(this.y<0){

        this.score=this.score+5;
        speedX=speedX+5; 
        this.initialPos()           
        }
        else{
            this.y-=85;
        }
    }
    else if(pressedKey=='down'){
        if(this.y<400){
            this.y+=85;
        }
    }
};
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
//collision detection
Enemy.prototype.collision=function(){
    if((player.x < this.x + 60) && (player.x + 50 > this.x) && (player.y < this.y + 70) && (player.y+40 > this.y)){
        player.lives--; 
        player.initialPos();   

    }
}


var Heart= function(x,y){
    this.x=x;
    this.y=y;
    this.sprite='images/Heart.png';

}

Heart.prototype.render=function(){
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
 };

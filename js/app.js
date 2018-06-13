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
    ctx.fillText("Lives: " + player.lives, 23, 95);
    ctx.fillText("Score: " + player.score, 218, 95);    
    ctx.fillText("LevelUp: " + speedX, 375, 95);
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



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

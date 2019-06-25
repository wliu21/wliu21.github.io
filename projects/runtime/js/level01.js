var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'laser',x:1900, y:298},
                {type: 'lava',x:1500, y:390},
                {type: 'laser',x:900, y:250},
                {type: 'saber',x:2500, y:300}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        
        //laser code
    
    function createLavaBlock(x,y) {
           //lava block code
        var hitZoneSize = 35;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle);
        var obstacleImage = draw.bitmap('img/lava.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
    }
        function createLaserBeam(x,y) {
    // your code goes here
         var hitZoneSize = 35;
         var damageFromObstacle = 10;
         var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
         myObstacle.x = x;
         myObstacle.y = y;
         game.addGameItem(myObstacle);
         var obstacleImage = draw.bitmap('img/laser.png');
         myObstacle.addChild(obstacleImage);
         obstacleImage.x = -25;
         obstacleImage.y = -25;
    
    
}  
   function createSaber(x,y) {
    // your code goes here
         var hitZoneSize = 20;
         var damageFromObstacle = 10;
         var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
         myObstacle.x = x;
         myObstacle.y = y;
         game.addGameItem(myObstacle);
         var obstacleImage = draw.bitmap('img/saber.png');
         myObstacle.addChild(obstacleImage);
         obstacleImage.x = -25;
         obstacleImage.y = -25;
    
    
}  
//this creates laser and lava based on if then statement.
 for (var i = 0; i < levelData.gameItems.length; i++) {
    var eachValue = levelData.gameItems[i];
    
    if (eachValue.type === "laser") {
        createLaserBeam(eachValue.x, eachValue.y);
    }
    else if (eachValue.type === "lava"){
        createLavaBlock(eachValue.x, eachValue.y);
    }
    else {
        createSaber(eachValue.x,eachValue.y);
    }
    // eachValue = createLavaBlock([0]);
    // if (gameItems < 10){
    //     createLavaBlock(0 ,0);
    // };
    
   // gameItems = levelData.gameItems[i];
    //gameItems = createLavaBlock(1500,390);
   // gameItems =  createLaserBeam(1900,298);
    
    // Create a sawblade using the .x and .y property of each game item object
}
 //enemy
var enemy =  game.createGameItem('enemy',25);
var redSquare = draw.rect(50,50,'red');
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = 400;
enemy.y = groundY-50;
game.addGameItem(enemy);
enemy.velocityX = -1;
//enemy.rotationVelocity(100);
//you die here
enemy.onPlayerCollision = function() {
    console.log('The enemy has hit Halle');
    game.changeIntegrity(-50);
    
};
enemy.onProjectileCollision = function() {
    console.log('halle hit enemy');
    game.increaseScore(100);
}

    }
    
    
    
    
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
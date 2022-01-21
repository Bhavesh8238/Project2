var sea,seaImg;
var ship,ship_running;

function preload() {
    

    seaImg = loadImage("sea.png")
    ship_running = loadAnimation("ship-1.png","ship-2.png")
}




function setup(){
    createCanvas(600,400);
    sea = createSprite(200,200,50,50)
    sea.addImage("sea",seaImg)
    sea.scale = 0.3


    ship = createSprite(300,200,50,50);
    ship.addAnimation("running",ship_running)
    ship.scale = 0.2
    ship.x = 100
}

function draw(){
    background("black")

    if(keyDown("UP_ARROW")){
        ship.y = ship.y - 2
    }

    if(keyDown("DOWN_ARROW")){
        ship.y = ship.y + 2
    }

    console.log(sea.x)
      
    if(ship.y<182){
    if(keyDown("UP_ARROW"))  
        ship.y = 185
        
    }


    if(ship.y<319){
    if(keyDown("DOWN_ARROW"))    
        ship.y = 312 
    }

    sea.velocityX = -2
    if(sea.x<0){
        sea.x = 200
    }

    drawSprites()
}

var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;

var dinero, dinero1;
var dineroGroup;

var moneda, monedaImg;

function preload(){
  
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")

  shooterImg = loadImage("assets/hombre.png")
  shooter_shooting = loadImage("assets/pistola.png")

  zombieImg = loadImage("assets/ladron.png")

  dinero = loadImage("assets/dinero.png")

  bgImg = loadImage("assets/casaembrujada.jpg")
  
  monedaImg = loadImage("assets/dinero.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //agregando la imagen de fondo 
  bg = createSprite(displayWidth/2-40,displayHeight/2-40,40,40)
bg.addImage(bgImg)
bg.scale = 2.1

  

//creando el sprite del jugador 
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


   //creando sprites para representar la vida sobrante
   heart1 = createSprite(displayWidth-150,40,20,20)
   heart1.visible = false
    heart1.addImage("heart1",heart1Img)
    heart1.scale = 0.4

    heart2 = createSprite(displayWidth-100,40,20,20)
    heart2.visible = false
    heart2.addImage("heart2",heart2Img)
    heart2.scale = 0.4

    heart3 = createSprite(displayWidth-150,40,20,20)
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.4
   

    //creando un grupo para los zombis
    zombieGroup = new Group();
    dineroGroup = new Group();
}

function draw() {
  background(0); 

  //moviendo al jugador arriba y abajo: volviéndolo compatible con juegos mobiles a traves de entrada táctil
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//liberar las balas y cambiar la imagen del tirador a posición de disparo cuando la barra espaciadora es presionada 
if(keyWentDown("space")){
  
  player.addImage(shooter_shooting)
  
 
}

//el jugador regresa a la imagen de la posición original una vez que dejamos de presionar la barra espaciadora
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}


//destruir al zombi cuando el jugador lo toca
if(zombieGroup.isTouching(player)){
 

  for(var i=0;i<zombieGroup.length;i++){     
       
   if(zombieGroup[i].isTouching(player)){
        zombieGroup[i].destroy()
        } 
  }
 }
 
//llamar a la función para generar zombis
enemy();
//spawnCoins();
drawSprites();
}



//creando la función para generar zombis
function enemy(){
  if(frameCount%50===0){

    //dando posiciones "x" e "y" aleatorias para la aparición de los zombis
    zombie = createSprite(random(500,1100),random(100,500),40,40)

    zombie.addImage(zombieImg)
    zombie.scale = 0.15
    zombie.velocityX = -3
    zombie.debug= true
    zombie.setCollider("rectangle",0,0,400,400)
   
    zombie.lifetime = 400
   zombieGroup.add(zombie)
  }

  /*function mony(){
    if(frameCount%60===0){
  
      //dando posiciones "x" e "y" aleatorias para la aparición de los zombis
      dinero1 = createSprite(random(500,1100),random(100,500),40,40)
  
      dinero1.addImage(dinero)
      dinero1.scale = 0.15
      dinero1.velocityX = -3
      dinero1.debug= true
      dinero1.setCollider("rectangle",0,0,400,400)
     
      dinero1.lifetime = 400
     dineroGroup.add(dinero1)
    }
}*/

  function spawnCoins(){
    moneda=createSprite(600,100,40.10);
    moneda.velocityX=-3;
    moneda.scale=0.1
  }
}

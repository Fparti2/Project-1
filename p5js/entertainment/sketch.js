var x = 0
var Mana = 200
var P_health = 200
var health = 200
var health1 = 400
var health2 = 600
var monster = 0
var colosseum;
var ogremon;
var goblin_cackle;
var goblin_death;
var beholder;
var dragon;
var victory;
var battle;
var lost;
var random_num;

function preload(){
 colosseum = loadImage("../../media/images/colosseum.png")
 ogremon = createImg("../../media/images/Ogremon_b.webp")
 betamon = createImg("../../media/images/64-modokibetamon.jpg")
skullgreymon = createImg("../../media/images/98-skullgreymon.jpg")
victory = loadSound("../../media/audio/52) Win The Tournament.mp3")
battle = loadSound("../../media/audio/62) Normal Battle.mp3")
lost = loadSound("../../media/audio/57) Pertoner Lost.mp3")
}


function setup() {
  let cnv = createCanvas(600, 600);
  cnv.mousePressed(canvasPressed)
  random_num =int(random(250, 2500))
}

function canvasPressed(){
   battle.play();
  battle.setVolume(0.5)
}
function draw() {
  background(220);

ogremon.size(0,0)
betamon.size(0,0)
skullgreymon.size(0,0)

if(keyIsDown(65)){
  P_health = P_health-5
}
  
  
if(keyIsDown(66) && Mana>0){
     Mana = Mana - 5
    if(P_health>0 && P_health<200){
     P_health = P_health + 50
    }
}  


image(colosseum,0,0,600,600)

push()
rect(390,480, 190, 50)
textSize(20)
fill("white")
text('Press A to attack!', 400, 500)
text('Press B to heal!', 400, 520)
pop()

push()    
  fill("red")
  rect(0,10, P_health , 20)
pop() 

push()    
  fill("red")
  stroke("red")
  arc(220, 15, 20, 15, PI, 0)
  arc(240, 15, 20, 15, PI, 0)
  triangle(210, 15, 230, 25, 250, 15)
pop() 

push()    
  fill("blue")
  ellipse(230,45, 25, 25)
pop()  

push()    
  fill("skyblue")
  ellipse(230,45, 15, 15)
pop() 

push()    
  fill("blue")
  rect(0,35, Mana, 20)
pop()   
  
push()    
  fill("white")
  stroke("white")
  arc(360, 570, 45, 15, PI, 0)
  arc(360, 570, 45, 15, 0, PI)
pop()

push()
  fill("black")
  ellipse(360, 570, 15, 15)
pop

push()
fill('white')
stroke("white")
textSize(20)
text(random_num, 390, 575)
pop()


  
if(monster === 0){ 
  betamon.position(208, 240)
  betamon.size(200,200)


  if(keyIsDown(65)){
  health = health - 5
  random_num = random_num + int(random(0,200))
}
  if(health > 0){
    push()    
      fill("red")
      rect(200 ,200, health, 20)
    pop() 
    
    
    }
  if(health == 0 && P_health !=0){
    monster = monster+1
    random_num = random_num + int(random(1000,20000))
  } 

} 
  

if(monster == 1){ 
  if(keyIsDown(65)){
  health1 = health1 - 5
}
  if(health1 > 0){
    push()    
      fill("red")
      rect(100 ,200, health1, 20)
    pop() 

    betamon.size(0,0)
    ogremon.position(180,250)
    ogremon.size(250,250)

    random_num = random_num + int(random(1000,20000))
    
    }
    if(health1 == 0 && P_health != 0){
      monster = monster+1
      random_num = random_num + int(random(20000,50000))
}
}

if(monster == 2){ 
  if(keyIsDown(65)){
  health2 = health2 - 5
}
  if(health2 > 0){
    push()    
      fill("red")
      rect(2,200, health2, 20)
    pop() 
    ogremon.size(0,0)
    skullgreymon.position(180,228)
    skullgreymon.size(260,260)

    random_num = random_num + int(random(10000,20000))
    
    }
    if(health2 == 0 && P_health != 0){
      noLoop()
      battle.stop()

      victory.play()
      victory.setVolume(0.5)

      
      push()
        fill("black")
        rect(0, 0, windowWidth, windowHeight)
      pop()
    
      push()
      textSize(20)
        fill("red")
        textSize(45)
        text('Congratulations!', 150, 270)
        text('You win!', 220, 310)
      pop()
    }
     if (P_health == 0){
      noLoop()
      health2 = Infinity
      random_num = 0
     } 
    }


    if(P_health == 0){
      noLoop()
      battle.stop()
      lost.play()
      lost.setVolume(0.5)
      
    }

}

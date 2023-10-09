var y2k1, y2k2;
var x = 0;
var y =0;
var z = 0;
let spread = 0;
let up_checker =0; 
let down_checker =0;
let r_checker =0;
let l_checker =0;
let b_checker=0;
let a_checker =0;
let ent_checker =0;
var key;
var bsd;
var laugh;
var bomb;
let redigitize; 
let darkweb;

function preload(){
  y2k1 = loadImage("../../media/images/Diaboromon_b.png")
  y2k2 = loadImage("../../media/images/Diaboromon_b.png")
  bsd = loadImage("../../media/images/bsd.jpg")
  darkweb = loadImage("../../media/images/800px-DUAM_intro_dark_web.jpg")
  laugh = loadSound("../../media/audio/Laugh Sinister 5 - QuickSounds.com.mp3")
  bomb = loadSound("../../media/audio/distant-explosion-80398.mp3")
}
function setup() {
  createCanvas(400, 400);
  redigitize = createA('../../../html/escape.html', 'Return to Reality')
  redigitize.hide()
}

function draw() {
  background(225);
darkweb.resize(800,800)
tint(555, 200)
  image(darkweb,0,0)

  tint(720,400)
  image(y2k1, 200, 300)


  if (spread == 50){
    noLoop()
    bsd.resize(400,400)
    image(bsd, 200,200)
    bomb.play()
    bomb.setVolume(1)
    laugh.play()
    laugh.setVolume(0.5)

      }
      if ((up_checker==2) && (down_checker==2) && (l_checker==2) && (r_checker==2) && (a_checker==1) && (b_checker==1) && (ent_checker==1)){
        noLoop()
        fill("black")
        rect(0, 0, 500, 500)
        redigitize.show()
                        
                      }
  imageMode(CENTER)
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40))

if(keyIsPressed){
spread += 1
  for (let i=0; i < 200; i++){
    
    image(y2k2, x+i, y+1)
    y2k2.resize(55,55)
    x = int(random(-400, 400))
    y= int(random(-400, 400))
    z= z + 0.2
   }
   }



}

function keyReleased(){
if (keyCode === UP_ARROW){
  up_checker += 1
}
if(keyCode === DOWN_ARROW){
  down_checker += 1
}
if(keyCode === LEFT_ARROW){
  l_checker += 1
}
if (keyCode === RIGHT_ARROW){
r_checker+=1}
if (key === "a"){
  a_checker += 1
}
if (key === "b"){
  b_checker +=1
}
if (keyCode === ENTER){
  ent_checker += 1
}
}

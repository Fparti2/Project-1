let phrases;
let phrase1;
let phrase2;
let phrase3;
let phrase4;
let phrase5;
let phrase6;
let phrase7;

let icons =[];
let gob1;
let gob2;
let gob3;
let ogre1;
let ogre2;
let poop1;
let poop2;
let bot1;
let bot2;
let bot3;
let bot4;

let icon1, icon2, icon3, icon4, icon5, icon6, icon7;
var random_color1, random_color2, random_color3, random_color4,random_color5, random_color6;
var checkmark;

function preload(){

gob1 = loadImage("../../media/images/35-goburimon-icon.png")
gob2 = loadImage("../../media/images/94-sharmamon-icon.png")
gob3 = loadImage("../../media/images/100-snowgoburimon-icon.png")
ogre1 = loadImage("../../media/images/42-hyogamon-icon.png")
ogre2 = loadImage("../../media/images/76-ogremon-icon.png")
poop1 = loadImage("../../media/images/85-platinumsukamon-icon.png")
poop2 = loadImage("../../media/images/102-sukamon-icon.png")
bot1 = loadImage("../../media/images/4-andromon-icon.png")
bot2 = loadImage("../../media/images/41-hagurumon-icon.png")
bot3 = loadImage("../../media/images/54-machinedramon-icon.png")
bot4 = loadImage("../../media/images/55-mamemon-icon.png")
checkmark = loadImage("../../media/images/checkmark.jpg")

icons = [gob1, gob2, gob3, ogre1, ogre2, poop1, poop2,
bot1, bot2, bot3, bot4];

icon1 = random(icons) 
icon2 = random(icons)
icon3 = random(icons)
icon4 = random(icons)
icon5 = random(icons)
icon6 = random(icons)
icon7 = random(icons)
}


function setup() {
  createCanvas(windowWidth, 350);
phrases = ['Fake News!', "I'm not a racist but Aguemon don't belong in here!", 'With all due respect F@&# YOU!', 'Go suck a Digitamamon!', 'Um..., actually you are wrong!','LOL look at this loser!','You guys ever wonder if we are wasting our lives on here?', 'kek', 'What are you even doing here!?', 'Your a wast of spce', 'kill yourself', 'ART151!', 'THE END IS NEAR!!!!', 'Vaccines kill innocent Viruses!', "I'm better than you!"];



setInterval (function(){

  
phrase1 = random(phrases)
phrase2 = random(phrases)
phrase3 = random(phrases)
phrase4 = random(phrases)
phrase5 = random(phrases)
phrase6 = random(phrases)
phrase7 = random(phrases)

icon1 = random(icons) 
icon2 = random(icons)
icon3 = random(icons)
icon4 = random(icons)
icon5 = random(icons)
icon6 = random(icons)
icon7 = random(icons)

random_color1 = random(250)
random_color2 = random(250)
random_color3 = random(250)
random_color4 = random(250)
random_color5 = random(250)
random_color6 = random(250)


}, 4000);


}

function draw() {
  background(220);



push()
strokeWeight(5.0);
fill(random_color1,random_color2,random_color3)
rect(0, 0, 110, 50)
rect(110, 0, 50, 50)
rect(305,0, windowWidth,50)
pop()

textSize(18)
text(phrase1, 320, 30)

push()
strokeWeight(5.0);
fill(random_color2,random_color3,random_color4)
rect(0, 50, 110, 50)
rect(110, 50, 50, 50)
rect(305,50, windowWidth,50)
pop()

text(phrase2, 320, 80)

push()
strokeWeight(5.0);
fill(random_color5,random_color6,random_color1)
rect(0, 100, 110, 50)
rect(110, 100, 50, 50)
rect(305,100, windowWidth,50)
pop()

text(phrase3, 320, 130)

push()
strokeWeight(5.0);
fill(random_color4,random_color5,random_color6)
rect(0, 150, 110, 50)
rect(110, 150, 50, 50)
rect(305,150, windowWidth,50)
pop()

text(phrase4, 320, 180)

push()
strokeWeight(5.0);
fill(random_color6,random_color1, random_color2)
rect(0, 200, 110, 50)
rect(110, 200, 50, 50)
rect(305,200, windowWidth,50)
pop()

text(phrase5, 320, 230)

push()
strokeWeight(5.0);
fill(random_color3,random_color6,random_color4)
rect(0, 250, 110, 50)
rect(110, 250, 50, 50)
rect(305,250, windowWidth,50)
pop()

text(phrase6, 320, 280)

push()
strokeWeight(5.0);
fill(random_color2,random_color1,random_color5)
rect(0, 300, 110, 50)
rect(110, 300, 50, 50)
rect(305,300, windowWidth,50)
pop()

text(phrase7, 320, 330)

image(icon1, 35, 5)
icon1.resize(40, 40)
image(icon2, 35, 55)
icon2.resize(40, 40)
image(icon3, 35, 105)
icon3.resize(40, 40)
image(icon4, 35, 155)
icon4.resize(40, 40)
image(icon5, 35, 205)
icon5.resize(40, 40)
image(icon6, 35, 255)
icon6.resize(40, 40)
image(icon7, 35, 305)
icon7.resize(40, 40)

image(checkmark, 120, 10)
checkmark.resize(30, 30)
image(checkmark, 120, 60)
checkmark.resize(30, 30)
image(checkmark, 120, 110)
checkmark.resize(30, 30)
image(checkmark, 120, 160)
checkmark.resize(30, 30)
image(checkmark, 120, 210)
checkmark.resize(30, 30)
image(checkmark, 120, 260)
checkmark.resize(30, 30)
image(checkmark, 120, 310)
checkmark.resize(30, 30)
}

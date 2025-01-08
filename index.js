//getting it set up to grab something

const button = document.getElementById("helloWorldButton");
const paragraph = document.getElementById("textAfterButton");

button.addEventListener("click", () => {
    paragraph.classList.toggle("hidden");
});

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 256;
const CANVAS_HEIGHT = canvas.height = 256;

const playerImage = new Image();
playerImage.src = 'Frame 1.png';
const spriteWidth = 256
const spriteHeight = 256
let framex = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 8;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(100,50,100,100);
    ctx.drawImage(playerImage, framex * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    if (gameFrame % staggerFrames == 0){
    if (framex < 8) framex++;
    else framex = 0;

    }
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const CANVAS2_WIDTH = canvas2.width = 256;
const CANVAS2_HEIGHT = canvas2.height = 256;

const playerImage2 = new Image();
playerImage2.src = 'Frame 1.png';
const spriteWidth2 = 256
const spriteHeight2 = 256
let framex2 = 0;
let frameY2 = 0;
let gameFrame2 = 0;
const staggerFrames2 = 15;

function animate2(){
    
    ctx2.clearRect(0, 0, CANVAS2_WIDTH, CANVAS2_HEIGHT);
    //ctx.fillRect(100,50,100,100);
    ctx2.drawImage(playerImage2, framex2 * spriteWidth2, 0, spriteWidth2, spriteHeight2, 0, 0, CANVAS2_WIDTH, CANVAS2_HEIGHT);
    if (gameFrame2 % staggerFrames2 == 0){
    if (framex2 < 1) framex2++;
    else framex2 = 0;

    }
    gameFrame2++;
    requestAnimationFrame(animate2);
}
animate2();

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
const CANVAS3_WIDTH = canvas3.width = 256;
const CANVAS3_HEIGHT = canvas3.height = 256;

const playerImage3 = new Image();
playerImage3.src = 'Frame 1.png';
const spriteWidth3 = 256
const spriteHeight3 = 256
let framex3 = 0;
let frameY3 = 0;
let gameFrame3 = 0;
const staggerFrames3 = 15;


function animate3(){
    
    ctx3.clearRect(0, 0, CANVAS3_WIDTH, CANVAS3_HEIGHT);
    //ctx.fillRect(100,50,100,100);
    ctx3.drawImage(playerImage3, framex3 * spriteWidth3, 0, spriteWidth3, spriteHeight3, 0, 0, CANVAS3_WIDTH, CANVAS3_HEIGHT);
    if (gameFrame3 % staggerFrames3 == 0){
    //If 0, go to 2, if 2, go to 3, if 3, go to 4. If 4, go to 3.

      
    if (gameFrame3 % staggerFrames3 === 0) {
        if (framex3 === 0) {
            framex3 = 2;
        } else if (framex3 === 2) {
            framex3 = 3;
        } else if (framex3 === 3) {
            framex3 = 4;
        } else if (framex3 === 4) {
            framex3 = 3;
        }
    }
 

    }
    gameFrame3++;
    requestAnimationFrame(animate3);
}
animate3();

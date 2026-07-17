// Loader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 3000);
});

// Music
const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";
    }

});

// Open Surprise Button

document.getElementById("startBtn").addEventListener("click", () => {

    document.querySelector(".gallery").scrollIntoView({
        behavior: "smooth"
    });

});

// Blow Candle

document.getElementById("blowBtn").addEventListener("click", () => {

    alert("🎂 Yay!! Candles Blown!\nHappy Birthday Shivangi ❤️");

});

// Gift

// ==========================
// Gift Popup
// ==========================

const gift = document.getElementById("giftBox");

gift.addEventListener("click",()=>{

gift.innerHTML="💖";

gift.style.transform="scale(1.4)";

document.getElementById("popup").style.display="block";

});

function closePopup(){

document.getElementById("popup").style.display="none";

}

// Floating Hearts

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let pos = 100;

    const interval = setInterval(() => {

        pos--;

        heart.style.top = pos + "vh";

        if (pos < -10) {

            clearInterval(interval);
            heart.remove();

        }

    }, 30);

}

setInterval(createHeart, 800);
// 🎈 Floating Balloons

const balloons = ["🎈","🎉","💖","⭐"];

function createBalloon(){

const balloon=document.createElement("div");

balloon.className="balloon";

balloon.innerHTML=balloons[Math.floor(Math.random()*balloons.length)];

balloon.style.left=Math.random()*100+"vw";

balloon.style.animationDuration=(8+Math.random()*8)+"s";

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},16000);

}

setInterval(createBalloon,1200);
// ==========================
// Confetti Effect
// ==========================

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function randomColor() {
    const colors = [
        "#ff4081",
        "#ffd700",
        "#00e5ff",
        "#7c4dff",
        "#4caf50",
        "#ff9800"
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}

function createConfetti() {

    for(let i=0;i<150;i++){

        particles.push({

            x:Math.random()*canvas.width,

            y:-20,

            size:5+Math.random()*8,

            speed:2+Math.random()*4,

            color:randomColor(),

            tilt:Math.random()*10

        });

    }

}

function drawConfetti(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{

        ctx.fillStyle=p.color;

        ctx.fillRect(p.x,p.y,p.size,p.size);

        p.y+=p.speed;

        p.x+=Math.sin(p.y*0.05);

        if(p.y>canvas.height){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(drawConfetti);

}

drawConfetti();

document.getElementById("startBtn").addEventListener("click",()=>{

    createConfetti();

});
// ==========================
// Typewriter Effect
// ==========================

const message =
`Happy Birthday Shivangi ❤️

May your smile always shine like the stars.

May every dream come true.

Stay happy, stay blessed,
and keep smiling forever.

🎂🎉❤️`;

let index = 0;

function typeWriter(){

    if(index < message.length){

        document.getElementById("typing").innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,50);

    }

}

window.onload = () =>{

    setTimeout(typeWriter,1500);

};
// ==========================
// Auto Image Slider
// ==========================

const images = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg"
];

let currentImage = 0;

setInterval(() => {

    currentImage++;

    if(currentImage >= images.length){
        currentImage = 0;
    }

    const slider = document.getElementById("sliderImage");

    slider.style.opacity = "0";

    setTimeout(() => {

        slider.src = images[currentImage];

        slider.style.opacity = "1";

    },400);

},3000);
// ==========================
// Fireworks Effect
// ==========================

const fireCanvas = document.getElementById("fireworks");
const fireCtx = fireCanvas.getContext("2d");

fireCanvas.width = window.innerWidth;
fireCanvas.height = window.innerHeight;

let fireworks = [];

function launchFirework(){

    const x = Math.random() * fireCanvas.width;
    const y = Math.random() * (fireCanvas.height / 2);

    for(let i = 0; i < 60; i++){

        fireworks.push({
            x: x,
            y: y,
            dx: (Math.random() - 0.5) * 8,
            dy: (Math.random() - 0.5) * 8,
            life: 100,
            color: `hsl(${Math.random()*360},100%,60%)`
        });

    }

}

function animateFireworks(){

    fireCtx.clearRect(0,0,fireCanvas.width,fireCanvas.height);

    fireworks.forEach((p,index)=>{

        fireCtx.beginPath();
        fireCtx.arc(p.x,p.y,3,0,Math.PI*2);
        fireCtx.fillStyle=p.color;
        fireCtx.fill();

        p.x += p.dx;
        p.y += p.dy;
        p.life--;

        if(p.life <= 0){
            fireworks.splice(index,1);
        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

document.getElementById("startBtn").addEventListener("click",()=>{

    for(let i=0;i<5;i++){

        setTimeout(launchFirework,i*500);

    }

});
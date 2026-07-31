const lines=[
"You are my sunshine ❤️",
"You are my happiness 💖",
"Forever Together 💕",
"Happy Girlfriend Day 🌹",
"I Love You ❤️"
];

let n=0;
let i=0;

function type(){

if(i<lines[n].length){

document.getElementById("typing").innerHTML+=lines[n].charAt(i);

i++;

setTimeout(type,70);

}else{

setTimeout(()=>{

document.getElementById("typing").innerHTML="";
i=0;
n=(n+1)%lines.length;
type();

},1800);

}

}

type();

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*35)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>heart.remove(),8000);

}

setInterval(createHeart,150);

// Mouse Glow
document.addEventListener("mousemove",(e)=>{
document.body.style.setProperty("--x",e.clientX+"px");
document.body.style.setProperty("--y",e.clientY+"px");
});

// Sparkles
const canvas=document.getElementById("sparkles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let stars=[];

for(let i=0;i<150;i++){

stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2,

s:Math.random()*1

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

stars.forEach(star=>{

ctx.beginPath();

ctx.arc(star.x,star.y,star.r,0,Math.PI*2);

ctx.fill();

star.y+=star.s;

if(star.y>canvas.height) star.y=0;

});

requestAnimationFrame(animate);

}

animate();

const fwCanvas = document.getElementById("fireworks");
const fwCtx = fwCanvas.getContext("2d");

function resizeFW(){
    fwCanvas.width = window.innerWidth;
    fwCanvas.height = window.innerHeight;
}
resizeFW();
window.addEventListener("resize", resizeFW);

let particles = [];

function launchFirework(){

    const x = Math.random() * fwCanvas.width;
    const y = Math.random() * fwCanvas.height * 0.5;

    for(let i=0;i<60;i++){

        particles.push({
            x:x,
            y:y,
            dx:(Math.random()-0.5)*8,
            dy:(Math.random()-0.5)*8,
            life:100
        });

    }
}

function animateFireworks(){

    fwCtx.clearRect(0,0,fwCanvas.width,fwCanvas.height);

    particles.forEach((p,index)=>{

        p.x += p.dx;
        p.y += p.dy;

        p.dy += 0.03;

        p.life--;

        fwCtx.beginPath();
        fwCtx.arc(p.x,p.y,2,0,Math.PI*2);
        fwCtx.fillStyle="white";
        fwCtx.fill();

        if(p.life<=0){
            particles.splice(index,1);
        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

setInterval(launchFirework,2000);

setTimeout(function(){

document.getElementById("finale").classList.add("show");

},25000);

function floatingLove() {

    const msg = document.createElement("div");

    msg.innerHTML = "❤️ I LOVE YOU ❤️";

    msg.style.position = "fixed";
    msg.style.left = Math.random() * 90 + "vw";
    msg.style.top = "100vh";

    msg.style.color = "white";
    msg.style.fontWeight = "bold";
    msg.style.fontSize = (20 + Math.random() * 20) + "px";
    msg.style.pointerEvents = "none";
    msg.style.zIndex = "999";

    document.body.appendChild(msg);

    let y = window.innerHeight;

    const move = setInterval(() => {

        y -= 2;

        msg.style.top = y + "px";

        if (y < -100) {

            clearInterval(move);

            msg.remove();

        }

    }, 20);

}

setInterval(floatingLove, 1500);

function giantHeart(){

    const heart=document.getElementById("heartExplosion");

    heart.classList.add("show");

    setTimeout(()=>{

        heart.classList.remove("show");

    },2500);

}

// Website खुलने के 35 सेकंड बाद
setTimeout(giantHeart,35000);

function screenBlast(){

document.body.classList.add("flash");

for(let i=0;i<300;i++){

particles.push({

x:window.innerWidth/2,

y:window.innerHeight/2,

dx:(Math.random()-0.5)*20,

dy:(Math.random()-0.5)*20,

life:120

});

}

setTimeout(()=>{

document.body.classList.remove("flash");

},800);

}

// Giant Heart के 3 सेकंड बाद Blast होगा

setTimeout(screenBlast,38000);
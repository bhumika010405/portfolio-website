/* ===========================================
   Typing Animation
=========================================== */

const typingElement = document.querySelector(".typing");

const words = [
    "Product Manager",
    "Builder",
    "Problem Solver",
    "AI Enthusiast",
    "Product Strategist"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1400);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;
        }
    }

    setTimeout(typeEffect, deleting ? 40 : 90);

}

typeEffect();


/* ===========================================
   Reveal Animation
=========================================== */

const reveals = document.querySelectorAll(

".stat-card,\
.about-card,\
.product-card,\
.highlight-card,\
.timeline-content,\
.leader-card,\
.thinking-card,\
.skill-box,\
.contact-card,\
.resume-card"

);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:.15
}

);

reveals.forEach(card=>{

card.classList.add("hidden");

observer.observe(card);

});


/* ===========================================
   Counter Animation
=========================================== */

const counters=document.querySelectorAll(".stat-card h2");

const counterObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter=entry.target;

const text=counter.innerText;

const number=parseInt(text.replace(/\D/g,""));

const suffix=text.replace(/[0-9]/g,"");

let current=0;

const increment=Math.ceil(number/60);

const timer=setInterval(()=>{

current+=increment;

if(current>=number){

counter.innerText=number+suffix;

clearInterval(timer);

}else{

counter.innerText=current+suffix;

}

},20);

counterObserver.unobserve(counter);

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/* ===========================================
   Active Navbar
=========================================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/* ===========================================
   Navbar Background
=========================================== */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.style.background="rgba(8,12,22,.92)";

navbar.style.boxShadow="0 15px 35px rgba(0,0,0,.35)";

}else{

navbar.style.background="rgba(10,15,30,.75)";

}

});


/* ===========================================
   Back To Top
=========================================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("visible");

}else{

topBtn.classList.remove("visible");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

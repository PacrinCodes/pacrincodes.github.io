/* ==========================================
   TYPING EFFECT
========================================== */

const typingElement = document.querySelector(".typing");

const words = [
    "Full Stack Web Developer",
    "IT Technician",
    "Mixed Martial Artist"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        target.scrollIntoView({
            behavior:'smooth'
        });

    });

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 150;

        if(scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


/* ==========================================
   STICKY HEADER
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.background = "rgba(10,10,10,.85)";
        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.3)";

    }

    else{

        header.style.background =
        "rgba(15,15,15,.55)";

        header.style.boxShadow="none";

    }

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(
".section, .hero-content, .hero-image, .skill-card, .project-card"
);

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:.15});

reveals.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(60px)";
    el.style.transition=".8s";

    observer.observe(el);

});


/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".stat h2");
const statsSection = document.querySelector(".about");
let counted = false;

const countObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting && !counted){
            counted = true;
            counters.forEach(counter=>{
                const target = parseInt(counter.innerText);
                let count = 0;
                const speed = target / 80;

                function update(){
                    count += speed;
                    if(count < target){
                        counter.innerText = Math.floor(count)+"+";
                        requestAnimationFrame(update);
                    }
                    else{
                        counter.innerText = target+"+";
                    }
                }
                update();
            });
        }
    });
},{threshold:.15});

if(statsSection){
    countObserver.observe(statsSection);
}


/* ==========================================
   BUTTON RIPPLE
========================================== */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(
"%cWelcome to Rahul Tamang's Portfolio 🚀",
"color:#10B981;font-size:18px;font-weight:bold;"
);
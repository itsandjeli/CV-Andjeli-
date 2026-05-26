/* =========================
FILE : script.js
========================= */

// =========================
// REVEAL
// =========================

const reveals =
document.querySelectorAll(".reveal");

function revealOnScroll(){

  reveals.forEach((el)=>{

    const top =
    el.getBoundingClientRect().top;

    const windowHeight =
    window.innerHeight;

    if(top < windowHeight - 100){

      el.classList.add("active");

    }

  });

}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

// =========================
// NAVBAR SHRINK
// =========================

const header =
document.getElementById("header");

window.addEventListener("scroll",()=>{

  if(window.scrollY > 50){

    header.classList.add("shrink");

  } else {

    header.classList.remove("shrink");
  }

});

// =========================
// HAMBURGER
// =========================

const hamburger =
document.getElementById("hamburger");

const navLinks =
document.getElementById("navLinks");

hamburger.addEventListener(
  "click",
  ()=>{

    navLinks.classList.toggle("active");

  }
);

// =========================
// TYPING EFFECT
// =========================

const typing =
document.getElementById("typing");

const texts = [
  "Frontend Developer",
  "Creative Designer",
  "UI/UX Specialist",
  "Interactive Creator"
];

let textIndex = 0;
let charIndex = 0;

function typeEffect(){

  if(charIndex < texts[textIndex].length){

    typing.textContent +=
    texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect,100);

  } else {

    setTimeout(eraseEffect,1500);
  }

}

function eraseEffect(){

  if(charIndex > 0){

    typing.textContent =
    texts[textIndex]
    .substring(0,charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect,50);

  } else {

    textIndex++;

    if(textIndex >= texts.length){
      textIndex = 0;
    }

    setTimeout(typeEffect,500);
  }

}

typeEffect();

// =========================
// COUNTER
// =========================

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      const counter =
      entry.target;

      const target =
      +counter.dataset.target;

      let current = 0;

      const updateCounter = ()=>{

        const increment =
        target / 80;

        if(current < target){

          current += increment;

          counter.innerText =
          Math.ceil(current);

          requestAnimationFrame(
            updateCounter
          );

        } else {

          counter.innerText = target;
        }

      };

      updateCounter();

      counterObserver.unobserve(counter);

    }

  });

},{threshold:.5});

counters.forEach(counter=>{
  counterObserver.observe(counter);
});

// =========================
// PROGRESS BAR
// =========================

const progressBars =
document.querySelectorAll(".progress-bar");

const progressObserver =
new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.style.width =
      entry.target.dataset.width;

    }

  });

},{threshold:.5});

progressBars.forEach(bar=>{
  progressObserver.observe(bar);
});

// =========================
// RIPPLE EFFECT
// =========================

document
.querySelectorAll(".ripple-btn")
.forEach(button=>{

  button.addEventListener(
    "click",
    function(e){

      const circle =
      document.createElement("span");

      const diameter =
      Math.max(
        this.clientWidth,
        this.clientHeight
      );

      const radius =
      diameter / 2;

      circle.style.width =
      circle.style.height =
      `${diameter}px`;

      circle.style.left =
      `${e.clientX -
      this.offsetLeft -
      radius}px`;

      circle.style.top =
      `${e.clientY -
      this.offsetTop -
      radius}px`;

      circle.classList.add("ripple");

      const ripple =
      this.getElementsByClassName(
        "ripple"
      )[0];

      if(ripple){
        ripple.remove();
      }

      this.appendChild(circle);

    }
  );

});

// =========================
// MOUSE GLOW
// =========================

const glow =
document.querySelector(".mouse-glow");

document.addEventListener(
  "mousemove",
  (e)=>{

    glow.style.left =
    `${e.clientX}px`;

    glow.style.top =
    `${e.clientY}px`;

  }
);

// =========================
// HERO IMAGE PARALLAX
// =========================

const heroImage =
document.querySelector(".hero-image img");

document.addEventListener(
  "mousemove",
  (e)=>{

    const x =
    (window.innerWidth / 2 - e.pageX)
    / 40;

    const y =
    (window.innerHeight / 2 - e.pageY)
    / 40;

    heroImage.style.transform =
    `
    rotateY(${x}deg)
    rotateX(${y}deg)
    scale(1.02)
    `;

  }
);

// =========================
// DARK MODE
// =========================

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener(
  "click",
  ()=>{

    document.body.classList.toggle("light");

    if(document.body.classList
    .contains("light")){

      document.documentElement
      .style.setProperty(
        "--bg",
        "#f5f7fb"
      );

      document.documentElement
      .style.setProperty(
        "--text",
        "#111827"
      );

      document.documentElement
      .style.setProperty(
        "--text-light",
        "#4b5563"
      );

      localStorage.setItem(
        "theme",
        "light"
      );

    } else {

      document.documentElement
      .style.setProperty(
        "--bg",
        "#050816"
      );

      document.documentElement
      .style.setProperty(
        "--text",
        "#ffffff"
      );

      document.documentElement
      .style.setProperty(
        "--text-light",
        "#b6bfd0"
      );

      localStorage.setItem(
        "theme",
        "dark"
      );
    }

  }
);

// =========================
// LOAD SAVED THEME
// =========================

if(localStorage.getItem("theme")
=== "light"){

  document.body.classList.add("light");

  document.documentElement
  .style.setProperty(
    "--bg",
    "#f5f7fb"
  );

  document.documentElement
  .style.setProperty(
    "--text",
    "#111827"
  );

  document.documentElement
  .style.setProperty(
    "--text-light",
    "#4b5563"
  );

}

// =========================
// CONTACT VALIDATION
// =========================

const form =
document.getElementById("contactForm");

const error =
document.getElementById("error");

form.addEventListener(
  "submit",
  (e)=>{

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const message =
    document.getElementById("message").value;

    if(
      name === "" ||
      email === "" ||
      message === ""
    ){

      error.innerText =
      "Semua field wajib diisi.";

      return;
    }

    error.innerText =
    "Pesan berhasil dikirim!";

    form.reset();

  }
);
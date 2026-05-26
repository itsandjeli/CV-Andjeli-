// =========================
// LOADER
// =========================

window.addEventListener("load",()=>{

  const loader =
  document.querySelector(".loader");

  setTimeout(()=>{

    loader.classList.add("hide");

  },1200);

});

// =========================
// CURSOR
// =========================

const cursor =
document.querySelector(".cursor");

window.addEventListener("mousemove",(e)=>{

  cursor.style.left =
  e.clientX + "px";

  cursor.style.top =
  e.clientY + "px";

});

// =========================
// MOUSE GLOW
// =========================

const glow =
document.querySelector(".mouse-glow");

window.addEventListener("mousemove",(e)=>{

  glow.style.left =
  e.clientX + "px";

  glow.style.top =
  e.clientY + "px";

});

// =========================
// THEME TOGGLE
// =========================

const themeToggle =
document.getElementById("themeToggle");

const icon =
themeToggle.querySelector("i");

if(localStorage.getItem("theme")
=== "dark"){

  document.body.classList.add("dark");

  icon.classList.replace(
    "fa-moon",
    "fa-sun"
  );
}

themeToggle.addEventListener("click",()=>{

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){

    localStorage.setItem(
      "theme",
      "dark"
    );

    icon.classList.replace(
      "fa-moon",
      "fa-sun"
    );

  }else{

    localStorage.setItem(
      "theme",
      "light"
    );

    icon.classList.replace(
      "fa-sun",
      "fa-moon"
    );
  }

});

// =========================
// MOBILE MENU
// =========================

const hamburger =
document.getElementById("hamburger");

const navLinks =
document.getElementById("navLinks");

hamburger.addEventListener("click",()=>{

  navLinks.classList.toggle("active");

});

// =========================
// TYPING EFFECT
// =========================

const typing =
document.querySelector(".typing");

const words = [

  "Frontend Developer",
  "UI Designer",
  "Creative Coder",
  "Interactive Designer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

  const current =
  words[wordIndex];

  if(!deleting){

    typing.textContent =
    current.substring(0,charIndex++);

    if(charIndex >
    current.length){

      deleting = true;

      setTimeout(typeEffect,1200);

      return;
    }

  }else{

    typing.textContent =
    current.substring(0,charIndex--);

    if(charIndex < 0){

      deleting = false;

      wordIndex =
      (wordIndex + 1)
      % words.length;
    }
  }

  setTimeout(
    typeEffect,
    deleting ? 60 : 120
  );
}

typeEffect();

// =========================
// REVEAL
// =========================

const reveals =
document.querySelectorAll(".reveal");

reveals.forEach((el,index)=>{

  el.style.transitionDelay =
  `${index * 0.1}s`;
});

function revealOnScroll(){

  reveals.forEach(reveal=>{

    const top =
    reveal.getBoundingClientRect().top;

    if(top <
    window.innerHeight - 100){

      reveal.classList.add("active");
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

  }else{

    header.classList.remove("shrink");
  }

});

// =========================
// PROGRESS BAR
// =========================

const progressBars =
document.querySelectorAll(".progress-bar");

function animateProgress(){

  progressBars.forEach(bar=>{

    const top =
    bar.getBoundingClientRect().top;

    if(top <
    window.innerHeight - 50){

      bar.style.width =
      bar.dataset.width;
    }
  });
}

window.addEventListener(
  "scroll",
  animateProgress
);

animateProgress();

// =========================
// COUNTER
// =========================

const counters =
document.querySelectorAll(".counter");

let counterStarted = false;

function startCounter(){

  if(counterStarted) return;

  counters.forEach(counter=>{

    const top =
    counter.getBoundingClientRect().top;

    if(top <
    window.innerHeight - 100){

      counterStarted = true;

      const target =
      +counter.dataset.target;

      let count = 0;

      const speed =
      target / 100;

      function update(){

        count += speed;

        if(count < target){

          counter.innerText =
          Math.floor(count);

          requestAnimationFrame(update);

        }else{

          counter.innerText =
          target + "+";
        }
      }

      update();
    }
  });
}

window.addEventListener(
  "scroll",
  startCounter
);

startCounter();

// =========================
// PARALLAX
// =========================

window.addEventListener("scroll",()=>{

  const scroll =
  window.pageYOffset;

  const parallax =
  document.querySelector(".parallax-bg");

  if(parallax){

    parallax.style.transform =
    `translateY(${scroll * 0.4}px)`;
  }

});

// =========================
// SCROLL PROGRESS
// =========================

window.addEventListener("scroll",()=>{

  const progress =
  document.querySelector(
    ".scroll-progress"
  );

  const total =
  document.documentElement.scrollHeight -
  window.innerHeight;

  const current =
  (window.scrollY / total) * 100;

  progress.style.width =
  current + "%";

});

// =========================
// ACTIVE NAV
// =========================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

  let current = "";

  sections.forEach(section=>{

    const sectionTop =
    section.offsetTop;

    if(scrollY >= sectionTop - 200){

      current =
      section.getAttribute("id");
    }
  });

  navItems.forEach(link=>{

    link.classList.remove("active");

    if(link.href.includes(current)){

      link.classList.add("active");
    }
  });

});

// =========================
// IMAGE FADE
// =========================

const images =
document.querySelectorAll("img");

images.forEach(img=>{

  if(img.complete){

    img.classList.add("loaded");

  }else{

    img.addEventListener("load",()=>{

      img.classList.add("loaded");

    });
  }

});

// =========================
// RIPPLE
// =========================

const rippleButtons =
document.querySelectorAll(".ripple");

rippleButtons.forEach(button=>{

  button.addEventListener("click",(e)=>{

    const circle =
    document.createElement("span");

    const diameter =
    Math.max(
      button.clientWidth,
      button.clientHeight
    );

    const radius =
    diameter / 2;

    circle.style.width =
    circle.style.height =
    `${diameter}px`;

    circle.style.left =
    `${e.clientX -
    button.offsetLeft -
    radius}px`;

    circle.style.top =
    `${e.clientY -
    button.offsetTop -
    radius}px`;

    const ripple =
    button.getElementsByTagName("span")[0];

    if(ripple){

      ripple.remove();
    }

    button.appendChild(circle);

  });
});

// =========================
// MAGNETIC BUTTON
// =========================

const magnetic =
document.querySelectorAll(".btn");

magnetic.forEach(btn=>{

  btn.addEventListener("mousemove",(e)=>{

    const rect =
    btn.getBoundingClientRect();

    const x =
    e.clientX - rect.left -
    rect.width / 2;

    const y =
    e.clientY - rect.top -
    rect.height / 2;

    btn.style.transform =
    `translate(${x * 0.2}px,
    ${y * 0.2}px)`;
  });

  btn.addEventListener("mouseleave",()=>{

    btn.style.transform =
    "translate(0,0)";
  });

});

// =========================
// 3D CARD
// =========================

const cards =
document.querySelectorAll(".project-card");

cards.forEach(card=>{

  card.addEventListener("mousemove",(e)=>{

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    const rotateX =
    ((y / rect.height) - 0.5) * -12;

    const rotateY =
    ((x / rect.width) - 0.5) * 12;

    card.style.transform =
    `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateY(-10px)
    `;
  });

  card.addEventListener("mouseleave",()=>{

    card.style.transform =
    "rotateX(0) rotateY(0)";
  });

});

// =========================
// FORM VALIDATION
// =========================

const form =
document.getElementById("form");

form.addEventListener("submit",(e)=>{

  e.preventDefault();

  const name =
  document.getElementById("name").value.trim();

  const email =
  document.getElementById("email").value.trim();

  const message =
  document.getElementById("message").value.trim();

  if(
    name === "" ||
    email === "" ||
    message === ""
  ){

    alert("Please fill all fields.");

    return;
  }

  const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailPattern.test(email)){

    alert("Invalid email format.");

    return;
  }

  alert("Message sent successfully!");

  form.reset();

  // NAVBAR SHRINK
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});

});
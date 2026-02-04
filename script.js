/* =========================
   TYPING TEXT
========================= */
function typeText(selector, speed = 80) {
  const element = document.querySelector(selector);
  if (!element) return;
  const text = element.innerText;
  element.innerText = "";
  let i = 0;
  const typing = setInterval(() => {
    element.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(typing);
  }, speed);
}

/* Hero typing effect */
window.addEventListener("DOMContentLoaded", () => {
  typeText(".typing-text", 80);
  setTimeout(() => typeText(".hero p", 60), 800);
});

/* =========================
   FLOATING PARTICLES
========================= */
function createParticles(num = 50) {
  for (let i = 0; i < num; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.top = Math.random() * window.innerHeight + "px";
    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.width = 3 + Math.random() * 6 + "px";
    particle.style.height = particle.style.width;
    particle.style.opacity = 0.2 + Math.random() * 0.5;
    particle.style.animationDuration = 4 + Math.random() * 6 + "s";
    document.body.appendChild(particle);
  }
}
createParticles(50);

/* =========================
   CARD SCROLL ANIMATION
========================= */
const cards = document.querySelectorAll('.card');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom){
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* =========================
   SMOOTH SCROLL LINKS
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* =========================
   PARALLAX SECTIONS
========================= */
function parallaxSections() {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    const speed = 0.3; 
    sec.style.backgroundPositionY = `${window.scrollY * speed}px`;
  });
}
window.addEventListener("scroll", parallaxSections);

/* =========================
   PAGE FADE-IN TRANSITION
========================= */
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

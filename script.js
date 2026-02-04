/* =========================
   Typing Text Animation
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

/* Example: hero title & description */
window.addEventListener("DOMContentLoaded", () => {
  typeText(".hero h1", 80);
  setTimeout(() => typeText(".hero p", 60), 800);
});

/* =========================
   Floating Particles
========================= */
function createParticles(num = 40) {
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
   Smooth Section Reveal on Scroll
========================= */
const revealElements = document.querySelectorAll("section, .card, .hero");
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) el.classList.add("fade-in");
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* =========================
   Parallax Background Motion
========================= */
function parallaxSections() {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    const speed = 0.3; // adjust speed for effect
    sec.style.backgroundPositionY = `${window.scrollY * speed}px`;
  });
}
window.addEventListener("scroll", parallaxSections);

/* =========================
   Smooth App-style Page Transitions
========================= */
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

/* ===================== TYPING HERO TEXT ===================== */
const typingElement = document.querySelector('.typing-text');
if(typingElement){
  const textToType = "Learn. Understand. Succeed."; // full text
  let index = 0;
  function typeEffect() {
    typingElement.innerText = textToType.slice(0, index);
    index++;
    if(index <= textToType.length){
      setTimeout(typeEffect, 120); // adjust typing speed
    }
  }
  typeEffect();
}

/* ===================== CARD SCROLL ANIMATION ===================== */
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom){
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

/* ===================== SMOOTH SCROLL LINKS ===================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

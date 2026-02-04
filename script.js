/* ===================== TYPING HERO TEXT ===================== */
const typingElement = document.querySelector('.typing-text');
if(typingElement){
  const textToType = "Learn. Understand. Succeed."; // full text
  let index = 0;
  function typeEffect() {
    if(index <= textToType.length){
      typingElement.innerText = textToType.slice(0, index);
      index++;
      setTimeout(typeEffect, 100); // typing speed
    }
  }
  typeEffect();
}

/* ===================== SCROLL ANIMATIONS ===================== */
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom){
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    } else {
      card.style.opacity = 0;
      card.style.transform = "translateY(30px)";
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

/* =========================
   GLOBAL RESET & FONTS
========================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(120deg,#0f0f1f,#1a1a2e);
  color: #fff;
  overflow-x: hidden;
  scroll-behavior: smooth;
  position: relative;
}

/* =========================
   LINKS & BUTTONS
========================= */
a, .btn {
  display: inline-block;
  text-decoration: none;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.btn {
  padding: 12px 24px;
  background: linear-gradient(90deg,#0a7cff,#ffcc00);
  color: #000;
  box-shadow: 0 4px 20px rgba(255,204,0,0.4);
}
.btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 30px rgba(255,204,0,0.6);
}

/* =========================
   HEADER
========================= */
header {
  background: rgba(10,124,255,0.9);
  backdrop-filter: blur(10px);
  padding: 20px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 100;
}
.logo-container img {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: #fff;
  padding: 5px;
  transition: transform 0.4s ease;
}
.logo-container img:hover {
  transform: rotateY(15deg) scale(1.05);
}
header h1 {
  font-size: 28px;
}
header p {
  font-size: 14px;
  opacity: 0.9;
}

/* =========================
   HERO / CINEMATIC SECTION
========================= */
.hero {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.hero h1 {
  font-size: 48px;
  color: #0a7cff;
  text-shadow: 0 0 12px #0a7cff,0 0 20px #ffcc00;
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeUp 1.2s forwards;
}
.hero p {
  font-size: 20px;
  color: #fff;
  margin-bottom: 30px;
  opacity: 0;
  animation: fadeUp 1.5s forwards;
}
.typing-text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #ffcc00;
  animation: blink 0.8s step-end infinite;
}
@keyframes fadeUp {
  from { transform: translateY(40px); opacity:0; }
  to { transform: translateY(0); opacity:1; }
}
@keyframes blink {
  50% { border-color: transparent; }
}

/* =========================
   SECTIONS
========================= */
section {
  padding: 60px 10%;
  max-width: 1200px;
  margin: auto;
  position: relative;
}
section::before {
  content: '';
  position: absolute;
  width: 300%;
  height: 300%;
  top: -100%;
  left: -100%;
  background: linear-gradient(45deg,#0a7cff,#ffcc00,#00ffd5,#ff00ff);
  animation: rotateGradient 20s linear infinite;
  z-index: -1;
  opacity: 0.08;
}
@keyframes rotateGradient {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}

/* =========================
   GRID CARDS
========================= */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
  gap: 20px;
}
.card {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;
  transform-style: preserve-3d;
  transform: translateY(40px);
  opacity: 0;
}
.card:hover {
  transform: rotateY(8deg) scale(1.05);
  box-shadow: 0 10px 30px rgba(255,204,0,0.6);
}
.card h3, header h1 {
  text-shadow: 0 0 6px #0a7cff,0 0 12px #ffcc00;
}

/* =========================
   FOOTER
========================= */
footer {
  background: #111;
  color: #ddd;
  text-align: center;
  padding: 30px 10%;
  font-size: 14px;
}
footer a {
  color: #ffcc00;
  text-decoration: none;
}

/* =========================
   FLOATING PARTICLES
========================= */
.particle {
  position: absolute;
  background: #0a7cff;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  opacity: 0.6;
  animation: floatParticle 6s linear infinite;
}
@keyframes floatParticle {
  0% { transform: translate(0,0) rotate(0deg); opacity:0.6; }
  50% { transform: translate(50px,-50px) rotate(180deg); opacity:0.3; }
  100% { transform: translate(-50px,50px) rotate(360deg); opacity:0.6; }
}

/* =========================
   APP-STYLE PAGE TRANSITIONS
========================= */
.fade-in {
  opacity: 0;
  animation: fadeInPage 1s forwards;
}
@keyframes fadeInPage {
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
}

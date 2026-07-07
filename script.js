// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animateCursor() {
  rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
  cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();
document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.width = '54px'; ring.style.height = '54px';
    ring.style.borderColor = 'rgba(0,229,255,0.8)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width = '36px'; ring.style.height = '36px';
    ring.style.borderColor = 'rgba(0,229,255,0.5)';
  });
});

// Typing effect
const roles = ['Java Developer', 'Backend Engineer', 'Spring Boot Dev', 'Full-Stack Learner'];
let roleIndex = 0, charIndex = 0, deleting = false;
const typingEl = document.getElementById('typing');
function type() {
  const current = roles[roleIndex];
  if (!deleting) {
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// script.js v2 — GSAP animations + particles.js + contact form demo
document.addEventListener('DOMContentLoaded', ()=>{
  // Initialize particles.js
  if(window.particlesJS){
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": 60 },
        "size": { "value": 3 },
        "color": { "value": ["#7c3aed","#0f4bd6","#61dafb"] },
        "line_linked": { "enable": true, "distance": 120, "opacity": 0.06 }
      },
      "interactivity": {
        "events": {
          "onhover": { "enable": true, "mode": "repulse" },
          "onclick": { "enable": true, "mode": "push" }
        }
      }
    });
  }

  // GSAP intro timeline
  const tl = gsap.timeline();
  tl.from('.topbar', {y:-30, opacity:0, duration:0.6, ease:'power3.out'});
  tl.from('.hero-inner .hero-content .kicker', {y:8, opacity:0, duration:0.4}, '-=0.4');
  tl.from('.headline', {y:12, opacity:0, duration:0.6, stagger:0.05, ease:'power4.out'}, '-=0.3');
  tl.from('.lead', {y:8, opacity:0, duration:0.5}, '-=0.35');
  tl.from('.avatar-wrap', {scale:0.86, opacity:0, duration:0.7, ease:'elastic.out(1,0.6)'}, '-=0.45');
  tl.from('.skill-bubbles span', {y:10, opacity:0, stagger:0.05, duration:0.45}, '-=0.5');

  // Hover parallax on hero (subtle)
  const avatar = document.querySelector('.avatar-card');
  if(avatar){
    avatar.addEventListener('mousemove', (e)=>{
      const rX = (e.offsetY - avatar.offsetHeight/2) / 18;
      const rY = (e.offsetX - avatar.offsetWidth/2) / -18;
      avatar.style.transform = `perspective(800px) rotateX(${rX}deg) rotateY(${rY}deg) translateZ(6px)`;
    });
    avatar.addEventListener('mouseleave', ()=>{ avatar.style.transform = 'none'; });
  }

  // Scroll reveal using GSAP (requires ScrollTrigger if added)
  // For now use IntersectionObserver fallback for reveal
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('reveal');
      }
    });
  }, {threshold:0.12});
  document.querySelectorAll('.card, .project, .skill').forEach(el=>obs.observe(el));

  // Simple contact form (fake / client-side demo)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      btn.disabled = true;
      const original = btn.innerHTML;
      btn.innerHTML = 'Sending...';
      setTimeout(()=>{
        btn.innerHTML = 'Sent ✓';
        btn.classList.remove('primary');
        btn.style.background = 'linear-gradient(90deg,#22c55e,#16a34a)';
        form.reset();
        setTimeout(()=>{ btn.innerHTML = original; btn.disabled = false; btn.classList.add('primary'); btn.style.background=''; }, 2200);
      }, 1100);
    });
  }
});

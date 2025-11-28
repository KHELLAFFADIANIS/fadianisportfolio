// Simple interactions: download CV button (dummy), contact form demo, small reveal
document.addEventListener('DOMContentLoaded', function(){
  const downloadBtn = document.getElementById('downloadCv');
  if(downloadBtn){
    downloadBtn.addEventListener('click', function(){
      // For demo: generate a simple text CV and trigger download as PDF-like .txt
      const cvText = [
        "Khellaf Fadi Aniis - CV",
        "Email: fadianis.khellaf@univ-constantine2.dz",
        "Phone: +213 798797913",
        "",
        "Career Objective:",
        "My goal is to develop my skills in Web Development and AI, and to obtain internships in innovative technical projects.",
        "",
        "Education and Experience: see portfolio website."
      ].join('\n');
      const blob = new Blob([cvText], {type: 'text/plain;charset=utf-8'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Fadi_Anis_CV.txt';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
  }

  // contact demo
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      btn.disabled = true;
      const orig = btn.innerHTML;
      btn.innerHTML = 'Sending...';
      setTimeout(function(){
        btn.innerHTML = 'Sent ✓';
        form.reset();
        setTimeout(function(){ btn.innerHTML = orig; btn.disabled = false; }, 1600);
      }, 900);
    });
  }

  // simple reveal on scroll
  const items = document.querySelectorAll('.timeline-item, .project-card, .skill-row');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('reveal');
    });
  }, {threshold:0.12});
  items.forEach(i=>obs.observe(i));
});

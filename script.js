
document.getElementById('year').textContent = new Date().getFullYear();
const navToggle=document.querySelector('.nav-toggle');const navLinks=document.querySelector('.nav-links');
if(navToggle){navToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));}
const revealItems=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.12});
revealItems.forEach(item=>observer.observe(item));
const glow=document.querySelector('.cursor-glow');
window.addEventListener('mousemove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';}});

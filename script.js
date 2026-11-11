(() => {
const header=document.querySelector('.header'),menu=document.querySelector('.menu'),nav=document.querySelector('#nav');
const scroll=()=>header.classList.toggle('scrolled',scrollY>20);scroll();addEventListener('scroll',scroll,{passive:true});
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰';});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');menu.textContent='☰';}));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}}));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#lead-form')?.addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;if(f.website.value)return;if(!f.reportValidity())return;document.querySelector('#form-message').textContent='Форма заполнена корректно. Реальная отправка будет подключена на этапе 4.';});
})();
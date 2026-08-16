['reference-match.css?v=4','readability.css?v=1'].forEach(href=>{if(!document.querySelector(`link[href="${href}"]`)){const l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l)}});
const applyImage=(selector,src,position='center')=>{document.querySelectorAll(selector).forEach(el=>{el.style.backgroundImage=`url('${src}')`;el.style.backgroundSize='cover';el.style.backgroundPosition=position;el.style.backgroundRepeat='no-repeat'})};
applyImage('.riding-map','949ea614-f9a5-40ed-b8c8-67d624c22e9e.png','center');
applyImage('.bbq-photo','cd34ea15-e9c9-4f80-8677-8fd34706819d.png','center');
applyImage('.mel-photo','7efb8577-2a38-4503-b669-475c6c98a6f7.png','center 28%');
applyImage('.ehsan-photo','4839a9df-4885-4670-98ea-22979ef70a81.png','center 18%');

document.querySelectorAll('form[action*="formsubmit.co"]').forEach(form=>{
  const email=form.querySelector('input[type="email"]');
  if(email) email.name='email';
  if(!form.querySelector('input[name="_autoresponse"]')){
    const auto=document.createElement('input');auto.type='hidden';auto.name='_autoresponse';auto.value='Thanks for contacting the Recall North Vancouver–Lonsdale campaign. We received your submission and a campaign team member will follow up if needed.';form.appendChild(auto);
  }
  if(!form.querySelector('input[name="_captcha"]')){const c=document.createElement('input');c.type='hidden';c.name='_captcha';c.value='false';form.appendChild(c)}
});

const menu=document.querySelector('.menu');const nav=document.querySelector('nav');if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;const progressBar=document.querySelector('.progress');if(!reduced){const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.08,rootMargin:'0px 0px -20px'});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;if(progressBar)progressBar.style.width=(h?window.scrollY/h*100:0)+'%'},{passive:true})}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));if(progressBar)progressBar.style.display='none'}
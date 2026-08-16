['reference-match.css?v=4','readability.css?v=2'].forEach(href=>{if(!document.querySelector(`link[href="${href}"]`)){const l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l)}});

const forceSignStyle=document.createElement('style');
forceSignStyle.textContent=`
#sign .form{background:#ffffff!important;color:#142033!important;padding:28px!important;border-radius:10px!important}
#sign .form .row{margin-bottom:18px!important}
#sign .form .field-title{display:block!important;color:#142033!important;font-size:17px!important;font-weight:800!important;margin:0 0 7px!important;line-height:1.25!important;letter-spacing:.01em!important}
#sign .form label{display:block!important;color:#142033!important;font-size:0!important;font-weight:800!important;opacity:1!important;visibility:visible!important}
#sign .form input{display:block!important;width:100%!important;min-height:52px!important;background:#ffffff!important;color:#111827!important;border:2px solid #98a2b3!important;border-radius:6px!important;padding:12px 14px!important;font-size:17px!important;font-weight:600!important;opacity:1!important;-webkit-text-fill-color:#111827!important}
#sign .form input::placeholder{color:#667085!important;opacity:1!important;font-weight:500!important}
#sign .form .btn,#sign .form button{color:#ffffff!important;-webkit-text-fill-color:#ffffff!important;background:#c51f2d!important;margin-top:2px!important}
#sign .head{margin-bottom:24px!important}
#sign .head h2{color:#ffffff!important;margin-bottom:8px!important}
#sign .eyebrow{color:#f1c766!important}
@media(max-width:600px){#sign .form{padding:20px!important}#sign .form .field-title{font-size:16px!important}#sign .form input{font-size:16px!important}}
`;
document.head.appendChild(forceSignStyle);

const signForm=document.querySelector('#sign form');
if(signForm){
  const fields=[
    {sel:'input[name="Full name"]',label:'Full name',ph:'Your full name'},
    {sel:'input[type="email"]',label:'Email address',ph:'you@example.com'},
    {sel:'input[name="Street address"]',label:'Street address',ph:'Your street address'}
  ];
  fields.forEach(({sel,label,ph})=>{
    const input=signForm.querySelector(sel);
    if(!input)return;
    input.placeholder=ph;
    input.setAttribute('aria-label',label);
    const row=input.closest('.row');
    if(row && !row.querySelector('.field-title')){
      const title=document.createElement('span');
      title.className='field-title';
      title.textContent=label;
      row.insertBefore(title,row.firstChild);
    }
  });
}

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
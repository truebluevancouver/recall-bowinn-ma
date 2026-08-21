['reference-match.css?v=4','readability.css?v=2'].forEach(href=>{if(!document.querySelector(`link[href="${href}"]`)){const l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l)}});

const forceSignStyle=document.createElement('style');
forceSignStyle.textContent=`
#sign .form{background:#ffffff!important;color:#142033!important;padding:28px!important;border-radius:14px!important}
#sign .form .row{margin-bottom:18px!important}
#sign .form .field-title{display:block!important;color:#142033!important;font-size:17px!important;font-weight:800!important;margin:0 0 7px!important;line-height:1.25!important;letter-spacing:.01em!important}
#sign .form label{display:block!important;color:#142033!important;font-size:0!important;font-weight:800!important;opacity:1!important;visibility:visible!important}
#sign .form input{display:block!important;width:100%!important;min-height:52px!important;background:#ffffff!important;color:#111827!important;border:1px solid #cbd5e1!important;border-radius:9px!important;padding:12px 14px!important;font-size:17px!important;font-weight:600!important;opacity:1!important;-webkit-text-fill-color:#111827!important}
#sign .form input::placeholder{color:#667085!important;opacity:1!important;font-weight:500!important}
#sign .form .btn,#sign .form button{color:#ffffff!important;-webkit-text-fill-color:#ffffff!important;background:#c51f2d!important;margin-top:2px!important}
#sign .head{margin-bottom:24px!important}
#sign .head h2{color:#ffffff!important;margin-bottom:8px!important}
#sign .eyebrow{color:#f1c766!important}
@media(max-width:600px){#sign .form{padding:20px!important}#sign .form .field-title{font-size:16px!important}#sign .form input{font-size:16px!important}}
`;
document.head.appendChild(forceSignStyle);

const topCleanupStyle=document.createElement('style');
topCleanupStyle.textContent=`
.utility,.campaign-header{display:none!important}
.feature-strip{display:none!important}
.action-rail{display:none!important}
.hq-hero{min-height:560px!important;background:radial-gradient(circle at 50% 25%,rgba(51,95,151,.33),transparent 34%),linear-gradient(145deg,#061326 0%,#0a2648 52%,#07172d 100%)!important;border-bottom:1px solid rgba(255,255,255,.08)!important}
.hq-hero:before{width:9px!important;left:0!important;transform:none!important;background:linear-gradient(#ef3340,#a80f1c)!important}
.hq-hero-grid{grid-template-columns:minmax(0,900px)!important;justify-content:center!important;padding:88px 0 82px!important}
.hq-hero-grid .recall-seal,.hq-hero-grid .priority-panel{display:none!important}
.hero-copy{padding-left:0!important;text-align:center!important;margin:0 auto!important}
.hero-kicker{display:inline-block!important;background:rgba(255,255,255,.08)!important;border:1px solid rgba(255,255,255,.15)!important;border-radius:999px!important;padding:8px 14px!important;margin-bottom:20px!important;font-size:.76rem!important;letter-spacing:.09em!important}
.hero-copy h1{margin:0 auto 22px!important;max-width:900px!important;font-size:clamp(3.4rem,7vw,6.4rem)!important;line-height:.88!important;letter-spacing:-.055em!important}
.hero-copy h1 em{border-radius:8px!important;padding:5px 12px 9px!important;box-shadow:0 14px 36px rgba(197,31,45,.26)!important}
.hero-copy p{margin:0 auto!important;max-width:690px!important;font-size:1.12rem!important;line-height:1.65!important;color:#e8eef7!important}
.hero-copy .actions{justify-content:center!important;margin-top:30px!important;gap:12px!important}
.hero-copy .actions .btn{min-width:190px!important;padding:15px 23px!important;border-radius:8px!important}
.hero-copy .actions .primary{box-shadow:0 12px 32px rgba(197,31,45,.32)!important}
.hero-copy .actions .hero-outline{background:rgba(255,255,255,.04)!important}
@media(max-width:700px){.hq-hero{min-height:500px!important}.hq-hero-grid{padding:58px 0 54px!important}.hero-copy{padding:0 6px!important}.hero-copy h1{font-size:clamp(2.65rem,14vw,4.2rem)!important}.hero-copy p{font-size:1rem!important}.hero-copy .actions{flex-direction:column!important;align-items:center!important}.hero-copy .actions .btn{width:min(100%,320px)!important}}
`;
document.head.appendChild(topCleanupStyle);

const donateStyle=document.createElement('style');
donateStyle.textContent=`
.campaign-donate-cta{position:relative;background:#fff;color:#0b2345;padding:56px 24px;text-align:center;border-bottom:1px solid #e6eaf0;overflow:hidden}
.campaign-donate-cta:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 0,rgba(197,31,45,.08),transparent 34%);pointer-events:none}
.campaign-donate-cta>*{position:relative}
.campaign-donate-cta .donate-label{display:inline-block;color:#b7101d;font-size:.72rem;font-weight:900;letter-spacing:.14em;text-transform:uppercase;margin-bottom:12px}
.campaign-donate-cta h2{font-family:Georgia,serif;font-size:clamp(2.2rem,5vw,4rem);line-height:1;margin:0 0 14px;color:#0b2345}
.campaign-donate-cta p{max-width:680px;margin:0 auto 24px;font-size:1.03rem;color:#596579}
.campaign-donate-cta .big-donate-btn{display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(180deg,#df2a38,#b7101d);color:#fff;text-decoration:none;font-family:Arial Black,Impact,sans-serif;font-size:1.15rem;text-transform:uppercase;padding:17px 38px;border-radius:9px;box-shadow:0 12px 30px rgba(183,16,29,.24);transition:.2s ease;min-width:280px}
.campaign-donate-cta .big-donate-btn:hover{transform:translateY(-3px);box-shadow:0 16px 36px rgba(183,16,29,.3)}
@media(max-width:600px){.campaign-donate-cta{padding:44px 18px}.campaign-donate-cta .big-donate-btn{width:100%;max-width:360px;font-size:1rem;padding:16px 20px}}
`;
document.head.appendChild(donateStyle);

const polishStyle=document.createElement('style');
polishStyle.textContent=`
body{background:#f6f7f9!important}
.wrap{width:min(1180px,calc(100% - 40px))!important}
.content-section,.pledge-section{padding:82px 0!important}
.head{margin-bottom:38px!important}
.head h2{letter-spacing:-.025em!important}
.card,.form,.news-feature,.photo-feature,.event-card{border-radius:14px!important}
.card{box-shadow:0 8px 28px rgba(7,22,45,.07)!important;border-color:#e2e7ed!important}
.card:hover{transform:translateY(-2px);transition:.2s ease;box-shadow:0 14px 34px rgba(7,22,45,.1)!important}
.endorsement-band{padding:52px 0!important}
.endorsement-card{border-radius:14px!important;box-shadow:0 12px 34px rgba(0,0,0,.16)!important}
.news-feature{box-shadow:0 14px 40px rgba(7,22,45,.09)!important}
.form{box-shadow:0 12px 34px rgba(7,22,45,.08)!important;border-color:#e1e6ec!important}
.form input,.form textarea,.form select{border-radius:8px!important;border-color:#cfd7e1!important}
.btn{border-radius:8px!important}
.newsletter-bar{padding:22px 0!important}
footer{padding:44px 0!important}
@media(max-width:700px){.wrap{width:min(100% - 28px,1180px)!important}.content-section,.pledge-section{padding:58px 0!important}}
`;
document.head.appendChild(polishStyle);

const hero=document.querySelector('.hq-hero');
if(hero && !document.querySelector('.campaign-donate-cta')){
  const donate=document.createElement('section');
  donate.className='campaign-donate-cta';
  donate.innerHTML='<span class="donate-label">Grassroots support</span><h2>Help Power the Campaign</h2><p>Your contribution helps cover campaign materials, outreach and organizing across North Vancouver–Lonsdale.</p><a class="big-donate-btn" href="https://gr1qw52tdo.zite.so/" target="_blank" rel="noopener">♡ Donate to the Campaign</a>';
  hero.insertAdjacentElement('afterend',donate);
}

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
(() => {
 const button=document.querySelector('.menu-toggle'),nav=document.querySelector('#primary-nav');
 if(button&&nav){const close=()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open navigation')};
 button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!button.contains(e.target))close()})}
 const year=document.querySelector('#year');if(year)year.textContent=String(new Date().getFullYear());
 document.querySelectorAll('form').forEach(form=>form.addEventListener('submit',event=>{if(!form.checkValidity()){event.preventDefault();form.reportValidity()}}));
})();
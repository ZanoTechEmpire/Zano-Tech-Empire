const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false');});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));
document.querySelectorAll('.order').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();const item=link.dataset.item||'product';const msg=`Hello Zano-Tech Empire, I would like to ask about the price and availability of: ${item}.`;window.open(`https://wa.me/23280737727?text=${encodeURIComponent(msg)}`,'_blank','noopener');}));
document.getElementById('year').textContent=new Date().getFullYear();

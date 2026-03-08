const hbg=document.getElementById('hamburger');
const mmenu=document.getElementById('mobileMenu');
hbg.addEventListener('click',()=>{
  hbg.classList.toggle('open');
  mmenu.classList.toggle('open');
  document.body.style.overflow=mmenu.classList.contains('open')?'hidden':'';
});
mmenu.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click',()=>{
    hbg.classList.remove('open');
    mmenu.classList.remove('open');
    document.body.style.overflow='';
  });
});

// Cursor
const cur=document.getElementById('cur'),ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
(function tick(){
  cur.style.left=mx-4+'px';cur.style.top=my-4+'px';
  rx+=(mx-rx)*.1;ry+=(my-ry)*.1;
  ring.style.left=rx-16+'px';ring.style.top=ry-16+'px';
  requestAnimationFrame(tick);
})();
document.querySelectorAll('a,button,.sk-card,.pr-card,.ex-tab,.td').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.transform='scale(3.5)';ring.style.transform='scale(1.5)';ring.style.opacity='.2';});
  el.addEventListener('mouseleave',()=>{cur.style.transform='scale(1)';ring.style.transform='scale(1)';ring.style.opacity='.45';});
});

// Scroll reveal
const obs=new IntersectionObserver(en=>{en.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show');});},{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>obs.observe(el));

// Nav blur
window.addEventListener('scroll',()=>{
  document.querySelector('nav').style.backdropFilter=window.scrollY>50?'blur(12px)':'none';
});

// Theme switcher
const names={lime:'Lime Green',blue:'Electric Blue',purple:'Purple Violet',cyan:'Cyan Teal'};
const nameEl=document.getElementById('tname');
document.querySelectorAll('.td').forEach(dot=>{
  dot.addEventListener('click',()=>{
    const t=dot.dataset.t;
    document.documentElement.setAttribute('data-theme',t);
    document.querySelectorAll('.td').forEach(d=>d.classList.remove('on'));
    dot.classList.add('on');
    nameEl.textContent=names[t];
  });
});
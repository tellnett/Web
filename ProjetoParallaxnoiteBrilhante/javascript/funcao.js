let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.getElementById('header');
window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px'; 
    mountains_behind.style.top = value * 0.5 + 'px';   
    mountains_front.style.top = value * 0 + 'px'; 
    text.style.marginRight = value * 4 + 'px'; 
    text.style.marginTop = value * 1.5 + 'px';  
    btn.style.marginRight = value * 1.5 + 'px';
    header.style.marginRight = value * 0.5 + 'px';  
})
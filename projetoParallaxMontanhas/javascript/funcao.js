let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let header = document.getElementById('header');
let aventura = document.getElementById('aventura');
let water = document.getElementById('water');

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    text.style.top = 50 + value * -0.2 + '%';
    text.style.fontSize = 20 + value * -0.3 + 'em';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    btn.style.left = value * 1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px'; 
    forest.style.top = value * 0.25 + 'px';
    header.style.top = value * 0.5 + 'px';
    aventura.style.fontSize = 1 + value * 2 + 'px';
    
})
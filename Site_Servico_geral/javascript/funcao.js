window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)

})
/*========= INICIO da API exibir e ocultar faq de perguntas======== */

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click',() =>{
        faq.classList.toggle('open');
        
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className ==='uil uil-plus') {
            icon.className ="uil uil-minus";
        } else{
            icon.className ="uil uil-plus";
        }

    })
})

/*========= INICIO da API do Depoimento dos clientes======== */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints:{
        600: {
            slidesPerView: 2
        }
    }
  });

/*========= INICIO DA API do Menu ======== */
var ul =document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
     } else{
        ul.classList.add('open');
        }
    }

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)

})

// exibir e ocultar faq de perguntas
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

/*========= FIM da API do Depoimento dos clientes======== */


  const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable:true
    },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
            

        
    },    
});

const menuHamburger = document.querySelector('.menu__hamburquer_img')
const menu = document.querySelector('.menu-list')
const menux= document.querySelector('.imagem__x')


menuHamburger.addEventListener('click', (e) => {
    menu.classList.toggle('menu-list-active')
});
const swiperPaginations = document.querySelector('.swiper-pagination');
const headerMenuBtn = document.querySelector('.header-menu-btn');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close-button');

headerMenuBtn.addEventListener('click', () => {
    menu.classList.add('active');
    swiperPaginations.style.display = 'none';
});

closeButton.addEventListener('click', () => {
    menu.classList.remove('active');
    swiperPaginations.style.display = 'block';
});

const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
    effect: 'fade',
});

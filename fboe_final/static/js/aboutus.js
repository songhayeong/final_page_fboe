//<!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  centeredSlides: true,
  // pagination: {
  //   el: '.swiper-wrapper .swiper-slide img',
  //   clickable: true
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.swiper .swiper-prev', // 이전 버튼 선택자
    nextEl: '.swiper .swiper-next' // 다음 버튼 선택자
  }
});


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .7
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})

const toggleBtn=document.querySelector('.nav__button');
const menu= document.querySelector('.nav');
const menu1= document.querySelector('.main__nav');
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  menu1.classList.toggle('active');
});

const sol=document.querySelector('.solution');
const twosol= document.querySelector('.solutions-nav');
const twosol2=document.querySelector('#underline');
const twosol3=document.querySelector('.nav');
sol.addEventListener('click', () =>{
  twosol.classList.toggle('active');
  twosol2.classList.toggle('active');
  twosol3.classList.toggle('active2');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

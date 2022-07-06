// const toggleBtnEl = document.querySelector(".navbar__toogleBtn");
// const menuEl = document.querySelector('.navbar__menu');
// const navbarEl = document.querySelector('.navbar');
//
// toggleBtnEl.addEventListener('click', () => {
//   menuEl.classList.toggle('active')
// })

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


// new Swiper('.awards .swiper-container', {
//   // direction: 'horizontal', // 수평 슬라이드
//   autoplay: true, // 자동 재생 여부
//   loop: true, // 반복 재생 여부
//   spaceBetween: 10, // 슬라이드 사이 여백
//   slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
//   slidesPerGroup: 1, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
//   // navigation: { // 슬라이드 이전/다음 버튼 사용 여부
//   //   prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
//   //   nextEl: '.awards .swiper-next' // 다음 버튼 선택자
//   // }
// })

/**
 * 순서대로 나타나는 기능
 */
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll('.fade-in')
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})

/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})

const spyElss = document.querySelectorAll('.content__item.scroll-spy')
// 요소들 반복 처리!
spyElss.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .99 // 화면의 90% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})

const spyElsss = document.querySelectorAll('.scroll-spy-box.scroll-spy')
// 요소들 반복 처리!
spyElsss.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .9 // 화면의 90% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})


//모바일 하면에서 img p 태크 fade-in 제거
let media = window.matchMedia("screen and (max-width: 426px)")

let imgbgEl = document.querySelector(".imgbg");
let wordEl = document.querySelector(".word");
if (matchMedia("screen and (max-width: 426px)").matches) {
  imgbgEl.classList.remove('fade-in');
  wordEl.classList.remove('fade-in');
}
console.log(matchMedia("screen and (max-width: 426px)").matches);

/**
 * 올해가 몇 년도인지 계산
 */
 const thisYear = document.querySelector('.this-year')
 thisYear.textContent = new Date().getFullYear()

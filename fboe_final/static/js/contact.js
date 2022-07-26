const toggleBtn=document.querySelector('.nav__button');
const menu= document.querySelector('.nav');
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const sol=document.querySelector('.solution');
const twosol= document.querySelector('.solutions');
const twosol2= document.querySelector('.nav');
sol.addEventListener('click', () =>{
  twosol.classList.toggle('active');
  twosol2.classList.toggle('active2');
});

const mapbtn=document.querySelector('.map__btn');
const mapview= document.querySelector('.map');
mapbtn.addEventListener('click', () =>{
    mapbtn.classList.toggle('change');
    mapview.classList.toggle('active');
  });



const spyEls = document.querySelectorAll('div.scroll-spy')
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

var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        // center: new kakao.maps.LatLng(35.56363334596394, 129.32526783531836), // 지도의 중심좌표
        center: new kakao.maps.LatLng(35.56355833911085, 129.32355088760315),
        level: 4, // 지도의 확대 레벨
        // scrollwheel:false
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
var markerPosition  = new kakao.maps.LatLng(35.563442697386925,  129.32253853048218 );
// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


var marker = new kakao.maps.Marker({
    position: markerPosition
});





// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);


var iwContent = '<div class="notranslate" style="padding:5px; width:97%; color:rgb(69, 48, 138); font-weight:bold; ">FBOE<br><hr><p style="font-size:12px; color:#333;">Room 1033, Ulsan Biz Park, 406-21,<br>Jongga-ro, Jung-gu, Ulsan, Republic of Korea</p><a href="https://map.kakao.com/link/map/FBOE,35.563442697386925,  129.32253853048218 " style="color:blue; font-size:13px;" target="_blank">Big Map View</a>&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://map.kakao.com/link/to/FBOE,35.563442697386925,  129.32253853048218 " style="color:blue; font-size:13px;" target="_blank">Get Directions</a></divc>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    content : iwContent,
    removable : iwRemoveable
});

// 마커에 클릭이벤트를 등록합니다
kakao.maps.event.addListener(marker, 'click', function() {
      // 마커 위에 인포윈도우를 표시합니다
    infowindow.open(map, marker);
});


// var markerPosition = marker.getPosition();
// map.relayout();
// map.setCenter(markerPosition);
function resizeMap() {
    var mapContainer = document.getElementById('map');
    mapContainer.style.width = '650px';
    mapContainer.style.height = '650px';
}

function relayout() {

    // 지도를 표시하는 div 크기를 변경한 이후 지도가 정상적으로 표출되지 않을 수도 있습니다
    // 크기를 변경한 이후에는 반드시  map.relayout 함수를 호출해야 합니다
    // window의 resize 이벤트에 의한 크기변경은 map.relayout 함수가 자동으로 호출됩니다
    map.relayout();
}

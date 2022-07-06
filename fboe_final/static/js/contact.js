const toggleBtn=document.querySelector('.nav__button');
const menu= document.querySelector('.nav');
const menu1= document.querySelector('.main__nav');
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menu1.classList.toggle('active');
});

const sol=document.querySelector('.solution');
const twosol= document.querySelector('.solutions-nav');
const twosol2=document.querySelector('#under');
const twosol3=document.querySelector('.nav');
sol.addEventListener('click', () =>{
    twosol.classList.toggle('active');
    twosol2.classList.toggle('active');
    twosol3.classList.toggle('active2');
});

// // var content = document.getElementsByClassName('second__image')[0];
// var content = document.getElementsByClassName('second__write')[0];
// var parent = content.parentNode;
// parent.insertBefore(content, parent.childNodes[2]);

var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(35.56363334596394, 129.32526783531836), // 지도의 중심좌표
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


var iwContent = '<div style="padding:5px; width:96%; color:rgb(69, 48, 138); font-weight:bold;">FBOE<br><hr><p style="font-size:12px;">울산광역시 중구 종가로 406-21 <br>울산비즈파크 1033호</p><a href="https://map.kakao.com/link/map/FBOE,35.563442697386925,  129.32253853048218 " style="color:blue; font-size:13px;" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/FBOE,35.563442697386925,  129.32253853048218 " style="color:blue; font-size:13px;" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
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

closetime = 3 ; //자동으로 close는 되는 시간 설정
$().ready(function () {
    $("#alertStart").click(function () {
        Swal.fire({
            icon: 'success',
            title: 'Alert가 실행되었습니다.',
            text: '이곳은 내용이 나타나는 곳입니다.',
        });
        if (closetime) setTimeout("Swal.close();", closetime*1000);
    });
});

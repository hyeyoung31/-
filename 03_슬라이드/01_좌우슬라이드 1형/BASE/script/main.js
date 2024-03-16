let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;

/*
setInerval(할일,시간);
할일 function(){}
시간 1000 = 1s

0+1%3 1
1+1%3 2
2+1%3 0
*/

// setInterval(function(){
//     let nextIdx = (currentIdx + 1) % slideCount;
//     slideContainer.animate({marginLeft: -1200*nextIdx+'px'});
//     currentIdx = nextIdx;
// },3000);

function autoSlide(){
 setInterval(function(){
    let nextIdx = (currentIdx + 1) % slideCount;
    slideContainer.animate({marginLeft: -1200*nextIdx+'px'});
    currentIdx = nextIdx;
},3000);   
}
autoSlide();

// container 이동시, margin으로 이동. jQuery Animate 함수는 기본적으로 Transform이 작동하지 않음. Transform 속성 jquery animate 함수로 작동시키기 위해 별도의 라이브러리가 필요.
// 실무에서 슬라이드개수가 변경되어도 구조가 틀어지지 않도록, container 너비를 스크립트를 통해 슬라이드 개수를 구해 너비를 늘리는 방식으로 구현할 것!

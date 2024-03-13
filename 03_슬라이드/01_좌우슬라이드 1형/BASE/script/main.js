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
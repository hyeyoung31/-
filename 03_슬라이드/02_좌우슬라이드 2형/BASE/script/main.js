let slideContainer = $('.container'),
    slide = slideContainer.find('.slide'),
    slideCount = slide.length,
    currentIdx = 0;


    // 첫슬라이드 제외하고 슬라이드 다 왼쪽
slide.eq(0).siblings().css({marginLeft:'-1200px'});

function autoSlide(){
 setInterval(function(){
  let nextIdx = (currentIdx + 1) % slideCount;
  slide.eq(currentIdx).animate({marginLeft:'-1200px'});
  slide.eq(nextIdx).animate({marginLeft: '0px'});
  currentIdx = nextIdx;
 },3000);
}
autoSlide();

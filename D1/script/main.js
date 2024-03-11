let mainMenu = $('.main-menu >li');
mainMenu.mouseover(function(){
 $(this).find('ul').stop().slideDown();
})
.mouseout(function(){
 $(this).find('ul').stop().slideUp();

});

// 슬라이드
let slideContainer =  $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIndex = 0;

function autoSlide(){
    setInterval(function(){
        let nextIdx = (currentIndex + 1) % slideCount;
        slideContainer.animate({
            marginTop:-400 * nextIdx + 'px'
        });
        currentIndex = nextIdx;
    },3000);
}
autoSlide();

// 탭
let tabMenu = $('.tabmenu li');
let tabContent = $('.tabcontent > div')
tabMenu.click(function(e){
 e.preventDefault;
 tabMenu.removeClass('active');
 $(this).addClass('active');
 let target = $(this).find('a').attr('href');
 tabContent.removeClass('active');
 $(target).addClass('active');

});

// 팝업
let popupLink = $('#notice li:first');
let popup = $('#popup');
let popupCloseBtn = popup.find('.close');

popupLink.click(function(e){
 e.preventDefault();
 popup.addClass('active');
});

popupCloseBtn.click(function(){
  popup.removeClass('active');
})

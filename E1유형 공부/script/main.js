let mainMenu = $('.main-menu>li');

mainMenu.mouseover(function(){
    $(this).find('ul').stop().slideDown();
})
.mouseout(function(){
  $(this).find('ul').stop().slideUp();
})

// slide

let slideContainer = $('.container'),
    slide = slideContainer.find('.slide'),
    slideCount = slide.length,
    currentIdx =0;

function autoSlide(){
setInterval(function(){
   let nextIdx = (currentIdx + 1) % slideCount;
   slideContainer.animate({
        left: -100 * nextIdx +'%'
    });
    currentIdx = nextIdx;
}, 3000);
}

autoSlide();

let popupLink = $('#notice li:first'),
    popup = $('#popup'),
    popupCloseBtn = popup.find('.close');

popupLink.click(function(e){
    e.preventDefault();
    popup.addClass('active');
});

popupCloseBtn.click(function(){
    popup.removeClass('active');
});
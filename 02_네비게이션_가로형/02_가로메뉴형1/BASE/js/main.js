let mainMenu = $('nav > ul > li');
// this로 받으려면 es6이전버전으로. arrow functio으로 줄일 수 없음.

mainMenu.mouseover(function(){
 $(this).find('ul').stop().slideDown();
}).mouseout(function(){
    $(this).find('ul').stop().slideUp();
})

let mainMenu = $('nav > ul > li');
let subMenu = mainMenu.find('ul');

// mainMenu.mouseover(()=>{
//  subMenu.stop().slideDown();
// })
// .mouseout(()=>{
//   subMenu.stop().slideUp();
// })

mainMenu.hover(
    ()=>{
        subMenu.stop().slideDown();
    },
    ()=>{
        subMenu.stop().slideUp();
    }
)
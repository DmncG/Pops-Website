const $window = $(window);
$window.on('scroll', () => {
    const pos = $window.scrollTop();
    console.log("windowpos", pos)
})

 /* two things I should be able to do: 
 1. When I click on the navbar, it goes directly to the section of the page.
 2. When I am scrolling, the navbar disappears, but when I hover back to the navbar, it reappears
 */

function navScrollHome () {

 $window.scrollTop(0)

 }







 
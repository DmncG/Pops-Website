const $window = $(window);
const $navWrapper = $(".nav-wrapper")
$window.on("scroll", () => {
    const pos = $window.scrollTop();
    console.log("windowpos", pos)
    if(pos < 10 && $(".active")){
        $navWrapper.removeClass("active")
    }
    else if(pos > 10){
        $navWrapper.addClass("active")
    }
})

$navWrapper.mouseover(() => {
    console.log('mouseentered***')
    $navWrapper.removeClass("active")
})
 /* two things I should be able to do: 
 1. When I click on the navbar, it goes directly to the section of the page. **check**
 2. When I am scrolling, the navbar disappears, but when I hover back to the navbar, it reappears 

 Approach:

 on scroll add active
 on hover disable active
 */

 //scrollTop navbar button functions

function navScrollHome () {
 $window.scrollTop(0)
 }

function navScrollProducts () {
    const $products = $(products)
    const productOffset = $products.offset().top
    $window.scrollTop(productOffset)    
}

function navScrollContact () {
    $window.scrollTop($(document).height())
}

//navbar scroll effects






 
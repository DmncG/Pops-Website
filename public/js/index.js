const $window = $(window);
const $navWrapper = $(".nav-wrapper")

$window.on("scroll", () => {
    const pos = $window.scrollTop();
    if(pos < 10 && $(".active")){
        $navWrapper.removeClass("active")
    }
    else{
        $navWrapper.addClass("active")
    }
})

$navWrapper.mouseover(function () {
    $navWrapper.removeClass("active")
    
})

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






 
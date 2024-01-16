$('.burger').click(function () {
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
    $('.bg-menu').toggleClass('active');
})

$('.close').click(function () {
    $('.nav').removeClass('active');
    $('.bg-menu').removeClass('active');

})

$('.servic-btn').click(function () {
    $('.modal-wraper').toggleClass('active');

})

$('.close-servic').click(function () {
    $('.modal-wraper').removeClass('active');

})




function scrollToElem(elem) {
    var targetId = elem.getAttribute("href").substring(1);
    var targetElem = document.getElementById(targetId);


    window.scrollTo({
        top: targetElem.offsetTop,
        behavior: 'smooth'
    });
}

$('#mySlider').owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            cardSlider: 1

        },
        600: {
            cardSlider: 2
        },
        1000: {
            cardSlider: 3

        }
    }
})



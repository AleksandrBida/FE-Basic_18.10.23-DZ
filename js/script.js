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







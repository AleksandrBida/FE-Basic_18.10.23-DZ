$('.burger').click(function () {
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
    $('.bg-menu').toggleClass('active');
})

$('.close').click(function () {
    $('.nav').removeClass('active');
    $('.bg-menu').removeClass('active');

})


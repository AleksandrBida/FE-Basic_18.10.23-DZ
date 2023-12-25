$('.burger').click(function () {
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');

})

$('.close').click(function () {
    $('.nav').removeClass('active');

}) 
$(document).ready(function () {
    $('.main-slider').slick({
        dots: false,
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });
//    slider-news
    $('.silder-news').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-news1',
        
    });
    $('.slider-news1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.silder-news',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        speed: 500,
        arrows: false,
//        prevArrow: '.hot-news .prev',
//        nextArrow: '.hot-news .next',
    });
    $('.media-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.module-content .prev',
        nextArrow: '.module-content .next',
    });
    //back to top
    $(window).scroll(function () {
            if ($(this).scrollTop() > 100)
                $('#goTop').fadeIn();
            else
                $('#goTop').fadeOut();
        });
        $('#goTop').click(function () {
            $('body,html').animate({scrollTop: 0}, 'slow');
        });

});

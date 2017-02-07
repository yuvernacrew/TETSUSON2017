$(function(){
    $('.slick').slick({
    centerMode: true,
    centerPadding: '60px',
    autoplay:true,
    autoplaySpeed:2000,
    slidesToShow: 4,
    dots: false,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });
})
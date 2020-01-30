$(function() {
  $(".reviews--container").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: $('.reviews--slider__prev'),
    prevArrow: $('.reviews--slider__next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $(".portfolio--slider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: $('.portfolio--slider__prev'),
    prevArrow: $('.portfolio--slider__next'),
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nav: false,
          variableWidth: false,
        }
      },
    ]
  });
  $('.hamburger').on('click', function() {
		$('.mobile-menu').toggleClass('visible');
		if($('.mobile-menu').hasClass('visible')) {
			$('.mobile-menu').css({'right':'0', 'transition':'all .2s linear'});
		} else {
			$('.mobile-menu').css({'right':'-200px', 'transition':'all .2s linear'});
		}
  });
  
  if(screen.width < 768) {
    $('.contacts__body--logo.main').appendTo( ".header__body" );
  }
});

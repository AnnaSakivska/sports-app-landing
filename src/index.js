  $('.variable-width').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    nextArrow: '.carousel__button_left',
    prevArrow: '.carousel__button_right',
  });

  new WOW().init();

$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,
    dots: true,
    centerPadding: '10px',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    speed: 500,
    responsive: [
      {
        breakpoint: 1220,
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
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  let navbar = document.querySelector('.nav-menu');
  

    document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    document.querySelector('.line1').classList.toggle('active');
    document.querySelector('.line2').classList.toggle('active');
    document.querySelector('.line3').classList.toggle('active');
  }
  document.querySelector('.nav-menu li').onclick = () => {
    navbar.classList.remove('active');
  }

  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
      return false;
  });
  
     
$(function () {

  const $body = $('body');
  const $menu = $('#js-menu');
  const ua = navigator.userAgent.toLowerCase();

// swiperスライド
  const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  //モバイルメニュー
  class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.container = document.querySelector('#global-container');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle() {
        this.DOM.container.classList.toggle('menu-open');
    }

    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    }
}

new MobileMenu();

  



  function topFirst() {
    var d = new $.Deferred;
    $('.mv-title').animate({
      'opacity': '1',
    }, 1500, function () {
      d.resolve();
    });
    return d.promise();
  }

  function topSecond() {
    $('.index-navi li').css({
      opacity: 0
    }).each(function (i) {
      $(this).delay(500 * i).animate({
        opacity: 1
      }, 1500);
    });
  }

  //slick
  function slickslide() {
    // $('.js-slider').slick({
    //   slidesToShow:  1,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    // });

    $('.js-slider').slick({
      dots: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      centerMode: false,
      responsive: [
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 979,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }


  // anchor link
  function anchorLink() {
    $(document).on('click', 'a[href^="#"]', function (e) {
      e.preventDefault();

      var $el = $(this);
      var $target = $($el.attr('href'));
      var paddingTop = 150;
      if ($(window).width() < 1000) {
        paddingTop = 100;
      }
      if (!$target[0]) {
        return;
      }

      var offset = $target.offset().top;
      $('html, body').animate({
        scrollTop: offset - paddingTop
      });
    });
  }


  $('.js-preciencts-slide1').bxSlider({
    pager: true,
    pagerCustom: '.slide__pager1'
  });

  $('.js-preciencts-slide2').bxSlider({
    pager: true,
    pagerCustom: '.slide__pager2'
  });
  $('.js-preciencts-slide3').bxSlider({
    pager: true,
    pagerCustom: '.slide__pager3'
  });
  $('.js-preciencts-slide7').bxSlider({
    pager: true,
    pagerCustom: '.slide__pager7'
  });
  $('.js-preciencts-slide9').bxSlider({
    pager: true,
    pagerCustom: '.slide__pager9'
  });
  $('.js-preciencts-slide11').bxSlider({
    pager: true,
    pagerCustom: '.slide__pager11'
  });



  function spChildnav() {
    var $childBtn = $('.js-childnav-btn');
    $childBtn.on('click', function (e) {
      e.preventDefault();
      // $(this).next('.menu-child').show();
      if ($('.menu-list li').hasClass('child-open')) {
        $('.menu-list li').removeClass('child-open');
        $(this).next().fadeOut(300);
      } else {
        $(this).parent('li').addClass('child-open');
        $(this).next().fadeIn(300);
      }
    });
  }
  //global navigation

  function navControl() {
    var $menuToggle = $('#js-menuToggle');
    var $bottomMenuToggle = $('#js-menuToggleClose');

    $('#js-menuToggle').on('click', function (e) {
      e.preventDefault();
      if ($menuToggle.hasClass('close')) {
        $menu.fadeOut(300);
      } else {
        $menu.fadeIn(300);
      }
      $menuToggle.toggleClass('close');
      $body.toggleClass('menu-open');
    });

    $('#js-menu, #js-menuToggle, #js-menuToggleClose').on('click', function (e) {
      e.stopPropagation();
    });

  }

  function mouseOver() {
    $('.js-hover').hover(function () {
      $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
    }, function () {
      $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
    });
  }


  function onScroll() {
    $('.l-wrapper').waypoint(function (direction) {
      if (direction === 'down') {
        $('#js-pagetop').fadeIn();
        $('.l-header').addClass('l-header--fixed');
      }
      if (direction === 'up') {
        $('#js-pagetop').fadeOut();
        $('.l-header').removeClass('l-header--fixed');
      }
    }, {
      offset: -80
    });
  }

  function openSubMenu() {

    if ($(window).width() < 1000) {
      $('#js-menu').css('display', 'none');
      $('.gnav-child').css('display', 'none');
      if ($('#js-menuToggle').hasClass('close')) {
        $('#js-menuToggle').removeClass('close');
        $body.removeClass('menu-open');
      }
    } else {
      $('#js-menu').css('display', 'none');
      $('.gnav-child').css('display', 'none');
    }
  }

  function accordion() {
    $('.js-accordion-block').hide();
    $('.js-accordion').on("click", function () {
      if ($(this).next().is(':visible')) {
        $(this).next().slideUp();
        $(this).removeClass('open');

      } else {
        $('.js-accordion-block').slideUp();
        $(this).next().slideDown();
        $('.js-accordion').not($(this)).removeClass('open');
        $(this).addClass('open');
      }
    });
  }


  mouseOver();
  anchorLink();
  navControl();
  onScroll();
  spChildnav();
  accordion();
  slickslide();
  topFirst().then(topSecond);
  tabs();
  urlcopy();




  // fire when page is fully loaded
  $(window).on('load', function () {});
  $(window).on('resize', function () {
  }).trigger('resize');


  //resize
  var currentWidth = window.innerWidth;
  window.addEventListener("resize", function () {
    if (currentWidth == window.innerWidth) {
      // ウインドウ横幅が変わっていないため処理をキャンセル。
      return;
    }
    // ウインドウ横幅が変わったのでリサイズと見なす。
    // 横幅を更新
    currentWidth = window.innerWidth;
    winSize = window.innerWidth;
    openSubMenu();

  });
});

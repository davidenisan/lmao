$('.open-overlay').click(function() {
    $('.open-overlay').css('pointer-events', 'none');
    var overlay_navigation = $('.overlay-navigation'),
      top_bar = $('.bar-top'),
      middle_bar = $('.bar-middle'),
      bottom_bar = $('.bar-bottom');

    overlay_navigation.toggleClass('overlay-active');
    if (overlay_navigation.hasClass('overlay-active')) {

      top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
      middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
      bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
      overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
      overlay_navigation.velocity('transition.slideLeftIn', {
        duration: 300,
        delay: 0,
        begin: function() {
          $('nav ul li').velocity('transition.perspectiveLeftIn', {
            stagger: 150,
            delay: 0,
            complete: function() {
              $('nav ul li a').velocity({
                opacity: [1, 0],
              }, {
                delay: 10,
                duration: 140
              });
              $('.open-overlay').css('pointer-events', 'auto');
            }
          })
        }
      })

    } else {
      $('.open-overlay').css('pointer-events', 'none');
      top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
      middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
      bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
      overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
      $('nav ul li').velocity('transition.perspectiveRightOut', {
        stagger: 150,
        delay: 0,
        complete: function() {
          overlay_navigation.velocity('transition.fadeOut', {
            delay: 0,
            duration: 300,
            complete: function() {
              $('nav ul li a').velocity({
                opacity: [0, 1],
              }, {
                delay: 0,
                duration: 50
              });
              $('.open-overlay').css('pointer-events', 'auto');
            }
          });
        }
      })
    }
  })
  // Change style of navbar on scroll
 window.onscroll = function() {myFunction()};
 function myFunction() {
     var navbar = document.getElementById("myNavbar");
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        myNavbar.style.boxShadow = '0 10px 3px -6px rgba(119, 119, 119, 0.103)';
        myNavbar.style.backgroundColor = 'white';
     } else {
       myNavbar.style.backgroundColor = '#99b99800';
       myNavbar.style.boxShadow = '0 0 0 0  #99b99800';
     }
 }


//  Typing effect
var typed = new Typed('.element', {
  strings: [
    'Web Designers.',
    'Graphic Designers.',
    'Content Creators.',
    'Brand Designers.'
  ],
  stringsElement: null,
  // typing speed
  typeSpeed: 60,
  // time before typing starts
  startDelay: 800,
  // backspacing speed
  backSpeed: 70,
  // time before backspacing
  backDelay: 700,
  // loop
  loop: true,
  // false = infinite
  loopCount: 10,
  // show cursor
  showCursor: false,
  // character for cursor
  cursorChar: "|",
  // attribute to type (null == text)
  attr: null,
  // either html or text
  contentType: 'html',
  // call when done callback function
  callback: function() {},
  // starting callback function before each string
  preStringTyped: function() {},
  //callback for every typed string
  onStringTyped: function() {},
  // callback for reset
  resetCallback: function() {}
});


AOS.init();
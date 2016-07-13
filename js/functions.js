  $(document).ready(function() {
  var pContainerHeight = $('.bird-box').height();

  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    if (wScroll <= pContainerHeight) {

      $('.logo').css({
        'transform' : 'translate(0px, '+ wScroll /2 +'%)'
      });

      $('.back-bird').css({
        'transform' : 'translate(0px, '+ wScroll /4 +'%)'
      });

      $('.fore-bird').css({
        'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
      });

    }



    if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

      $('.clothes-pics figure').each(function(i){

        setTimeout(function(){
          $('.clothes-pics figure').eq(i).addClass('is-showing');
        }, (700 * (Math.exp(i * 0.14))) - 700);
      });

    }

    var largeWindowOffset = $('.large-window').offset().top;

    if(wScroll > largeWindowOffset - $(window).height()){

      $('.large-window').css({'background-position':'center '+ (wScroll - largeWindowOffset) +'px'});

      var opacity = (wScroll - largeWindowOffset + 400) / (wScroll / 5);

      $('.window-dark').css({'opacity': opacity});

    }




    if(wScroll > $('.blog-posts').offset().top - $(window).height()){

      var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

      $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

      $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

    }
  });

  	$('.icon-menu').click(function() {
  		$('.menu').animate({left: '0px'}, 300);
  		$('.icon-menu').animate({left: '285px'}, 300);
  	});

  	$('.icon-close').click(function() {
  		$('.menu').animate({left: '-285px'}, 300);
  		$('.icon-menu').animate({left: '0px'}, 300);
  	});

  	$('.clothes-pics figure').click(function(){
  		$('.large-window').show();
  	});



  });

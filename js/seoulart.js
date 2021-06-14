 
;(function($){
  var seoulart = {
    init:function(){
      this.headerFn();
      this.section2Fn();
      this.section3Fn();
      this.mobileFn();
      this.index3Fn();     
      this.textFn();           
    
    },
    headerFn:function(){
      var $mainBtn = $('#header .main-btn');
      var $goBtn = $('.go-btn');
      var $sub = $('#header .sub');
      var $nav = $('#header #nav');

      $mainBtn.on({
        mouseenter:function(){
          $sub.stop().hide();
          $(this).stop().next().slideDown();
        }
      });
      $nav.on({
      mouseleave:function(){
        $sub.stop().hide();
        }
      });

      $goBtn.on({
        click:function(e){
          e.preventDefault();
          var url = $(this).attr('href');
          window.location.href = "http://oiokoo.dothome.co.kr/art" + url ;          
          url ='';
        }
      })

    },

    section2Fn:function(){
      var $li = $('#section2 ul li');      
      var winW = $(window).innerWidth();
      var fontSize = winW*0.14;
      

      function resizeFn(){
        winW = $(window).innerWidth();
        fontSize = winW*0.14

         $li.css({fontSize:fontSize});
        
      }
      setTimeout(resizeFn,100);
     $(window).resize(function(){
       resizeFn();
      });
    },
    section3Fn:function(){
      var $slide0 = $('.slide0');
      var $slide = $('#section3 .slide');
      var $text = $('#section3 .text');
      var $slideWrap =  $('#section3 .slide-wrap'); 
      var $mousePoint =  $('#section3 .slide-wrap .mouse-point'); 
   
      var $slideview =  $('#section3 .slide-view'); 
      var $wrapW = 0;
      
      var cnt = 0;    
      var $window    = $(window);
      var $winW      = $(window).width();
      var $winH      = $(window).height();
      var tstart = 0;
      var tend = 0;
      var touchYStart = 0;
      var touchYEnd = 0;
      var footOffsetTop = $('#footer').offset().top;
      var footH = $('#footer').innerHeight();
      
          // 푸터탑값구하기 = 푸터오프셋-(창높이-푸터높이)
      var footNewTop =  footOffsetTop + footH;   
      


      function resizeFn(){
        $window    = $(window);
        $winW      = $(window).width();
        $winH      = $(window).height();      
        $slideWrap.css({width:$winW*4,height: $winH});
        $slide.css({width:$winW,height: $winH});
        $wrapW = $slideWrap.innerWidth();


      }
      setTimeout(resizeFn,100);
      resizeFn();
      $(window).resize(function(){
        resizeFn();
      })
         
      $(window).scroll(function(){
        if($(this).scrollTop() > $('#section3').offset().top -200){
          $('#section2').css({backgroundColor:'#000'});
          $slide0.css({backgroundColor:'#000'});
          $text.css({color:'white'});
        }
        else{
          $('#section2').css({backgroundColor:'white'});
          $slide0.css({backgroundColor:'white'});
          $text.css({color:'black'});
        }       
      });

      //메인 슬라이드 
      function touchSlideFn(){
        $slideWrap.stop().animate({left:-($winW*cnt)},500, function(){
          if(cnt>3) {cnt=3}
          if(cnt<0) {cnt=0}  

           $slideWrap.stop().animate({left:-($winW*cnt)},0);
        })
      }

      function nextCountFn(){
        cnt++;
        if(cnt>3){cnt=3}
        touchSlideFn();
      }
    
      function prevCountFn(){
        cnt--;
        if(cnt<0){cnt=0}
        touchSlideFn();
      }
     
      $slideview.on({
       
        mousedown:function(event){
          event.preventDefault();
          tstart = event.pageX;
        },
        touchstart:function(event){
          event.preventDefault();
          tstart = event.originalEvent.changedTouches[0].clientX;

        },
        mouseup:function(event){
          event.preventDefault();
          tend = event.pageX;
          swipeFn();
        },
        touchend:function(event){
          event.preventDefault();
          tend = event.originalEvent.changedTouches[0].clientX;
          swipeFn();
        }
        
      });

      function swipeFn(){
        if(tstart - tend < 0){
          if(!$slideWrap.is('animated')){
            prevCountFn();
          }
        }
        else if(tstart - tend > 0 ){
          if( !$slideWrap.is('.animated')){

            nextCountFn();
          }
        }
      }
         //마우스 휠 이벤트 
                 
     
      //1.메인 슬라이드 
      function mainSlideFn(){        
       
        $slideWrap.stop().animate({left:-(($wrapW*0.08333)*cnt)},500, function(){ 
          console.log('cnt',cnt);
          console.log($wrapW*0.08333);
          if(cnt>=9){
            $('html,body').stop().animate({scrollTop: footNewTop},600);
          }
          if(cnt<=0){           
              $('html,body').stop().animate({scrollTop:$('#section2').offset().top},600);          
          }
        
        });
       
      }
        //2.다음 카운트
        function nextCntSlideFn(){
          cnt++;          
          if(cnt>9){cnt=9}
          mainSlideFn();
        }
        //2-2.이전 카운트
        function prevCntSlideFn(){
          cnt--;         
          if(cnt<0){cnt=0}
          mainSlideFn();
        }

/////////////////////////////////////
      
     
       // 마우스 휠 이벤트 
        
        var delta=0;

        $mousePoint.on('mousewheel DOMMouseScroll', function(e){
          e.preventDefault();         
          if(e.detail){
              delta = e.detail*-40;
          }
          else{
              delta = e.originalEvent.wheelDelta;
          }
         
          if(delta < 0){              
              if( !$slideWrap.is(':animated')){
                nextCntSlideFn();
                   
          }   
        }
          else{              
              if( !$slideWrap.is(':animated')){
                prevCntSlideFn();
                         
          }
        }
      })   
  
    },
    mobileFn:function(){
      var $mobileBtn = $('.mobile-btn');
      var $mobileMenu = $('#modal-mobile-menu');
      var $closeBtn = $('.close-btn');
      var $mainBtn = $('#modal-mobile-menu .main-btn');
      var $sub = $('#modal-mobile-menu .sub');

      $mobileBtn.on({
        click:function(){
          $mobileMenu.addClass('showMenu');
        }
      });

      $closeBtn.on({
        click:function(){
          $mobileMenu.removeClass('showMenu');
        }
      });
      $mainBtn.on({
        click:function(){
          if( $(this).hasClass('showSub') == false){
            $mainBtn.removeClass('showSub');
            $(this).toggleClass('showSub');
            $sub.stop().slideUp(300);
            $(this).next().stop().slideToggle(300);
          }
          else{
            $(this).toggleClass('showSub');
            $(this).next().stop().slideToggle(300);
          }
          
        }
      });
    },
    index3Fn:function(){
      var $listBtn = $('.list-btn');     
      var $listCircle = $('.list-circle');

      $listBtn.each(function(idx){
        $(this).on({
          click:function(){            
            $listCircle.eq(idx).toggleClass('addSub');
            $(this).next().slideToggle();      
                  
          }
        })
      })

    },
     textFn:function(){
      var $text1 = $('#section2 .text1');
      var $text2 = $('#section2 .text2');
      var $text3 = $('#section2 .text3');
      var $section2 = $('#section2').offset().top;
      var txt1L = 0;
      var txt2L = 0;
      var txt3L = 0;

      $(window).scroll(function(){
        if( $(window).innerWidth() > 980 ){
          if($(this).scrollTop() <= $section2-100 ){
            
            txt1L=-($(this).scrollTop()*0.6);
            txt2L= $(this).scrollTop()*0.2;
            txt3L=$(this).scrollTop()*0.5;
          }
          if($(this).scrollTop() > $section2-100 ){
          
            txt1L=-($(this).scrollTop()*0.5);
            txt2L= $(this).scrollTop()*0.1;
            txt3L=$(this).scrollTop()*0.4;
          }
      }
      if( $(window).innerWidth() > 760 ){
        if($(this).scrollTop() <= $section2-100 ){
          
          txt1L=-($(this).scrollTop()*0.2);
          txt2L= $(this).scrollTop()*0.09;
          txt3L=$(this).scrollTop()*0.3;
        }
        if($(this).scrollTop() > $section2-100 ){
          txt1L=-($(this).scrollTop()*0.2);
          txt2L= $(this).scrollTop()*0.09;
          txt3L=$(this).scrollTop()*0.3;
        }
    }
    else {
      if($(this).scrollTop() <= $section2-100 ){
        txt1L=-($(this).scrollTop()*0.07);
        txt2L= $(this).scrollTop()*0.05;
        txt3L=$(this).scrollTop()*0.06;
     }
     if($(this).scrollTop() > $section2-100 ){
        txt1L=-($(this).scrollTop()*0.07);
        txt2L= $(this).scrollTop()*0.05;
        txt3L=$(this).scrollTop()*0.06;
     }
    }
      $text1.css({marginLeft:txt1L});
      $text2.css({marginLeft:txt2L});
      $text3.css({marginLeft:txt3L});

      });
      

    }
  }
  seoulart.init();

})(jQuery);

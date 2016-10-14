window.onload = function() {
    var navBtn = $('#nav-btn');
    navBtn.click(function(){
        $('.nav').toggleClass('nav-show');
    })
// go to top 
        function goTop() {
          $(window).scroll(function(e) {
              // If the distance between scrollbar and top border is more than 100 pix
              if($(window).scrollTop() > 800)
                  $("#go-pg-top").fadeIn().css({ opacity: 0.6 });
              else
                  $("#go-pg-top").fadeOut();
          });
          };  

          $("#go-pg-top").click(function(e) {
              $('body,html').animate({scrollTop:0}, 200);
          });
          $("#go-pg-top").mouseover(function(e) {
              $(this).css({ opacity: 1 });
          });
          $("#go-pg-top").mouseout(function(e) {
              $(this).css({ opacity: 0.6 });
          });
          // Scroll to top
          goTop();
}
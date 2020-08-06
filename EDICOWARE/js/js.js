

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    $(document).ready(function() {
      
      setTimeout(function() {
        $('#ctn-preloader').addClass('loaded');
        // Una vez haya terminado el preloader aparezca el scroll
        $('body').removeClass('no-scroll-y');

        if ($('#ctn-preloader').hasClass('loaded')) {
          // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
          $('#preloader').delay(1000).queue(function() {
            $(this).remove();
          });
        }
      }, 3000);
      
    });


    var t1 = new TimelineMax({paused: true});

    t1.to(".one", 0.8, {
         y: 6,
        
         ease: Expo.easeInOut
    });
    t1.to(".equis-menu", 0.8, {
         y: -6,
         
         ease: Expo.easeInOut,
         delay: -0.8
    });
    t1.to(".nav", 2, {
         top: "0%",
         ease: Expo.easeInOut,
         delay: -2
    });

    t1.staggerFrom(".logo-menu", 1, {y: -200, opacity: 0, ease:Expo.easeOut}, 0.3);

    t1.staggerFrom(".nav a p", 1, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.3);

    t1.reverse();
    $(document).on("click", ".ii", function() {
         t1.reversed(!t1.reversed());
    });
    $(document).on("click", ".equis-menu", function() {
         t1.reversed(!t1.reversed());
    });
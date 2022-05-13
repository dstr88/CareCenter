(function (app) {
  "use strict";

  var Animation = function () {};

  Animation.tl = new TimelineMax({ paused: true });

  Animation.prototype.init = function () {
    Animation.prototype.inView();
  };

  Animation.prototype.inView = function () {
    // $('.header-animated').one('inview', function (event, isInView) {
    //     var _this = $(this);
    //     var animatedChildren = _this.find('.animated-child');
    //     if (isInView) {
    //         if (animatedChildren.length > 0) {
    //             TweenMax.staggerTo(animatedChildren, 0.3, {
    //                 y: 0, x: 0, opacity: 1, delay: 0.1, ease: Power1.easeOut, onComplete: function () {

    //                 }
    //             }, 0.1)
    //         }
    //     }
    // });

    $(".animated").one("inview", function (event, isInView) {
      var _this = $(this);
      var animatedChildren = _this.find(".animated-child");
      if (isInView) {
        if (animatedChildren.length > 0) {
          TweenMax.staggerTo(
            animatedChildren,
            0.4,
            { y: 0, x: 0, opacity: 1, delay: 0.1, ease: Power1.easeOut },
            0.2
          );
        }
      }
    });
  };

  app.Animation = Animation;

  app.ready(function () {
    console.log("Animation Ready");
    Animation.prototype.init();
  });

  app.onLoad(function () {
    console.log("Animation Load");
  });
})(window.app);

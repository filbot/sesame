/*
 * fastClick
 * https://github.com/ahultgren/jquery.fastClick
 *
 * Copyright (c) 2013 Andreas Hultgren
 * Licensed under the MIT, GPL licenses.
 */

(function($) {
  var click = function (callback) {
        var that = $(this);

        that.on('click', function(e){
          callback.call(that, e);
        });
      },
      touch = function (callback) {
        var that = $(this),
          startx, starty, endx, endy;
        
        startx = starty = endx = endy = 0;

        that.on('touchstart', function(e){
          var touches = e.originalEvent.touches;

          if( touches.length === 1 ){
            startx = endx = touches[0].pageX;
            starty = endy = touches[0].pageY;
          }
        })
        .on('touchmove', function(e){
          var touches = e.originalEvent.touches;

          endx = touches[0].pageX;
          endy = touches[0].pageY;
        })
        .on('touchend', function(e){
          var diffx = Math.abs(endx - startx),
            diffy = Math.abs(endy - starty);

          if( startx && starty && diffx < 10 && diffy < 10 ){
            this.pageX = startx;
            this.pageY = starty;

            callback.call(this, e);
          }

          startx = starty = endx = endy = 0;
        })
        .on('click', function(e){
          e.preventDefault();
        });
      },
      clickEvent = (!!('ontouchstart' in window) || !!('onmsgesturechange' in window)) && touch || click;
  

  $.fn.fastClick = function (callback) {
    return this.each(function () {
      clickEvent.call(this, callback);
    });
  };
 }(jQuery));
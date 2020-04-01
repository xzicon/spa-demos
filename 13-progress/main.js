$(function(){
  var $progress = $('progress');
  var $start = $('.start');
  var $pause = $('.pause');
  var $reset = $('.reset');
  var timer,n = 0;

  $start.click(function(){
    timer = window.setInterval(function(){
      $progress.val(++n);
    },100);
  });
  $pause.click(function(){
    window.clearInterval(timer);
  });
  $reset.click(function(){
    $progress.val(0);
  });

});


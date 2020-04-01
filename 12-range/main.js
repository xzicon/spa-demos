$(function(){
  var $range = $('input[type="range"]');
  var $txtAge = $('#age');

  $range.on('input',function(){
    $txtAge.text($range.val());
  });
});

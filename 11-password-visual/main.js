$(function(){
  var $pwd = $('input[type="password"]');
  var $span = $('span img');

  $span.mouseover(function(){
    $span.attr('src','images/pwdulook.png');
    $pwd.attr('type','text');
  });

  $span.mouseout(function(){
    $span.attr('src','images/pwdlook.png');
    $pwd.attr('type','password');
  });
});

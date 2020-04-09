var $dlgGoto= (function() { 
 var html=''
  +'<div class="note">'
      +'<div class="dialogbox">'
        +'<div class="titlebar">'
         +'<p class="title">跳转到指定行</p>'
         +'<span class="close-btn">X</span>'
        +'</div>'
        +'<div class="main">'
         +'<label>行号:</label>'
          +'<br>'
          +'<input class="text-line-num" type="text"/>'
         +'<input class="goto" type="button" value="转到"/>'
          +'<input class="quxiao" type="button" value="取消"/>'
       + '</div>'
      +'</div>'
    +'</div>',
    $dlg=$(html),
    cfg = {
      container:'body',
      num:  6,
      title: 'agree',
      onClick: null
    };
function show(conf){
  $(cfg.container).append($dlg);
  $.extend(cfg,conf);
  num:cfg.num;
      $btn.click(cfg.onClick);
}

  return {show:show};
}());

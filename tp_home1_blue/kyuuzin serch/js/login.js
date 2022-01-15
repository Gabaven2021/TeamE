$( ".input" ).focusin(function() {
    $( this ).find( "span" ).animate({"opacity":"0"}, 200);
  });
  
  $( ".input" ).focusout(function() {
    $( this ).find( "span" ).animate({"opacity":"1"}, 300);
  });
  
  $(".login").submit(function(){
    $(this).find(".submit i").removeAttr('class').addClass("fa fa-check").css({"color":"#fff"});
    $(".submit").css({"background":"#2ecc71", "border-color":"#2ecc71"});
    $(".feedback").show().animate({"opacity":"1", "bottom":"-80px"}, 400);
    $("input").css({"border-color":"#2ecc71"});
    return false;
  });



  /*画像アップロード*/
  $(function() {
    $('input[type=file]').after('<span></span>');
  
    // アップロードするファイルを選択
    $('input[type=file]').change(function() {
      var file = $(this).prop('files')[0];
  
      // 画像以外は処理を停止
      if (! file.type.match('image.*')) {
        // クリア
        $(this).val('');
        $('span').html('');
        return;
      }
  
      // 画像表示
      var reader = new FileReader();
      reader.onload = function() {
        var img_src = $('<img>').attr('src', reader.result);
        $('span').html(img_src);
      }
      reader.readAsDataURL(file);
    });
  });
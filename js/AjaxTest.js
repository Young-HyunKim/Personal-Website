$(document).ready(function() {
    
    $.ajax({
        url: "http://younghyun.kr/php/JSON_Select.php",
        dataType: 'jsonp',
        success: function(data) {
          console.log('성공 - ', data);
        },
        error: function(xhr) {
          console.log('실패 - ', xhr);
        }
      });

});



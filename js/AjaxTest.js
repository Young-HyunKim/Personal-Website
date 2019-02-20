$(document).ready(function() {

    jQuery.ajax({

          type:"GET",

          url:"http://younghyun.kr/php/JSON_Select.php",

          dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨

          success : function(data) {

            $.each(data, function() {

                console.log(data.Date);
            
            });
           

          },

          complete : function(data) {


          },

          error : function(xhr, status, error) {

                alert("에러발생");

          }

    });

});



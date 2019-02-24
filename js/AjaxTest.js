$(document).ready(function() {
    
  $.ajax({
    url: "http://younghyun.kr/php/JSONP_Select.php",
    dataType: 'jsonp',
    success: function (data) {
      console.log('성공 - ', data);
      console.log(data.Date);
    },
    error: function (xhr) {
      console.log('실패 - ', xhr);
      console.log(xhr.Date);
    }
  });


  $.ajax({

    type:"POST",
    
    url : "http://younghyun.kr/php/JSON_Select.php",
    
    data : "ref=",
    
    dataType : "jsonp",
    
    jsonpCallback : "myCallback",
    
    success: function(data) {
    
    console.log('성공');
    
    
    if(data != null)    {
    
      console.log(data);
    
    }
    
    },
    
    error: function(xhr) {
    
     console.log('실패', xhr);
    
    }
    
    });
    
    
    
});



$(document).ready(function () {
    var a = new Array();
    Initialization();

    function Initialization(){
        for (let index = 0; index < 6; index++) {
            a[index] = "";
            console.log(index);
        }
    }

    function Color(){

        $('#a'+ 0 +'_value').css('background','#e53935');
        $('#a'+ 1 +'_value').css('background','#ffb74d');
        $('#a'+ 2 +'_value').css('background','#ffee58');
        $('#a'+ 3 +'_value').css('background','#b2ff59');
        $('#a'+ 4 +'_value').css('background','#40c4ff');
        $('#a'+ 5 +'_value').css('background','#7c4dff');
        
    }
    

    $('#value_insert').on('click', function () {
        
        for (let index = 0; index < a.length; index++) {
              a[index] = $('#a'+ index +'_input').val();
            
        }

        for (let index = 0; index < a.length; index++) {
            a[index] = $('#a'+ index +'_input').val();
            
            $('#a'+ index +'_value').text("A["+ index +"] = "+a[index]);
            
            console.log("A["+[index]+"]" + "=" + a[index]);
        }

        Color();
        
    });

    $('#value_initialization').on('click', function () {
        
        Initialization();
        for (let index = 0; index < a.length; index++) {
            $('#a'+ index +'_value').css('background','#fff');
            $('#a'+ index +'_value').text("A["+ index +"]");
        }

    });
});


$(document).ready(function () {
    var a = new Array();
    Initialization();

    function Initialization(){
        for (let index = 0; index < 6; index++) {
            a[index] = "";
            console.log(index);
        }
    }

    function Color(i){
        switch (i) {
            case 0:
                $('#a'+ 0 +'_value').css('background','#e53935');
                break;
                
            case 1:
                $('#a'+ 1 +'_value').css('background','#ffb74d');
                break;
            
            case 2:
                $('#a'+ 2 +'_value').css('background','#ffee58');
                break;

            case 3:
                $('#a'+ 3 +'_value').css('background','#b2ff59');
                break;

            case 4:
                $('#a'+ 4 +'_value').css('background','#40c4ff');
                break;
            
            case 5:
                $('#a'+ 5 +'_value').css('background','#7c4dff');
                break;
        }

    }
    

    $('#value_insert').on('click', function () {
        
        for (let index = 0; index < a.length; index++) {
              a[index] = $('#a'+ index +'_input').val();
            
        }

        for (let index = 0; index < a.length; index++) {
            a[index] = $('#a'+ index +'_input').val();
            
            if ( "" == a[index] ) {
                
            }else{
                $('#a'+ index +'_value').text("A["+ index +"] = "+a[index]);
                Color(index);
            }
            

            console.log("A["+[index]+"]" + "=" + a[index]);
        }

        
        
    });

    $('#value_initialization').on('click', function () {
        
        Initialization();
        for (let index = 0; index < a.length; index++) {
            $('#a'+ index +'_value').css('background','#fff');
            $('#a'+ index +'_value').text("A["+ index +"]");
        }

    });
});


$(document).ready(function () {
    var a = new Array();
    Initialization("a");

    function Initialization(){
        for (let index = 0; index < 6; index++) {
            if(ArrayName = "a"){
                a[index] = "";
            }else{
                ac[index] = "";
            }
            console.log(index);
        }
    }

    function Color(i,ArrayName){
        if (ArrayName == "a") {
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

        }else{
            switch (i) {
                case 0:
                    $('#ac'+ 0 +'_value').css('background','#e53935');
                    break;
                    
                case 1:
                    $('#ac'+ 1 +'_value').css('background','#ffb74d');
                    break;
                
                case 2:
                    $('#ac'+ 2 +'_value').css('background','#ffee58');
                    break;
    
                case 3:
                    $('#ac'+ 3 +'_value').css('background','#b2ff59');
                    break;
    
                case 4:
                    $('#ac'+ 4 +'_value').css('background','#40c4ff');
                    break;
                
                case 5:
                    $('#ac'+ 5 +'_value').css('background','#7c4dff');
                    break;
            }
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
                Color(index,"a");
            }
            

            console.log("A["+[index]+"]" + "=" + a[index]);
        }

    });

    $('#value_initialization').on('click', function () {
        
        Initialization("a");
        for (let index = 0; index < a.length; index++) {
            $('#a'+ index +'_value').css('background','#fff');
            $('#a'+ index +'_value').text("A["+ index +"]");
        }

    });

    $('#Copy_Array').on('click', function () {
        var Count = 0;
        var AC = new Array();

        AC = a.slice();
        console.log(a.slice());

        for (let index = 0; index < AC.length; index++) {
            if("" == a[index]){
                Count+= 1;
            }

            if (Count == a.length) {
                console.log(Count);
                alert("배열 A에 값을 입력해주세요.");

            }else{
                if ( "" == a[index] ) {
                
                }else{
                    $('#ac'+ index +'_value').text("AC["+ index +"] = "+a[index]);
                    Color(index,"ac");
                }
                console.log("AC[index] : "+AC[index]);
                console.log(index);
            }
                
                
        }

        

    });

    $('#Remove_Array').on('click', function () {
        Initialization("ac");
        for (let index = 0; index < a.length; index++) {
            $('#ac'+ index +'_value').css('background','#fff');
            $('#ac'+ index +'_value').text("AC["+ index +"]");
        }
    });

});


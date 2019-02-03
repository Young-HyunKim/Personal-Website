$(document).ready(function () {
    var Today = new Date;
    var ColorCode = "";

    ColorCode = Today.getHours();
    console.log(ColorCode);

    SetBackgroundColor();

    function SetBackgroundColor(){
        
        if ( 0 <= ColorCode && ColorCode <= 6 ) {
            console.log(1);
            $('#ScreenColor').css('background','#1976d2');
        } else if( 7 <= ColorCode && ColorCode <= 12 ) {
            console.log(2);
            $('#ScreenColor').css('background','#64b5f6');
        } else if( 13 <= ColorCode && ColorCode <= 18 ) {
            console.log(3);
            $('#ScreenColor').css('background','#ffa000');
        } else if( 19 <= ColorCode && ColorCode <= 23 ){
            console.log(4);
            $('#ScreenColor').css('background','#1a237e');
        }

    }


});

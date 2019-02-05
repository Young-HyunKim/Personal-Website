$(document).ready(function () {
    var Today = new Date();
    var ColorCode = "";
    var NowTime = "";

    
    ColorCode = Today.getHours();

    setInterval(SetTime,1000);

    function SetTime(){
        var NT = new Date();
        NowTime = NT.getHours() + " : " + NT.getMinutes() + " : " + NT.getSeconds();

        $("#Clock").text(NowTime);

        console.log(NowTime);
    }

    console.log(ColorCode);

    SetBackgroundColor();

    function SetBackgroundColor(){
        
        if ( 0 <= ColorCode && ColorCode <= 2 ) {
            console.log(1);
            $('#ScreenColor').css('background','#1a237e');
        } else if( 3 <= ColorCode && ColorCode <= 5 ) {
            console.log(2);
            $('#ScreenColor').css('background','#283593');
        } else if( 6 <= ColorCode && ColorCode <= 8 ) {
            console.log(3);
            $('#ScreenColor').css('background','#303f9f');
        } else if( 9 <= ColorCode && ColorCode <= 11 ){
            console.log(4);
            $('#ScreenColor').css('background','#2196f3');
        } else if( 12 <= ColorCode && ColorCode <= 14 ){
            console.log(5);
            $('#ScreenColor').css('background','#8c9eff');
        } else if( 15 <= ColorCode && ColorCode <= 17 ){
            console.log(6);
            $('#ScreenColor').css('background','#f06292');
        } else if( 18 <= ColorCode && ColorCode <= 20 ){
            console.log(7);
            $('#ScreenColor').css('background','#e91e63');
        } else if( 21 <= ColorCode && ColorCode <= 23  ){
            console.log(8);
            $('#ScreenColor').css('background','#6a1b9a');
        }

    }


});

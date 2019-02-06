$(document).ready(function () {
    var Today = new Date();
    var ColorCode = "";
    var NowTime = "";

    SetTime();
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
            //$('#ScreenColor').css('background','#1a237e');
            $('#ScreenColor').css('background','linear-gradient(to left, #1a237e, #283593, #303f9f, #3949ab, #3f51b5)');
        } else if( 3 <= ColorCode && ColorCode <= 5 ) {
            console.log(2);
            //$('#ScreenColor').css('background','#283593');
            $('#ScreenColor').css('background','linear-gradient(to left, #0d47a1, #1565c0, #1976d2, #1e88e5, #2196f3)');
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
            //$('#ScreenColor').css('background','#9c27b0');
            $('#ScreenColor').css('background','linear-gradient(to left, #4a148c, #6a1b9a, #7b1fa2, #8e24aa,#9c27b0)');
        }

    }


});

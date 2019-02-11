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
            console.log("0시 ~ 2시");
            //$('#ScreenColor').css('background','#1a237e');
            $('#ScreenColor').css('background','linear-gradient(to left, #1a237e, #283593, #303f9f, #3949ab, #3f51b5)');
        } else if( 3 <= ColorCode && ColorCode <= 5 ) {
            console.log("3시 ~ 5시");
            $('#ScreenColor').css('background','linear-gradient(to left, #0d47a1, #1565c0, #1976d2, #1e88e5, #2196f3)');
        } else if( 6 <= ColorCode && ColorCode <= 8 ) {
            console.log("6시 ~ 8시");
            $('#ScreenColor').css('background','linear-gradient(to left, #03a9f4, #29b6f6, #4fc3f7, #81d4fa, #b3e5fc)');
        } else if( 9 <= ColorCode && ColorCode <= 11 ){
            console.log("9시 ~ 11시");
            $('#ScreenColor').css('background','linear-gradient(to left, #01579b, #0277bd, #0288d1, #039be5, #03a9f4)');
        } else if( 12 <= ColorCode && ColorCode <= 14 ){
            console.log("12시 ~ 14시");
            $('#ScreenColor').css('background','linear-gradient(to left, #01579b, #0277bd, #0288d1, #039be5, #03a9f4)');
        } else if( 15 <= ColorCode && ColorCode <= 17 ){
            console.log("15시 ~ 17시");
            $('#ScreenColor').css('background','linear-gradient(to left, #ffc107, #ffb300, #ffa000, #ff8f00, #ff6f00)');
        } else if( 18 <= ColorCode && ColorCode <= 20 ){
            console.log("18시 ~ 20시");
            $('#ScreenColor').css('background','linear-gradient(to left, #880e4f, #ad1457, #c2185b, #d81b60, #e91e63)');

        } else if( 21 <= ColorCode && ColorCode <= 23  ){
            console.log("21시 ~ 23시");
            $('#ScreenColor').css('background','linear-gradient(to left, #4a148c, #6a1b9a, #7b1fa2, #8e24aa,#9c27b0)');
        }

    }


});

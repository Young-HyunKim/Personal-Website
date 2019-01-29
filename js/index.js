$(document).ready(function () {
    var Today = new Date;
    var ColorCode = "";

    ColorCode = Today.getHours();
    console.log(ColorCode);

    SetBackgroundColor();

    function SetBackgroundColor(){
        
        if (0<= Today <=6) {
            ColorCode = "#1976d2";
        } else if(7<= Today <=12) {
            ColorCode = "#64b5f6";
        } else if(13<= Today <=18) {
            ColorCode = "#ffa000";
        } else if(19<= Today <=23){
            ColorCode = "#1a237e";
        }

    }


});

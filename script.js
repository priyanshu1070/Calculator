const display = document.getElementById("display");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num7");
const num9 = document.getElementById("num9");
const plus = document.getElementById("+");
const clear = document.getElementById("clear");
display.disabled=true;
function addToDisplay(n){
    display.value+=n;
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value=error;
    }
}
function clean(){
    display.value='';
}


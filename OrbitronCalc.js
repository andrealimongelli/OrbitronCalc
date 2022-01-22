
var mem = 0.00;

function bin() {
    cal.display.value = (parseInt(cal.display.value).toString(2));
}
function ter() {
    cal.display.value = (parseInt(cal.display.value).toString(3));
}
function oct() {
    cal.display.value = (parseInt(cal.display.value).toString(8));
}
function dec() {
    cal.display.value = (parseInt(cal.display.value).toString(10));
}
function hex() {
    cal.display.value = (parseInt(cal.display.value).toString(16));
}
function sq() {
    cal.display.value = Math.sqrt(cal.display.value);
}
function sin() {
    zero();
    cal.display.value = Math.sin(cal.display.value);
}
function cos() {
    zero();
    cal.display.value = Math.cos(cal.display.value);
}
function tan() {
    zero();
    cal.display.value = Math.tan(cal.display.value);
}
function lg() {
    zero();
    cal.display.value = Math.log(cal.display.value);
}
function factorial(n) {
    zero();
    if ((cal.display.value) % 1 === 0) {
        var ansfact = 1;
        for (var i = 2; i <= n; i++)
            ansfact = ansfact * i;
        cal.display.value = ansfact;
    } else {
        cal.display.value = 'not an integer ';
    }
}
function back() {
    var ansback = cal.display.value.slice(0, cal.display.value.length - 1);
    cal.display.value = ansback;
}
function mplus() {
    zero();
    mem += eval(cal.display.value);
    cal.display.value = '';
}
function mminus() {
    zero();
    mem -= eval(cal.display.value);
    cal.display.value = '';
}
function mr() {
    zero();
    cal.display.value += eval(mem);

}
function mc() {
    zero();
    mem = 0.00;
}
function zero() {
    while (cal.display.value[0] == 0) {
        cal.display.value = cal.display.value.substring(1);
    }
}
function calc() {
    zero();
    cal.display.value = Math.floor(((parseFloat(eval(cal.display.value))).toFixed(14)) * 100000000000000) / 100000000000000;
}
function openwindow() {
    var newwindow = window.open();
    newwindow.document.write("<!DOCTYPE html>  <title>OrbitronCalc Manual</title> <button style=\"border-color:red; color:black; border-radius: 5px;\" onclick = 'window.close()' > X </button > <br><br><br>");
    newwindow.document.write("<div>");
    newwindow.document.write("<style> div {width: 100%;  height: 100%;  min-height: 100px;   font-size: 1.40em;  display: inline;} </style>");
    newwindow.document.write("<input type=\"reset\" value = \"AC\" <p> All clear</p> ");
    newwindow.document.write("<input type=\"reset\" value = \"CE\" <p> Clear last entry</p>");
    newwindow.document.write("<input type=\"reset\" value = \"M+\" <p> Memory plus</p>");
    newwindow.document.write("<input type=\"reset\" value = \"M-\" <p> Memory minus</p>");
    newwindow.document.write("<input type=\"reset\" value = \"MR\" <p> Memory recall</p>");
    newwindow.document.write("<input type=\"reset\" value = \"MC\" <p> Memory clear</p>");
    newwindow.document.write("<input type=\"reset\" value = \"%\" <p> Ex. 100 % 5 = 5</p>");
    newwindow.document.write("<input type=\"reset\" value = \"√\" <p> Ex. 25 √ = 5</p>");
    newwindow.document.write("<input type=\"reset\" value = \"x^y\" <p> Ex. 2 x^y 3 = 8</p>");
    newwindow.document.write("<input type=\"reset\" value = \"n!\" <p> Ex. 5 n! = 120 </p>");
    newwindow.document.write("<input type=\"reset\" value = \"MOD\" <p> Ex. 3 MOD 2 = 1</p>");
    newwindow.document.write("<button style=\"background-color: #5c5af1; border-color:blue; color:white; margin:auto; display:block; font-size: 1.0em; border-radius: 5px;\" onclick = \"window.open('https://github.com/andrealimongelli')\" > https://github.com/andrealimongelli</button > <br>");
    newwindow.document.write("<\div>");
}
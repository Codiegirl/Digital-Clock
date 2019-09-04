function clock(){
var fullDate = new Date();
var hours = fullDate.getHours();
var mins = fullDate.getMinutes();
var secs = fullDate.getSeconds();

if(hours<=9){
    hours = "0" + hours
}
if(mins<=9){
    mins = "0" + mins
}
if(secs<=9){
    secs = "0" + secs
}

document.getElementById('hour').innerHTML = hours +":";
document.getElementById('minute').innerHTML = mins + ":";
document.getElementById('second').innerHTML = secs;
}

setInterval(clock, 100);

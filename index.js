var sbox = document.getElementById("sbox");
sbox.addEventListener("keyup", function(event) {
if (event.key === "Enter") {
var city = sbox.value;
console.log(city);
check_weather(city);
}
});

var sicon= document.getElementById("sicon");
sicon.addEventListener('click',function(){
    var city =document.getElementById("sbox").value;
    check_weather(city);
    console.log(city);}
)
function check_weather(city){
    link= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7adbbc078d8723b614d8f3e2a810d8c1`;
var request=new XMLHttpRequest();
request.open('GET',link,true);
request.onload=function() {
    if (request.status >= 200 && request.status < 400) {
        var obj=JSON.parse(this.response);
        console.log(obj);
}
else {
    console.error('Error:', request.statusText);
    alert("city not found");
}
document.getElementById("city").innerHTML=obj.name;
document.getElementById("temp").innerHTML=Math.round(obj.main.temp-273.15 )+"°C";
document.getElementById("humidity%").innerHTML=obj.main.humidity+" %";
document.getElementById("windspeed").innerHTML=obj.wind.speed+" km/hr";
if(obj.weather[0].main=="Clouds"){
    wicon.src="/clouds.png"
}
if(obj.weather[0].main=="Clear"){
    wicon.src="/clear.png"
}
if(obj.weather[0].main=="Drizzle"){
    wicon.src="/drizzle.png"}
if(obj.weather[0].main=="Mist"){
    wicon.src="/mist.png"}
if(obj.weather[0].main=="Rain"){
    wicon.src="/rain.png"}
if(obj.weather[0].main=="Snow"){
    wicon.src="/snow.png"} 
}
request.send();
}
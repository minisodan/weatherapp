const request = require("request")
const dotenv = require("dotenv").config()

const address = "minneapolis,us"

const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=Imperial&appid=d304d92c68ead1f4d0b345644f82db60`


var Geo={};
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(success,error);
}
else {
alert('Geolocation is not supported');
}
function error() {
     alert("That's weird! We couldn't find you!");
     }

function success(position) {
          Geo.lat = position.coords.latitude;
          Geo.lng = position.coords.longitude;
}

if (!address) {
     console.log("please enter name of city")
}
request(url, (error, response, body) => {
const data = JSON.parse(body)
console.log (`its's currently ${data.main.temp}°F`) 
console.log (`${data.main.temp_max}°F`) 
console.log (`${data.main.temp_min}°F`) 
console.log (data.sys.sunset) 
console.log (data.sys.sunrise) 
console.log (data.name) 
document.getElementById("content").innerHTML = data.main.temp;
document.getElementById("location").innerHTML = data.name;
document.getElementById("max").innerHTML= (` ${data.main.temp_min} / ${data.main.temp_max}`)

})
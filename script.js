const apiKey = "6ef269b28c70e337d63132561e38e899";

function getWeather() {

    const city = document.getElementById("cityInput").value;

    if(city===""){
        alert("Enter city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {

        document.getElementById("city").innerHTML =
        `${data.name}, ${data.sys.country}`;

        document.getElementById("temp").innerHTML =
        `${Math.round(data.main.temp)}°C`;

        document.getElementById("condition").innerHTML =
        data.weather[0].main;

        document.getElementById("humidity").innerHTML =
        data.main.humidity + "%";

        document.getElementById("wind").innerHTML =
        data.wind.speed + " km/h";

        const lat = data.coord.lat;
        const lon = data.coord.lon;

        getAQI(lat, lon);

        changeImage(data.weather[0].main);

    })
    .catch(()=>{
        alert("City not found");
    });
}

function getAQI(lat, lon){

fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
.then(res=>res.json())
.then(data=>{

let aqiText="";

switch(data.list[0].main.aqi){

case 1:
aqiText="Good";
break;

case 2:
aqiText="Fair";
break;

case 3:
aqiText="Moderate";
break;

case 4:
aqiText="Poor";
break;

case 5:
aqiText="Very Poor";
break;

}

document.getElementById("aqi").innerHTML = aqiText;

});

}

function changeImage(weather){

const img=document.getElementById("weatherImage");

if(weather==="Rain" || weather==="Drizzle"){

img.src =
"https://cdn-icons-png.flaticon.com/512/3351/3351979.png";

}
else if(weather==="Clouds"){

img.src =
"https://cdn-icons-png.flaticon.com/512/414/414825.png";

}
else if(weather==="Clear"){

img.src =
"https://cdn-icons-png.flaticon.com/512/869/869869.png";

}
else{

img.src =
"https://cdn-icons-png.flaticon.com/512/1146/1146869.png";

}

}

setInterval(()=>{

const now=new Date();

document.getElementById("time").innerHTML =
now.toLocaleTimeString();

},1000);
if(aqi===1){
aqiText="Good 🟢";
}
else if(aqi===2){
aqiText="Fair 🟡";
}
else if(aqi===3){
aqiText="Moderate 🟠";
}
else{
aqiText="Poor 🔴";
}

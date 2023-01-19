function fDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
        if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
    let day = days[date.getDay()];
     
return `${day} ${hours}:${minutes}`;
}

function temperatureNow(response){
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");

celsiusTemperature = response.data.main.temp;

temperatureElement.innerHTML = Math.round(celsiusTemperature);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = fDate(response.data.dt * 1000);
iconElement.setAttribute(
    "src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
);

}

function allCity(city) {
let apiKey = "0d433b84a5fd6bae98118c5f85896fad";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(temperatureNow);
}

function search(event) {
    event.preventDefault();
    let cityInpElement = document.querySelector("#city-input");
    allCity(cityInpElement.value)
}

function showFahrenheitTemperature(event) {
    event.preventDefault();
     let temperatureElement = document.querySelector("#temperature");
        celsiusLink.classList.remove("active");
        fahrenheitLink.classList.add("active");
    let fahrenheiTemp = (celsiusTemperature * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheiTemp);
}

function showCelsiusTemperature(event) {
    event.preventDefault();
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

allCity("New York");


let form = document.querySelector("#search-form");
addEventListener("submit", search);

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", showFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", showCelsiusTemperature);


// function dateTime() {
//         let now = new Date();
//         let day = now.getDay();
//         let days = [
//             "Sunday",
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday",
//             "Saturday"
//         ];
//         let dayMonth = now.getDate();
//         let month = now.getMonth();
//         let months = [
//             "Jan",
//             "Feb",
//             "Mar",
//             "Apr",
//             "May",
//             "Jun",
//             "Jul",
//             "Aug",
//             "Sep",
//             "Oct",
//             "Nov",
//             "Dec"
//         ];
//         let hour = now.getHours();
//         if (hour < 10) {
//             hour = `0${hour}`;
//         }

//         let minutes = now.getMinutes();
//         if (minutes < 10) {
//             minutes = `0${minutes}`;
//         }
//         let appDate = `${days[day]}, ${dayMonth}. ${months[month]}  ${hour}:${minutes}`;
//         let currentDate = document.querySelector("li");
//         currentDate.innerHTML = appDate;
//     }
//     dateTime();



//     function cityName(event) {
//             event.preventDefault();
//             let cityDisplay = document.querySelector("#search-city");
//             let currentCity = document.querySelector("#city");
//             if (cityDisplay.value) {
//                 currentCity.innerHTML = cityDisplay.value;
//             } else {
//                 currentCity.innerHTML = null;
//                 alert("Please type a city");
//                 currentCity.innerHTML = "Nowhere";
//             }
//         }
//         let city = document.querySelector("#add-city");
//         city.addEventListener("submit", cityName);


//  let searchCityFrom = document.querySelector("#search");

  
 
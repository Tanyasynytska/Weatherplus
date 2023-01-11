function dateTime() {
        let now = new Date();
        let day = now.getDay();
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        let dayMonth = now.getDate();
        let month = now.getMonth();
        let months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        let hour = now.getHours();
        if (hour < 10) {
            hour = `0${hour}`;
        }

        let minutes = now.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        let appDate = `${days[day]}, ${dayMonth}. ${months[month]}  ${hour}:${minutes}`;
        let currentDate = document.querySelector("li");
        currentDate.innerHTML = appDate;
    }
    dateTime();



    function cityName(event) {
            event.preventDefault();
            let cityDisplay = document.querySelector("#search-city");
            let currentCity = document.querySelector("#city");
            if (cityDisplay.value) {
                currentCity.innerHTML = cityDisplay.value;
            } else {
                currentCity.innerHTML = null;
                alert("Please type a city");
                currentCity.innerHTML = "Nowhere";
            }
        }
        let city = document.querySelector("#add-city");
        city.addEventListener("submit", cityName);


 let searchCityFrom = document.querySelector("#search");
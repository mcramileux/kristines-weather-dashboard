function searchCity() {
    var searchCity = document.querySelector("#cityName").value
    var apiKey = "1874cb6ef3fe4f96e520929bdea63f63"
    var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=1874cb6ef3fe4f96e520929bdea63f63&units=metric"
    fetch(currentWeatherUrl)
        .then(function (res) {
            return res.json(
            )
        })
        .then(function (data) {
            console.log(data)
            document.getElementById("temperature").textContent = "Temp: " + data.main.temp + "°C"
            document.querySelector("#wind").textContent = "Wind: " + data.wind.speed + "kph"
            document.querySelector("#humidity").textContent = "Humidity: " + data.main.humidity + "%"

            fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=1874cb6ef3fe4f96e520929bdea63f63&units=metric")
                .then(function (res) {
                    return res.json(
                    )
                })
                .then(function (data) {
                    console.log(data)
                    document.getElementById("temperature-1").textContent = "Temp: " + data.list[3].main.temp + "°C"
                    document.querySelector("#wind-1").textContent = "Wind: " + data.list[3].wind.speed + "kph"
                    document.querySelector("#humidity-1").textContent = "Humidity: " + data.list[3].main.humidity + "%"
                })
                .then(function (data) {
                    console.log(data)
                    document.getElementById("temperature-1").textContent = "Temp: " + data.list[4].main.temp + "°C"
                    document.querySelector("#wind-1").textContent = "Wind: " + data.list[4].wind.speed + "kph"
                    document.querySelector("#humidity-1").textContent = "Humidity: " + data.list[4].main.humidity + "%"
                })
                .then(function (data) {
                    console.log(data)
                    document.getElementById("temperature-1").textContent = "Temp: " + data.list[5].main.temp + "°C"
                    document.querySelector("#wind-1").textContent = "Wind: " + data.list[5].wind.speed + "kph"
                    document.querySelector("#humidity-1").textContent = "Humidity: " + data.list[5].main.humidity + "%"
                })
                .then(function (data) {
                    console.log(data)
                    document.getElementById("temperature-1").textContent = "Temp: " + data.list[6].main.temp + "°C"
                    document.querySelector("#wind-1").textContent = "Wind: " + data.list[6].wind.speed + "kph"
                    document.querySelector("#humidity-1").textContent = "Humidity: " + data.list[6].main.humidity + "%"
                })
        })
}

function getCityForecast() {

}

function getCurrentForecast() {

}
document.querySelector(".btn").addEventListener("click", searchCity)


//function listSearchCities???
//function unixtime
//local storage???

//fetch(querURL)???


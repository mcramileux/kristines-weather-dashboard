function searchCity() {
    var searchedCity = document.querySelector("#cityName")
    var searchCity = document.querySelector("#cityName").value

    var citySearch = JSON.parse(localStorage.getItem("searchHistory")) ||[]
    document.querySelector("#city-name").innerHTML=""
    if (!citySearch.includes(searchCity)){
    citySearch.push(searchCity)
    localStorage.setItem("searchHistory", JSON.stringify(citySearch))
    }
    for (let i = 0; i < citySearch.length; i++) {
        var btn = document.createElement("button")
        var li = document.createElement("li")

        btn.textContent = citySearch[i]
        li.appendChild(btn)
        document.querySelector("#city-name").appendChild(li)

        btn.addEventListener("click", function(e){
            e.preventDefault()
            searchedCity.value=this.textContent
        })
    }

    var apiKey = "1874cb6ef3fe4f96e520929bdea63f63"
    var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=1874cb6ef3fe4f96e520929bdea63f63&units=metric"
    fetch(currentWeatherUrl)
        .then(function (res) {
            return res.json(
            )
        })
        .then(function (data) {
            console.log(data)
            document.getElementById("date").textContent = "Date: " + data.dt + "DD/MM/YYYY"
            document.getElementById("temperature").textContent = "Temp: " + data.main.temp + "°C"
            document.querySelector("#wind").textContent = "Wind: " + data.wind.speed + "kph"
            document.querySelector("#humidity").textContent = "Humidity: " + data.main.humidity + "%"
            document.querySelector("#icon").src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png"
            
            fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=1874cb6ef3fe4f96e520929bdea63f63&units=metric")
                .then(function (res) {
                    return res.json(
                    )
                })
                .then(function (data) {
                    console.log(data)
                    document.getElementById("date-1").textContent = "Date: " + data.list[3].dt_txt + "DD/MM/YYYY"
                    document.getElementById("temperature-1").textContent = "Temp: " + data.list[3].main.temp + "°C"
                    document.querySelector("#wind-1").textContent = "Wind: " + data.list[3].wind.speed + "kph"
                    document.querySelector("#humidity-1").textContent = "Humidity: " + data.list[3].main.humidity + "%"
                    document.querySelector("#icon-1").src = "https://openweathermap.org/img/wn/"+data.list[3].weather[0].icon+"@2x.png"

                    document.getElementById("date-2").textContent = "Date: " + data.list[4].dt_txt + "DD/MM/YYYY"
                    document.getElementById("temperature-2").textContent = "Temp: " + data.list[4].main.temp + "°C"
                    document.querySelector("#wind-2").textContent = "Wind: " + data.list[4].wind.speed + "kph"
                    document.querySelector("#humidity-2").textContent = "Humidity: " + data.list[4].main.humidity + "%"
                    document.querySelector("#icon-2").src = "https://openweathermap.org/img/wn/"+data.list[4].weather[0].icon+"@2x.png"

                    document.getElementById("date-3").textContent = "Date: " + data.list[5].dt_txt + "DD/MM/YYYY"
                    document.getElementById("temperature-3").textContent = "Temp: " + data.list[5].main.temp + "°C"
                    document.querySelector("#wind-3").textContent = "Wind: " + data.list[5].wind.speed + "kph"
                    document.querySelector("#humidity-3").textContent = "Humidity: " + data.list[5].main.humidity + "%"
                    document.querySelector("#icon-3").src = "https://openweathermap.org/img/wn/"+data.list[5].weather[0].icon+"@2x.png"

                    document.getElementById("date-4").textContent = "Date: " + data.list[6].dt_txt + "DD/MM/YYYY"
                    document.getElementById("temperature-4").textContent = "Temp: " + data.list[6].main.temp + "°C"
                    document.querySelector("#wind-4").textContent = "Wind: " + data.list[6].wind.speed + "kph"
                    document.querySelector("#humidity-4").textContent = "Humidity: " + data.list[6].main.humidity + "%"
                    document.querySelector("#icon-4").src = "https://openweathermap.org/img/wn/"+data.list[6].weather[0].icon+"@2x.png"

                    document.getElementById("date-1").textContent = "Date: " + data.list[7].dt_txt + "DD/MM/YYYY"
                    document.getElementById("temperature-5").textContent = "Temp: " + data.list[7].main.temp + "°C"
                    document.querySelector("#wind-5").textContent = "Wind: " + data.list[7].wind.speed + "kph"
                    document.querySelector("#humidity-5").textContent = "Humidity: " + data.list[7].main.humidity + "%"
                    document.querySelector("#icon-5").src = "https://openweathermap.org/img/wn/"+data.list[7].weather[0].icon+"@2x.png"

                })
        })
}

function getCityForecast() {

}

function getCurrentForecast() {

}
document.querySelector(".btn").addEventListener("click", searchCity)

document.querySelector("#cityName").addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        e.preventDefault();
        searchCity()
    }
});



// displays the 5-day forecast date format
function formatDate(ts) {
    var date = new Date(ts);  
    var day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    var month = date.getMonth()+1;
    if (month < 10) {
        month = "0" + month;
    }
    var year = date.getFullYear();
    return day + "/" + month +"/" + year;
}
// displays the search city and be able to store the in the local storage
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
    // display for the current weather (main)
    var apiKey = "1874cb6ef3fe4f96e520929bdea63f63"
    var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=1874cb6ef3fe4f96e520929bdea63f63&units=metric"
    fetch(currentWeatherUrl)
        .then(function (res) {
            return res.json(
            )
        })
        .then(function (data) {
            console.log(data)
            var date = dayjs().format('DD/MM/YYYY');
            document.getElementById("date").textContent = "Date: " + date
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
                    // the 5-day forecast using the data list using the 9am and 6am as to not the dates won't overlap.
                    document.getElementById("date-1").textContent = "Date: " + formatDate(data.list[8].dt_txt);
                    document.getElementById("temperature-1").textContent = "Temp: " + data.list[8].main.temp + "°C"
                    document.querySelector("#wind-1").textContent = "Wind: " + data.list[8].wind.speed + "kph"
                    document.querySelector("#humidity-1").textContent = "Humidity: " + data.list[8].main.humidity + "%"
                    document.querySelector("#icon-1").src = "https://openweathermap.org/img/wn/"+data.list[8].weather[0].icon+"@2x.png"

                    document.getElementById("date-2").textContent = "Date: " + formatDate(data.list[16].dt_txt);
                    document.getElementById("temperature-2").textContent = "Temp: " + data.list[16].main.temp + "°C"
                    document.querySelector("#wind-2").textContent = "Wind: " + data.list[16].wind.speed + "kph"
                    document.querySelector("#humidity-2").textContent = "Humidity: " + data.list[16].main.humidity + "%"
                    document.querySelector("#icon-2").src = "https://openweathermap.org/img/wn/"+data.list[16].weather[0].icon+"@2x.png"

                    document.getElementById("date-3").textContent = "Date: " + formatDate(data.list[24].dt_txt);
                    document.getElementById("temperature-3").textContent = "Temp: " + data.list[24].main.temp + "°C"
                    document.querySelector("#wind-3").textContent = "Wind: " + data.list[24].wind.speed + "kph"
                    document.querySelector("#humidity-3").textContent = "Humidity: " + data.list[24].main.humidity + "%"
                    document.querySelector("#icon-3").src = "https://openweathermap.org/img/wn/"+data.list[24].weather[0].icon+"@2x.png"

                    document.getElementById("date-4").textContent = "Date: " + formatDate(data.list[32].dt_txt);
                    document.getElementById("temperature-4").textContent = "Temp: " + data.list[32].main.temp + "°C"
                    document.querySelector("#wind-4").textContent = "Wind: " + data.list[32].wind.speed + "kph"
                    document.querySelector("#humidity-4").textContent = "Humidity: " + data.list[32].main.humidity + "%"
                    document.querySelector("#icon-4").src = "https://openweathermap.org/img/wn/"+data.list[32].weather[0].icon+"@2x.png"

                    document.getElementById("date-5").textContent = "Date: " + formatDate(data.list[39].dt_txt);
                    document.getElementById("temperature-5").textContent = "Temp: " + data.list[39].main.temp + "°C"
                    document.querySelector("#wind-5").textContent = "Wind: " + data.list[39].wind.speed + "kph"
                    document.querySelector("#humidity-5").textContent = "Humidity: " + data.list[39].main.humidity + "%"
                    document.querySelector("#icon-5").src = "https://openweathermap.org/img/wn/"+data.list[39].weather[0].icon+"@2x.png"
                    document.querySelector(".begin").classList.remove("begin");
                })
        })
}

// display for the search button
document.querySelector(".btn").addEventListener("click", searchCity)

document.querySelector("#cityName").addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        e.preventDefault();
        searchCity()
        
    }
});


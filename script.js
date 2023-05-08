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
            var date = dayjs().format('DD/MM/YYYY (dddd)');
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
                    document.getElementById("date-1").textContent = "Date: " + data.list[1].dt_txt 
                    document.getElementById("temperature-1").textContent = "Temp: " + data.list[1].main.temp + "°C"
                    document.querySelector("#wind-1").textContent = "Wind: " + data.list[1].wind.speed + "kph"
                    document.querySelector("#humidity-1").textContent = "Humidity: " + data.list[1].main.humidity + "%"
                    document.querySelector("#icon-1").src = "https://openweathermap.org/img/wn/"+data.list[1].weather[0].icon+"@2x.png"

                    document.getElementById("date-2").textContent = "Date: " + data.list[9].dt_txt
                    document.getElementById("temperature-2").textContent = "Temp: " + data.list[9].main.temp + "°C"
                    document.querySelector("#wind-2").textContent = "Wind: " + data.list[9].wind.speed + "kph"
                    document.querySelector("#humidity-2").textContent = "Humidity: " + data.list[9].main.humidity + "%"
                    document.querySelector("#icon-2").src = "https://openweathermap.org/img/wn/"+data.list[9].weather[0].icon+"@2x.png"

                    document.getElementById("date-3").textContent = "Date: " + data.list[17].dt_txt
                    document.getElementById("temperature-3").textContent = "Temp: " + data.list[17].main.temp + "°C"
                    document.querySelector("#wind-3").textContent = "Wind: " + data.list[17].wind.speed + "kph"
                    document.querySelector("#humidity-3").textContent = "Humidity: " + data.list[17].main.humidity + "%"
                    document.querySelector("#icon-3").src = "https://openweathermap.org/img/wn/"+data.list[17].weather[0].icon+"@2x.png"

                    document.getElementById("date-4").textContent = "Date: " + data.list[25].dt_txt
                    document.getElementById("temperature-4").textContent = "Temp: " + data.list[25].main.temp + "°C"
                    document.querySelector("#wind-4").textContent = "Wind: " + data.list[25].wind.speed + "kph"
                    document.querySelector("#humidity-4").textContent = "Humidity: " + data.list[25].main.humidity + "%"
                    document.querySelector("#icon-4").src = "https://openweathermap.org/img/wn/"+data.list[25].weather[0].icon+"@2x.png"

                    document.getElementById("date-5").textContent = "Date: " + data.list[33].dt_txt
                    document.getElementById("temperature-5").textContent = "Temp: " + data.list[33].main.temp + "°C"
                    document.querySelector("#wind-5").textContent = "Wind: " + data.list[33].wind.speed + "kph"
                    document.querySelector("#humidity-5").textContent = "Humidity: " + data.list[33].main.humidity + "%"
                    document.querySelector("#icon-5").src = "https://openweathermap.org/img/wn/"+data.list[33].weather[0].icon+"@2x.png"

                })
        })
}

// function getCityForecast() {

// }

// function getCurrentForecast() {

// }
document.querySelector(".btn").addEventListener("click", searchCity)

document.querySelector("#cityName").addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        e.preventDefault();
        searchCity()
    }
});

//Get the elements to remove the class from
// var currentResult = document.querySelector('.currentResultPanel');
// var forecastColumn = document.querySelector('.forecastColumn');
// var footer = document.querySelector('.footer');

// searchCity();
// document.querySelector(".currentResultPanel").style = undefined;
// document.querySelector(".forecastColumn").style = undefined;
// document.querySelector(".footer").style = undefined;

//formatting dates using moment.js

//Searching for newCitySearch
function newCitySearch () {

}

//construct currentWeatherUrl using searchCity and apiKey
// fetch currentWeatherUrl
//     .then parse JSON response
//     .then process and display weather data

//To fix this, you need to set the display style of these elements to "block" after a search is made.
// Pseudocode:
// set display style of currentResultPanel to "block"
// set display style of forecastColumn to "block"
// set display style of footer to "block"

// Define variables for the result panel, forecast column, and footer
const currentResultPanel = document.getElementById("current-result-panel");
const forecastColumn = document.getElementById("forecast-column");
const footer = document.getElementById("footer");

// Set the display style of the elements to "none" initially
currentResultPanel.style.display = "none";
forecastColumn.style.display = "none";
footer.style.display = "none";

// When a search is made, set the display style of the elements to "block"
function handleSearch() {
  currentResultPanel.style.display = "block";
  forecastColumn.style.display = "block";
  footer.style.display = "block";

  // Add code here to handle the search
}

// Add an event listener to the search button to call the handleSearch function when clicked
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", handleSearch);

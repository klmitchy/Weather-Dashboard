//attach an event listener to the button
//capture search term and send it in url
//capture user input and send that to results container
//fetch the api with input

var submitBtn = $("#search-btn");
var searchTerm = $("#userCity");
var userSearchTerm
var currentConditions = $("#currentConditions");
var APIKey = "ee12e1ef04df6690dc612b722669ba4a";
var fiveDayForecast = $("#fiveDay");
var City = $("City");
var Temp = $("Temp");
var Wind = $("Wind");
var Humidity = $("Humidity");
var uvIndex = $("UV-Index");
var selectedCity = $("#City-Select");
var currentTemp = $("#currentTemp");
var currentWind = $("#currentWind");
var currentHumid = $("#currentHumidity");
var currentUVI = $("#currentUVI");


//var userSearchTerm = searchTerm.val();


submitBtn.on("click", function (event) {
    event.preventDefault();
   
   var userSearchTerm = searchTerm.val();

   weatherAPI(userSearchTerm)
}); 


//var userSearchTerm = searchTerm.val();

function weatherAPI(userSearchTerm){
    //var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}" + userSearchTerm + "&appid=" + APIKey + "&units=imperial";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userSearchTerm + "&appid=" + APIKey + "&units=imperial";

    fetch(queryURL)
       .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
                //console.log(data.name)
            selectedCity.text(data.name);
            currentTemp.text("Temp: " + data.main.temp);
            currentWind.text("Wind: " + data.main.wind);
            currentHumid.text("Humidity: " + data.main.humidity);
            currentUVI.text("UV Index: " + data.main.current.uvi);
          
          })

}

var queryURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}" + userSearchTerm + "&appid=" + APIKey + "&units=imperial";

function getLatLon(data) {
    var lat = data.coord.lat
    var lon = data.coord.lon
}

fetch(queryURL2)
    .then(function(response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);

    })
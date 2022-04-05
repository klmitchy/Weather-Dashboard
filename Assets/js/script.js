//attach an event listener to the button
//capture search term and send it in url
//capture user input and send that to results container
//fetch the api with input

var submitBtn = $("#search-btn");
var searchTerm = $("#City");
var userSearchTerm
var currentConditions = $("#currentConditions");
var APIKey = "ee12e1ef04df6690dc612b722669ba4a";
var fiveDayForecast = $("#fiveDay")
//var userSearchTerm = searchTerm.val();


submitBtn.on("click", function (event) {
    event.preventDefault();
   
   var userSearchTerm = searchTerm.val();

   weatherAPI(userSearchTerm)
}); 


//var userSearchTerm = searchTerm.val();

function weatherAPI(userSearchTerm){
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + userSearchTerm + "&appid=" + APIKey;


    fetch(queryURL)
    
       .then(function (response) {
            return response.json();
        })
    
        .then(function(data) {
            console.log(data)
            document.domain.temp
            //for (var i = 0; i < data.length; i++) {
                //var listItem = document.currentConditions;
               // listItem.textContent = data[i].main.temp.
               // currentConditions.appendChild(listItem);
              //  }
              });
          }

//weatherAPI(userSearchTerm)



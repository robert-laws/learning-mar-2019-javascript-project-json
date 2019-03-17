var restaurantData;
var restaurantName = document.querySelector("#restaurant-name");

if(restaurantName) {
  var restaurantXHR = new XMLHttpRequest();
  restaurantXHR.open("GET", "assets/data/locations-data.json", true);
  restaurantXHR.responseType = "text";
  restaurantXHR.send();
  
  restaurantXHR.onload = function() {
    if(restaurantXHR.status === 200) {
      restaurantData = JSON.parse(restaurantXHR.responseText);
      console.log(restaurantData);
      display(0);
    }
  }
}

function display(restaurantIndex) {
  var details = "";
  console.log(restaurantIndex);
  document.querySelector("#restaurant-name").innerHTML = "<strong>Name</strong>: " + restaurantData[restaurantIndex].name;
  document.querySelector("#restaurant-manager").innerHTML = "<strong>Manager</strong>: " + restaurantData[restaurantIndex].manager;
  document.querySelector("#restaurant-description").innerHTML = "<strong>Description</strong>: " + restaurantData[restaurantIndex].description;
  document.querySelector("#restaurant-image").src = "images/" + restaurantData[restaurantIndex].image;
  document.querySelector("#restaurant-breakfast").innerHTML = "<strong>Breakfast Price</strong>: $" + restaurantData[restaurantIndex].prices.breakfast;
  document.querySelector("#restaurant-lunch").innerHTML = "<strong>Lunch Price</strong>: $" + restaurantData[restaurantIndex].prices.lunch;
  
  for(i = 0; i < restaurantData[restaurantIndex].options.length; i++) {
    details += "<li>" + restaurantData[restaurantIndex].options[i] + "</li>";
  }
  document.querySelector("#restaurant-menu").innerHTML = "<strong>Menu Sample</strong><br><ul>" + details + "</ul>";
}
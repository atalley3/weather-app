// Display current day and time
let now = new Date();
let dayOfWeek = now.getDay();
let hour = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wendesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let timeDay = document.querySelector("#time-day");
timeDay.innerHTML = `${days[dayOfWeek]} ${hour}:${minutes}`;

// Display Manual Search for city and temp
function displaySearchTemp(response) {
  let dailyTemp = Math.round(response.data.main.temp);
  let dailyHighTemp = Math.ceil(response.data.main.temp_max);
  let dailyLowTemp = Math.floor(response.data.main.temp_min);
  currentTemp.innerHTML = dailyTemp;
  currentHigh.innerHTML = dailyHighTemp;
  currentLow.innerHTML = dailyLowTemp;
}
function displayCity(response) {
  let cityName = response.data.name;
  cityDisplay.innerHTML = cityName;
}
function activateApi(event) {
  event.preventDefault();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchName}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displaySearchTemp);
  axios.get(apiUrl).then(displayCity);
}

let form = document.querySelector("form");
form.addEventListener("submit", activateApi);
let currentTemp = document.querySelector("#current-temp");
let cityDisplay = document.querySelector("#cityDisplay");
let citySearch = document.querySelector("#citySearch");
let citySearchName = `${citySearch.value}`;
// change from F to C
function changeToCelsius(event) {
  event.preventDefault();
  //currentLow.innerHTML = Math.floor((currentLowFahrenheit - 32) * (5 / 9));
  //currentHigh.innerHTML = Math.ceil((currentHighFahrenheit - 32) * (5 / 9));
  //currentTemp.innerHTML = Math.round((currentTempFahrenheit - 32) * (5 / 9));
  tempType2.innerHTML = "C";
  tempType1.innerHTML = "C";
}
function changeToFahernheit(event) {
  event.preventDefault();
  //currentLow.innerHTML = Math.floor(currentLowFahrenheit);
  //currentHigh.innerHTML = Math.ceil(currentHighFahrenheit);
  //currentTemp.innerHTML = Math.round(currentTempFahrenheit);
  tempType2.innerHTML = "F";
  tempType1.innerHTML = "F";
}
let currentLow = document.querySelector("#current-low");
let currentHigh = document.querySelector("#current-high");
let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");
celsius.addEventListener("click", changeToCelsius);
fahrenheit.addEventListener("click", changeToFahernheit);
//let currentLowFahrenheit = 50;
//let currentHighFahrenheit = 70;
//let currentTempFahrenheit = 60;
let tempType1 = document.querySelector("#tempType1");
let tempType2 = document.querySelector("#tempType2");

// Current location button
function displayGeoLocation(response) {
  let geoCity = response.data.name;
  cityDisplay.innerHTML = geoCity;
}
function handleLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let geoUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  axios.get(geoUrl).then(displayGeoLocation);
  axios.get(geoUrl).then(displaySearchTemp);
}
function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(handleLocation);
}
let currentLocation = document.querySelector("#currentLocationSearch");
currentLocation.addEventListener("click", getCurrentLocation);

// api key
let apiKey = `bcdada43905d3c2d7aa9f45a7ce30f8b`;

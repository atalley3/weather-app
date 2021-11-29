let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
function weatherReport() {
  let celTemp = Math.round(weather[city].temp);
  let fTemp = Math.round(weather[city].temp * (9 / 5) + 32);
  let cityCap = city.charAt(0).toUpperCase() + city.slice(1);

  alert(
    `It is currently ${celTemp}°C (${fTemp}°F) in ${cityCap} with a humidity of ${weather[city].humidity}%`
  );
}
function googleWeather() {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
function weatherSearch() {
  if (cities.includes(city) === true) {
    weatherReport();
  } else {
    googleWeather();
  }
}

let city = prompt("Enter a city");
city = city.toLowerCase().trim();
let cities = Object.keys(weather);

weatherSearch();

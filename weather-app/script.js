const btn = document.getElementById("search-btn");
const cityInput = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");

function searchWeather() {
     const city = cityInput.value.trim();

    if (city){
        console.log(`You searched for : ${city}`);
        cityName.textContent = city;
        cityInput.value = "";
        cityInput.focus();
    }else{
        console.log("Please enter a city name.");
    }

}

btn.addEventListener("click", searchWeather);
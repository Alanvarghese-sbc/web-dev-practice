const btn = document.getElementById("search-btn");
const cityInput = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const weather = document.getElementById("weather");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");
const errorMessage = document.getElementById("errorMessage");

const apiKey = "5c1b8636d13b4e1d91b175507260207";

async function searchWeather(city) {
    //  const city = cityInput.value.trim();

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    if(!city){
        console.log("Please enter a city name:");
        errorMessage.textContent = "Please enter a city name.";
        cityInput.focus();
        return;
    }

    
    try{
            // console.log(`You searched for : ${city}`);
            // cityName.textContent = city;
        
            const response = await fetch(url);
            const data = await response.json();
            if(data.error){
                errorMessage.textContent = data.error.message;
                cityInput.focus();

                return;
            }

            errorMessage.textContent = "";
            console.log(data);
        
            cityName.textContent = data.location.name;
        
            temperature.textContent = `${data.current.temp_c} °C`;
        
            weather.textContent = data.current.condition.text;
        
            weatherIcon.src = data.current.condition.icon;
            weatherIcon.alt = data.current.condition.text;
        
            humidity.textContent = `${data.current.humidity}%`;
        
            wind.textContent = `${data.current.wind_kph} km/h`;
        
        
        
            cityInput.value = "";
            cityInput.focus();

    }catch(error){

        console.log(error);
        errorMessage.textContent = "Unable to connect. Please check your internet connection.";
    }

}

btn.addEventListener("click", ()=>{

    const city = cityInput.value.trim();
    searchWeather(city);

    
});

// http://api.weatherapi.com/v1/current.json?key=apikey&q=kochi&aqi=no
let Weatherbtn = document.querySelector("#getweatherbtn");
async function getweather() {
    let loading = document.createElement("p");
    loading.textContent = "Loading...";
    document.body.appendChild(loading);

    let cityInput = document.querySelector("#cityname").value;
    let clickresult = document.querySelector("#result");
    clickresult.innerHTML = "";
    let w = document.createElement("h3");

    if (cityInput.trim() === "") {
        w.textContent = "Please enter a city!";
        clickresult.appendChild(w);
        loading.remove();
        return;
    }

    try {
        let apiKey = "Your API Key";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let Weather = await response.json();

        if (Weather.cod === "404") {
            w.textContent = "City not found!";
        } else {
            w.textContent = `City: ${Weather.name}, Temp: ${Weather.main.temp}°C, Weather: ${Weather.weather[0].description}`;
        }
        let weatherType = Weather.weather[0].main;
        let icon = document.querySelector("h1");

        if (weatherType === "Clear") {
            icon.textContent = "☀️ Weather App";
            document.body.style.backgroundImage = "linear-gradient(-45deg, #FFD700, #87CEFA, #FFA500, #87CEEB)";
        } else if (weatherType === "Clouds") {
            icon.textContent = "☁️ Weather App";
            document.body.style.backgroundImage =
                "linear-gradient(-45deg, #B0BEC5, #90A4AE, #607D8B, #CFD8DC)";

        } else if (weatherType === "Rain") {
            icon.textContent = "🌧️ Weather App";
            document.body.style.backgroundImage =
                "linear-gradient(-45deg, #2c3e50, #34495e, #5D6D7E, #7F8C8D)";

        } else if (weatherType === "Thunderstorm") {
            icon.textContent = "⛈️ Weather App";
            document.body.style.backgroundImage =
                "linear-gradient(-45deg, #4b0082, #2c3e50, #3c3b6e, #1a1a40)";

        } else if (weatherType === "Snow") {
            icon.textContent = "❄️ Weather App";
            document.body.style.backgroundImage =
                "linear-gradient(-45deg, #FFFFFF, #B3E5FC, #E0F7FA, #B2EBF2)";

        } else if (weatherType === "Mist" || weatherType === "Fog" || weatherType === "Haze") {
            icon.textContent = "🌫️ Weather App";
            document.body.style.backgroundImage =
                "linear-gradient(-45deg, #ECEFF1, #CFD8DC, #B0BEC5, #90A4AE)";

        } else {
            icon.textContent = "🌈 Weather App";
            document.body.style.backgroundImage =
                "linear-gradient(-45deg, #e66465, #9198e5, #FFB6C1, #87CEFA)";

        }

        clickresult.appendChild(w);
        let now = new Date();
        let timeParagraph = document.createElement("p");
        timeParagraph.textContent = "Local Time: " + now.toLocaleTimeString();
        clickresult.appendChild(timeParagraph);

        loading.remove();

    } catch (error) {
        loading.textContent = "Failed to load data!";
        console.error("Error details:", error);
    }
}

Weatherbtn.addEventListener("click", getweather);


let cityInputField = document.querySelector("#cityname");// "Enter" key
cityInputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        getweather();
    }
});

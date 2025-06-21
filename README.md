# Weather App

A simple web-based weather application that fetches real-time weather data from the OpenWeatherMap API. It displays temperature, weather conditions, and local time for any city, with a smooth animated background that changes based on the weather type.

## Built With

- HTML5
- CSS3 (with keyframe animations)
- Vanilla JavaScript (ES6)
- OpenWeatherMap API

## Features

* **Real-time weather data**: Fetches temperature and weather description for any city.
* **Dynamic background**: Animated gradient background that adapts colors according to the current weather (Clear, Clouds, Rain, Thunderstorm, Snow, Mist).
* **Interactive UI**: Supports both clicking the "See Weather!" button and pressing the Enter key in the input field.
* **Loading indicator**: Displays a "Loading..." message while fetching data.
* **Error handling**: Alerts the user if the city is not found or if the request fails.
* **Local time display**: Shows the current local time when weather data is displayed.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/banein-yusuf/weather-app.git
   cd weather-app
   ```

2. Open `index.html` in your preferred browser. Alternatively, use a local server (Live Server extension in VS Code) for best results.

## Usage

1. Enter a city name in the input field.
2. Click **See Weather!** or press **Enter**.
3. View the temperature, weather description, and local time.
4. Background colors animate and change based on weather type.


## Customization

* **API Key**: Obtain your own key from [OpenWeatherMap](https://openweathermap.org/api) and replace the placeholder in `script.js`.
* **Gradient Colors**: Modify the CSS gradients in `style.css` or the JS logic to suit different color schemes.

## Author
Made by banein-yusuf

const apiKey = "0cb34ba0fb4d7f9ae8a9ad6c30fec97f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search>input");
const searchBtn = document.querySelector(".search>button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let temperature = data.main.temp

        if (data.name == 'Novokuznetsk'){
            document.querySelector(".city").innerHTML = 'Новокузнецк';
            temperature = (temperature < -36 ? temperature : -36.5)
            console.log(temperature)
        }else{
            document.querySelector(".city").innerHTML = data.name;
        }

        document.querySelector(".temp").innerHTML = temperature + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".feels-like").innerHTML = data.main.feels_like;
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        // document.querySelector(".country").innerHTML = data.sys.country;
        
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/clouds.png?raw=true"
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/clear.png?raw=true"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/rain.png?raw=true"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/drizzle.png?raw=true"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/mist.png?raw=true"
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/snow.png?raw=true"
        }
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";
    }
}
checkWeather('новокузнецк')

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        checkWeather(searchBox.value);
    }
})

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

const dates = [];
const temperatures = [-32, -33, -32.5, -34, -32, -33, -35, -37, -37, -36, -35, -36];

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

before = 35
for (let i = 0; i < 12; i++){
    dates.push(`${i}:00`)
    res = getRandomArbitrary(before, 38)
    before = res - 1.5
}

// Get the canvas element
const ctx = document.getElementById('temperatureChart').getContext('2d');

// Create the chart
const temperatureChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
            label: 'Температура',
            data: temperatures,
            borderColor: 'blue',
            fill: false,
        }],
    },
    options: {
        scales: {
            x: {
                type: 'category',
                labels: dates,
            },
            y: {
                title: {
                    display: true,
                    text: 'Temperature (°C)',
                },
            },
        },
    },
});

console.log(window.location.href)
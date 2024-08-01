async function fetchWeatherData() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric');
        const data = await response.json();
        
        if (response.ok) {
            updateWeatherInfo(data);
        } else {
            console.error('Error fetching weather data:', data.message);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateWeatherInfo(data) {
    document.getElementById('temperature').textContent = data.main.temp;
    document.getElementById('humidity').textContent = `Độ ẩm: ${data.main.humidity}%`;
    document.getElementById('wind').textContent = `Gió: ${data.wind.speed} km/h`;
    document.getElementById('description').textContent = data.weather[0].description;
    
    const iconCode = data.weather[0].icon;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const rainChance = data.rain ? `${data.rain['1h']}%` : '0%';
    document.getElementById('rain-chance').textContent = `Khả năng có mưa: ${rainChance}`;
}

fetchWeatherData();

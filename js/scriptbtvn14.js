async function fetchWeatherData() {
    const city = document.getElementById('city-input').value || 'Hanoi'; // Default to Hanoi if no input
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`);
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
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = ''; // Clear previous data

    data.list.forEach(item => {
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item', 'col-12', 'col-md-4', 'col-lg-3');

        const dateTime = new Date(item.dt_txt).toLocaleString();
        const temperature = `${item.main.temp}°C`;
        const description = item.weather[0].description;
        const iconUrl = `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

        forecastItem.innerHTML = `
            <p>${dateTime}</p>
            <img src="${iconUrl}" alt="${description}">
            <p>${temperature}</p>
            <p>${description}</p>
        `;

        forecastContainer.appendChild(forecastItem);
    });
}

// Fetch initial weather data for Hanoi
fetchWeatherData();

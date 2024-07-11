document.getElementById('getWeather').addEventListener('click', getWeather);

async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = '09b6b56c66c123ae2552bfa7170fc994'; 
  // Replace with your OpenWeatherMap API key//
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  const description = data.weather[0].description;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;

  document.getElementById('description').textContent = `Description: ${description}`;
  document.getElementById('temperature').textContent = `Temperature: ${temperature} °C`;
  document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
}
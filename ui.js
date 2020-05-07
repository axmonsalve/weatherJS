class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  paint(weatherResult) {

    let iconUrl = `http://openweathermap.org/img/wn/${weatherResult.weather[0].icon}@2x.png`;
    const kelvin = 273.15;


    this.location.textContent = weatherResult.name;
    this.desc.textContent = weatherResult.weather[0].description;
    this.string.textContent = parseFloat(weatherResult.main.temp - kelvin, 10).toFixed(1);
    this.humidity.textContent = weatherResult.main.humidity;
    this.feelsLike.textContent = `Sensación térmica: ${parseFloat(weatherResult.main.feels_like - kelvin, 10).toFixed(1)} °C`;
    this.wind.textContent = `Viento ${parseFloat(weatherResult.wind.speed * 3.60, 10).toFixed(1)} Km/h.`;

    this.icon.setAttribute('src', iconUrl);
  }
}
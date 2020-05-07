class Weather {
  constructor(city) { //, country_code
    this.apiKey = '7fde7757131337b9bcc12628b2bfd888';
    this.city = city;
    // this.country_code = country_code;
  }

  //Fetching weather API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&lang=es`); //,${this.country_code}
    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city) {
    this.city = city;
  }
}
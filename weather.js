class Weather {
  constructor(city, country_code) { //, state
    this.apiKey = '7fde7757131337b9bcc12628b2bfd888';
    this.city = city;
    this.country_code = country_code;
    //this.state = state;
  }

  //Fetching weather API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country_code}&appid=${this.apiKey}&lang=es`);
    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city) { //Probar después con estado
    this.city = city;
  }
}
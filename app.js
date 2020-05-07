//Init storage 
const storage = new Storage();
//Get store location data
const weatherLocation = storage.getLocationData();
//Init weather object
const weather = new Weather(weatherLocation.city); //, 'cl'
//Init UI object
const ui = new UI();

//Get weather  on DOM loaded
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  //Change location
  weather.changeLocation(city);

  //set Location and localstorage
  storage.setLocationData(city);

  //Get the weather again and fetch it
  getWeather();

  //Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
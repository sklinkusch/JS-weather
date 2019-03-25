import "@scss/styles.scss";

class Weather {
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
    this.getData();
  }
  evalData(data) {
    const { currently } = data;
    const { icon, summary, temperature, pressure } = currently;
    const container = document.querySelector("#currentWeather");
    container.innerHTML = summary;
    const temperatureContainer = document.querySelector("#currentTemp");
    const tempF = temperature;
    const tempC = this.getCelsius(tempF);
    temperatureContainer.innerHTML = tempC;
    const pressureContainer = document.querySelector("#currentPressure");
    pressureContainer.innerHTML = `${pressure} mbar`;
    const imageContainer = document.querySelector("#todayImage");
    imageContainer.innerHTML = this.getImage(icon);
  }
  getCelsius(fahrenheit) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return `${celsius.toFixed(1)} °C`;
  }
  getData() {
    const secret_key = "ce21c715df0406faa728eb66e0d41cd7";
    const url = `https://api.darksky.net/forecast/${secret_key}/${this.lat},${
      this.lng
    }`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.evalData(data);
        console.log(data);
      })
      .catch(error => console.log(error));
  }
  getImage(type) {
    switch (type) {
      case "rain":
        return `<img src="assets/img/rain.jpg" alt="rain">`;
        break;
    }
  }
}

const myWeather = new Weather("52.520008", "13.404954");

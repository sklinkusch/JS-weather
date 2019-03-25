import "@scss/styles.scss";

class Weather {
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
    this.getData();
  }
  evalData(data) {
    const { currently, daily } = data;
    this.evalTodayData(currently);
    this.evalFollowing(daily);
  }
  evalFollowing(daily) {
    const { data } = daily;
    for (let i = 0; i < 3; i++) {
      const imgSel = `#imag-${i}`;
      const imgCont = document.querySelector(imgSel);
      imgCont.innerHTML = this.getImage(data[i].icon);
      const sumSel = `#summ-${i}`;
      const sumCont = document.querySelector(sumSel);
      sumCont.innerHTML = data[i].summary;
      const maxSel = `#high-${i}`;
      const maxCont = document.querySelector(maxSel);
      maxCont.innerHTML = `maximum: ${this.getCelsius(data[i].temperatureMax)}`;
      const minSel = `#low-${i}`;
      const minCont = document.querySelector(minSel);
      minCont.innerHTML = `minimum: ${this.getCelsius(data[i].temperatureMin)}`;
    }
  }
  evalTodayData(data) {
    const { icon, summary, temperature, pressure } = data;
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
    return `${celsius.toFixed(0)} °C`;
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
      case "sleet":
        return `<img src="assets/img/sleet.jpg" alt="sleet">`;
        break;
      case "cloudy":
      case "partly cloudy":
      case "partly-cloudy-day":
        return `<img src="assets/img/clouds.jpg" alt="cloudy">`;
        break;
      case "sun":
        return `<img src="assets/img/sun.jpg" alt="sunny">`;
        break;
    }
  }
}

const myWeather = new Weather("52.520008", "13.404954");

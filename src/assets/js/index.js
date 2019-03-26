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
    const date = new Date();
    data.forEach((day, i) => {
      const imgCont = document.querySelector(`#imag-${i}`);
      const sumCont = document.querySelector(`#summ-${i}`);
      const maxCont = document.querySelector(`#high-${i}`);
      const minCont = document.querySelector(`#low-${i}`);
      const precCont = document.querySelector(`#prec-${i}`);
      const {
        icon,
        summary,
        temperatureMax,
        temperatureMin,
        precipProbability
      } = day;
      imgCont.innerHTML = this.getImage(icon);
      sumCont.innerHTML = summary;
      maxCont.innerHTML = `maximum: ${this.getCelsius(temperatureMax)}`;
      minCont.innerHTML = `minimum: ${this.getCelsius(temperatureMin)}`;
      precCont.innerHTML = `precipitation probability: ${this.getPercent(
        precipProbability
      )}`;
      if (i != 0 && i != 1) {
        const currentDate = new Date(
          new Date().getTime() + i * 24 * 60 * 60 * 1000
        );
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();
        const dateCont = document.querySelector(`#day-${i}`);
        dateCont.innerHTML = `${currentDay}/${currentMonth}/${currentYear}`;
      }
    });
  }
  evalTodayData(data) {
    const {
      icon,
      summary,
      temperature,
      pressure,
      apparentTemperature,
      precipProbability
    } = data;
    const container = document.querySelector("#currentWeather");
    container.innerHTML = summary;
    const temperatureContainer = document.querySelector("#currentTemp");
    const tempC = this.getCelsius(temperature);
    temperatureContainer.innerHTML = `current temperature: ${tempC}`;
    const feelsContainer = document.querySelector("#feels");
    feelsContainer.innerHTML = `feels like: ${this.getCelsius(
      apparentTemperature
    )}`;
    const precipContainer = document.querySelector("#precip");
    precipContainer.innerHTML = `precipitation probability: ${this.getPercent(
      precipProbability
    )}`;
    const pressureContainer = document.querySelector("#currentPressure");
    pressureContainer.innerHTML = `air pressure: ${pressure} mbar`;
    const imageContainer = document.querySelector("#todayImage");
    imageContainer.innerHTML = this.getImage(icon);
  }
  getCelsius(fahrenheit) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    if (celsius.toFixed(0) == "-0") {
      return `${(-1 * celsius).toFixed(0)} °C`;
    } else {
      return `${celsius.toFixed(0)} °C`;
    }
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
        return `<img src="assets/img/rain.jpg" alt="rain" title="rain">`;
        break;
      case "sleet":
        return `<img src="assets/img/sleet.jpg" alt="sleet" title="sleet">`;
        break;
      case "cloudy":
        return `<img src="assets/img/clouds.jpg" alt="cloudy" title="cloudy">`;
        break;
      case "partly cloudy":
        return `<img src="assets/img/clouds.jpg" alt="partly cloudy title="partly cloudy">`;
        break;
      case "partly-cloudy-day":
        return `<img src="assets/img/clouds.jpg" alt="partly cloudy day" title="partly cloudy day">`;
        break;
      case "partly-cloudy-night":
        return `<img src="assets/img/clouds.jpg" alt="partly cloudy night" title="partly cloudy night">`;
        break;
      case "clear-day":
        return `<img src="assets/img/clear.jpg" alt="clear day" title="clear day">`;
        break;
      case "sun":
        return `<img src="assets/img/sun.jpg" alt="sun" title="sun">`;
        break;
      case "thunderstorm":
        return `<img src="assets/img/thunderstorm.jpg" alt="thunderstorm" title="thunderstorm">`;
        break;
      case "snow":
        return `<img src="assets/img/snow.jpg" alt="snow" title="snow">`;
        break;
      case "fog":
        return `<img src="assets/img/fog.jpg" alt="fog" title="fog">`;
        break;
    }
  }
  getPercent(value) {
    return `${(100 * value).toFixed(0)} %`;
  }
}

const myWeather = new Weather("52.520008", "13.404954");

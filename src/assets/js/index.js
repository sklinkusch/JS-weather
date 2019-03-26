import "@scss/styles.scss";

class Weather {
  constructor(place, lat, lng) {
    this._place = place;
    this._lat = lat;
    this._lng = lng;
    this.getData();
    this.addEventListeners();
  }
  addEventListeners() {
    const dropdown = document.querySelector("#placeselect");
    dropdown.addEventListener("input", event => {
      const myValue = event.target.value;
      switch (myValue) {
        case "berlin":
          this.place = "Berlin";
          this.lat = "52.520008";
          this.lng = "13.404954";
          break;
        case "anchorage":
          this.place = "Anchorage";
          this.lat = "61.216667";
          this.lng = "-149.883333";
          break;
        case "bangkok":
          this.place = "Bangkok";
          this.lat = "13.75";
          this.lng = "100.516667";
          break;
        case "beijing":
          this.place = "Beijing";
          this.lat = "39.933333";
          this.lng = "116.383333";
          break;
        case "cairo":
          this.place = "Cairo";
          this.lat = "30.056111";
          this.lng = "31.239444";
          break;
        case "capetown":
          this.place = "Cape Town";
          this.lat = "-33.922667";
          this.lng = "18.416689";
          break;
        case "kathmandu":
          this.place = "Kathmandu";
          this.lat = "27.716667";
          this.lng = "85.316667";
          break;
        case "lapaz":
          this.place = "La Paz";
          this.lat = "-16.494167";
          this.lng = "-68.1475";
          break;
        case "london":
          this.place = "London";
          this.lat = "51.50939";
          this.lng = "-0.11832";
          break;
        case "mexico":
          this.place = "Mexico City";
          this.lat = "19.419444";
          this.lng = "-99.145556";
          break;
        case "paris":
          this.place = "Paris";
          this.lat = "48.856667";
          this.lng = "2.351667";
          break;
        case "newyork":
          this.place = "New York City";
          this.lat = "40.712778";
          this.lng = "-74.005833";
          break;
        case "rio":
          this.place = "Rio de Janeiro";
          this.lat = "-22.908333";
          this.lng = "-43.196389";
          break;
        case "riyadh":
          this.place = "Riyadh";
          this.lat = "24.65";
          this.lng = "46.71";
          break;
        case "rome":
          this.place = "Rome";
          this.lat = "41.883333";
          this.lng = "12.483333";
          break;
        case "sydney":
          this.place = "Sydney";
          this.lat = "-33.85";
          this.lng = "151.2";
          break;
        case "toronto":
          this.place = "Toronto";
          this.lat = "43.66135";
          this.lng = "-79.383087";
          break;
      }
      this.getData();
    });
  }
  evalData(data) {
    const placeCont = document.querySelector("#placeid");
    placeCont.innerHTML = this.place;
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
    const proxy = "https://cors-anywhere.herokuapp.com";
    const url = `${proxy}/https://api.darksky.net/forecast/${secret_key}/${
      this.lat
    },${this.lng}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.evalData(data);
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
      case "clear-night":
        return `<img src="assets/img/clear.jpg" alt="clear night" title="clear night">`;
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
      case "wind":
        return `<img src="assets/img/wind.jpg" alt="wind" title="wind">`;
        break;
    }
  }
  getPercent(value) {
    return `${(100 * value).toFixed(0)} %`;
  }
  get lat() {
    return this._lat;
  }
  set lat(newLat) {
    this._lat = newLat;
  }
  get lng() {
    return this._lng;
  }
  set lng(newLng) {
    this._lng = newLng;
  }
  get place() {
    return this._place;
  }
  set place(newPlace) {
    this._place = newPlace;
  }
}

const myWeather = new Weather("Berlin", "52.520008", "13.404954");

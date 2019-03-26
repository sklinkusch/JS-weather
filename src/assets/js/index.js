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
      const collectionOfPlaces = {
        berlin: "Berlin",
        anchorage: "Anchorage",
        bamako: "Bamako",
        bangkok: "Bangkok",
        beijing: "Beijing",
        budapest: "Budapest",
        cairo: "Cairo",
        capetown: "Cape Town",
        kathmandu: "Kathmandu",
        kinshasa: "Kinshasa",
        lapaz: "La Paz",
        london: "London",
        losangeles: "Los Angeles",
        mcmurdo: "McMurdo station",
        mexico: "Mexico City",
        moscow: "Moscow",
        newyork: "New York City",
        oymyakon: "Oymyakon",
        paris: "Paris",
        rio: "Rio de Janeiro",
        riyadh: "Riyadh",
        rome: "Rome",
        sydney: "Sydney",
        tokyo: "Tokyo",
        toronto: "Toronto",
        yaren: "Yaren"
      };
      const collectionOfLats = {
        berlin: "52.520008",
        anchorage: "61.216667",
        bamako: "12.645833",
        bangkok: "13.75",
        beijing: "39.933333",
        budapest: "47.5",
        cairo: "30.056111",
        capetown: "-33.922667",
        kathmandu: "27.716667",
        kinshasa: "-4.331667",
        lapaz: "-16.494167",
        london: "51.50939",
        losangeles: "34.052222",
        mcmurdo: "-77.846323",
        mexico: "19.419444",
        moscow: "55.75",
        newyork: "40.712778",
        oymyakon: "63.462778",
        paris: "48.856667",
        rio: "-22.908333",
        riyadh: "24.65",
        rome: "41.883333",
        sydney: "-33.85",
        tokyo: "35.683889",
        toronto: "43.66135",
        yaren: "-0.543425"
      };
      const collectionOfLngs = {
        berlin: "13.404954",
        anchorage: "-149.883333",
        bamako: "-7.992222",
        bangkok: "100.516667",
        beijing: "116.383333",
        budapest: "19.05",
        cairo: "31.239444",
        capetown: "18.416689",
        kathmandu: "85.316667",
        kinshasa: "15.313889",
        lapaz: "-68.1475",
        london: "-0.11832",
        losangeles: "-118.243611",
        mcmurdo: "166.668235",
        mexico: "-99.145556",
        moscow: "37.616667",
        newyork: "-74.005833",
        oymyakon: "142.786944",
        paris: "2.351667",
        rio: "-43.196389",
        riyadh: "46.71",
        rome: "12.483333",
        sydney: "151.2",
        tokyo: "139.774444",
        toronto: "-79.383087",
        yaren: "166.919608"
      };
      this.place = collectionOfPlaces[myValue];
      this.lat = collectionOfLats[myValue];
      this.lng = collectionOfLngs[myValue];
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

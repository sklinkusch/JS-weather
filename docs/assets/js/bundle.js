/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scss/styles.scss */ "./src/assets/scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Weather =
/*#__PURE__*/
function () {
  function Weather(place, lat, lng) {
    _classCallCheck(this, Weather);

    this._place = place;
    this._lat = lat;
    this._lng = lng;
    this.getData();
    this.addEventListeners();
  }

  _createClass(Weather, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      var dropdown = document.querySelector("#placeselect");
      dropdown.addEventListener("input", function (event) {
        var myValue = event.target.value;
        var collectionOfPlaces = {
          berlin: "Berlin",
          anchorage: "Anchorage",
          bamako: "Bamako",
          bangkok: "Bangkok",
          beijing: "Beijing",
          budapest: "Budapest",
          buenosaires: "Buenos Aires",
          cairo: "Cairo",
          capetown: "Cape Town",
          caracas: "Caracas",
          damascus: "Damascus",
          havana: "Havana",
          istanbul: "Istanbul",
          kathmandu: "Kathmandu",
          kingston: "Kingston",
          kinshasa: "Kinshasa",
          lapaz: "La Paz",
          london: "London",
          losangeles: "Los Angeles",
          madrid: "Madrid",
          manaus: "Manaus",
          manila: "Manila",
          mcmurdo: "McMurdo station",
          mexico: "Mexico City",
          moscow: "Moscow",
          mumbai: "Mumbai",
          newyork: "New York City",
          oymyakon: "Oymyakon",
          paris: "Paris",
          reykjavik: "Reykjavik",
          rio: "Rio de Janeiro",
          riyadh: "Riyadh",
          rome: "Rome",
          sydney: "Sydney",
          telaviv: "Tel Aviv",
          tokyo: "Tokyo",
          toronto: "Toronto",
          warsaw: "Warsaw",
          yaren: "Yaren"
        };
        var collectionOfLats = {
          berlin: "52.520008",
          anchorage: "61.216667",
          bamako: "12.645833",
          bangkok: "13.75",
          beijing: "39.933333",
          budapest: "47.5",
          buenosaires: "-34.599722",
          cairo: "30.056111",
          capetown: "-33.922667",
          caracas: "10.5047",
          damascus: "33.509722",
          havana: "23.1225",
          istanbul: "41.01",
          kathmandu: "27.716667",
          kingston: "18.01283",
          kinshasa: "-4.331667",
          lapaz: "-16.494167",
          london: "51.50939",
          losangeles: "34.052222",
          madrid: "40.4125",
          manaus: "-3.1",
          manila: "14.583333",
          mcmurdo: "-77.846323",
          mexico: "19.419444",
          moscow: "55.75",
          mumbai: "18.966667",
          newyork: "40.712778",
          oymyakon: "63.462778",
          paris: "48.856667",
          reykjavik: "64.15",
          rio: "-22.908333",
          riyadh: "24.65",
          rome: "41.883333",
          sydney: "-33.85",
          telaviv: "32.066667",
          tokyo: "35.683889",
          toronto: "43.66135",
          warsaw: "52.216667",
          yaren: "-0.543425"
        };
        var collectionOfLngs = {
          berlin: "13.404954",
          anchorage: "-149.883333",
          bamako: "-7.992222",
          bangkok: "100.516667",
          beijing: "116.383333",
          budapest: "19.05",
          buenosaires: "-58.381944",
          cairo: "31.239444",
          capetown: "18.416689",
          caracas: "-66.9145",
          damascus: "36.309167",
          havana: "-82.386389",
          istanbul: "28.960278",
          kathmandu: "85.316667",
          kingston: "-76.8007",
          kinshasa: "15.313889",
          lapaz: "-68.1475",
          london: "-0.11832",
          losangeles: "-118.243611",
          madrid: "-3.703889",
          manaus: "-60.016667",
          manila: "121",
          mcmurdo: "166.668235",
          mexico: "-99.145556",
          moscow: "37.616667",
          mumbai: "72.833333",
          newyork: "-74.005833",
          oymyakon: "142.786944",
          paris: "2.351667",
          reykjavik: "-21.933333",
          rio: "-43.196389",
          riyadh: "46.71",
          rome: "12.483333",
          sydney: "151.2",
          telaviv: "34.783333",
          tokyo: "139.774444",
          toronto: "-79.383087",
          warsaw: "21.033333",
          yaren: "166.919608"
        };
        _this.place = collectionOfPlaces[myValue];
        _this.lat = collectionOfLats[myValue];
        _this.lng = collectionOfLngs[myValue];

        _this.getData();
      });
    }
  }, {
    key: "evalData",
    value: function evalData(data) {
      var placeCont = document.querySelector("#placeid");
      placeCont.innerHTML = this.place;
      var currently = data.currently,
          daily = data.daily;
      this.evalTodayData(currently);
      this.evalFollowing(daily);
    }
  }, {
    key: "evalFollowing",
    value: function evalFollowing(daily) {
      var _this2 = this;

      var data = daily.data;
      var date = new Date();
      data.forEach(function (day, i) {
        var imgCont = document.querySelector("#imag-".concat(i));
        var listCont = document.querySelector("#weather-".concat(i));
        var icon = day.icon,
            summary = day.summary,
            temperatureMax = day.temperatureMax,
            temperatureMin = day.temperatureMin,
            precipProbability = day.precipProbability,
            precipIntensity = day.precipIntensity,
            windBearing = day.windBearing,
            windSpeed = day.windSpeed,
            windGust = day.windGust,
            humidity = day.humidity;
        imgCont.innerHTML = _this2.getImage(icon);
        listCont.innerHTML = "\n      <li>".concat(summary, "</li>\n      <li>maximum: ").concat(_this2.getCelsius(temperatureMax), "</li>\n      <li>minimum: ").concat(_this2.getCelsius(temperatureMin), "</li>\n      <li>precipitation probability: ").concat(_this2.getPercent(precipProbability), "</li>\n      <li>precipitation: ").concat((precipIntensity * 25.4 * 24).toFixed(2), " mm</li>\n      <li>wind: ").concat(_this2.getDirection(windBearing), " ").concat(_this2.getBeaufort(windSpeed), " (gusts: ").concat(_this2.getBeaufort(windGust), ")</li>\n      <li>relative humidity: ").concat((humidity * 100).toFixed(0), " %</li>\n      ");

        if (i != 0 && i != 1) {
          var currentDate = new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000);
          var currentDay = currentDate.getDate();
          var currentMonth = currentDate.getMonth() + 1;
          var currentYear = currentDate.getFullYear();
          var dateCont = document.querySelector("#day-".concat(i));
          dateCont.innerHTML = "".concat(currentDay, "/").concat(currentMonth, "/").concat(currentYear);
        }
      });
    }
  }, {
    key: "evalTodayData",
    value: function evalTodayData(data) {
      var icon = data.icon,
          summary = data.summary,
          temperature = data.temperature,
          pressure = data.pressure,
          apparentTemperature = data.apparentTemperature,
          precipProbability = data.precipProbability,
          windBearing = data.windBearing,
          windSpeed = data.windSpeed,
          windGust = data.windGust,
          humidity = data.humidity;
      var container = document.querySelector("#currentWeather");
      container.innerHTML = summary;
      var temperatureContainer = document.querySelector("#currentTemp");
      var tempC = this.getCelsius(temperature);
      temperatureContainer.innerHTML = "current temperature: ".concat(tempC);
      var feelsContainer = document.querySelector("#feels");
      feelsContainer.innerHTML = "feels like: ".concat(this.getCelsius(apparentTemperature));
      var precipContainer = document.querySelector("#precip");
      precipContainer.innerHTML = "precipitation probability: ".concat(this.getPercent(precipProbability));
      var pressureContainer = document.querySelector("#currentPressure");
      pressureContainer.innerHTML = "air pressure: ".concat(pressure, " mbar");
      var windContainer = document.querySelector("#wind");
      windContainer.innerHTML = "wind: ".concat(this.getDirection(windBearing), " ").concat(this.getBeaufort(windSpeed), " (gusts: ").concat(this.getBeaufort(windGust), ")");
      var HumidContainer = document.querySelector("#curHumid");
      HumidContainer.innerHTML = "relative humidity: ".concat((100 * humidity).toFixed(0), " %");
      var imageContainer = document.querySelector("#todayImage");
      imageContainer.innerHTML = this.getImage(icon);
    }
  }, {
    key: "getCelsius",
    value: function getCelsius(fahrenheit) {
      var celsius = (fahrenheit - 32) * 5 / 9;

      if (celsius.toFixed(0) == "-0") {
        return "".concat((-1 * celsius).toFixed(0), " \xB0C");
      } else {
        return "".concat(celsius.toFixed(0), " \xB0C");
      }
    }
  }, {
    key: "getBeaufort",
    value: function getBeaufort(speed) {
      if (speed <= 1) {
        return "0 Bft";
      } else if (speed <= 3) {
        return "1 Bft";
      } else if (speed <= 7) {
        return "2 Bft";
      } else if (speed <= 12) {
        return "3 Bft";
      } else if (speed <= 18) {
        return "4 Bft";
      } else if (speed <= 24) {
        return "5 Bft";
      } else if (speed <= 31) {
        return "6 Bft";
      } else if (speed <= 38) {
        return "7 Bft";
      } else if (speed <= 46) {
        return "8 Bft";
      } else if (speed <= 54) {
        return "9 Bft";
      } else if (speed <= 63) {
        return "10 Bft";
      } else if (speed <= 72) {
        return "11 Bft";
      } else {
        return "12 Bft";
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this3 = this;

      var secret_key = "ce21c715df0406faa728eb66e0d41cd7";
      var proxy = "https://cors-anywhere.herokuapp.com";
      var url = "".concat(proxy, "/https://api.darksky.net/forecast/").concat(secret_key, "/").concat(this.lat, ",").concat(this.lng);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        // console.log(data);
        _this3.evalData(data);
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "getDirection",
    value: function getDirection(angle) {
      if (angle == undefined) {
        return "";
      } else if (angle >= 0 && angle < 15) {
        return "N";
      } else if (angle >= 15 && angle < 30) {
        return "NNE";
      } else if (angle >= 30 && angle < 60) {
        return "NE";
      } else if (angle >= 60 && angle < 75) {
        return "ENE";
      } else if (angle >= 75 && angle < 105) {
        return "E";
      } else if (angle >= 105 && angle < 120) {
        return "ESE";
      } else if (angle >= 120 && angle < 150) {
        return "SE";
      } else if (angle >= 150 && angle < 165) {
        return "SSE";
      } else if (angle >= 165 && angle < 195) {
        return "S";
      } else if (angle >= 195 && angle < 210) {
        return "SSW";
      } else if (angle >= 210 && angle < 240) {
        return "SW";
      } else if (angle >= 240 && angle < 255) {
        return "WSW";
      } else if (angle >= 255 && angle < 285) {
        return "W";
      } else if (angle >= 285 && angle < 300) {
        return "WNW";
      } else if (angle >= 300 && angle < 330) {
        return "NW";
      } else if (angle >= 330 && angle < 345) {
        return "NNW";
      } else if (angle >= 345) {
        return "N";
      }
    }
  }, {
    key: "getImage",
    value: function getImage(type) {
      switch (type) {
        case "rain":
          return "<img src=\"assets/img/rain.jpg\" alt=\"rain\" title=\"rain\">";
          break;

        case "sleet":
          return "<img src=\"assets/img/sleet.jpg\" alt=\"sleet\" title=\"sleet\">";
          break;

        case "cloudy":
          return "<img src=\"assets/img/clouds.jpg\" alt=\"cloudy\" title=\"cloudy\">";
          break;

        case "partly cloudy":
          return "<img src=\"assets/img/clouds.jpg\" alt=\"partly cloudy title=\"partly cloudy\">";
          break;

        case "partly-cloudy-day":
          return "<img src=\"assets/img/clouds.jpg\" alt=\"partly cloudy day\" title=\"partly cloudy day\">";
          break;

        case "partly-cloudy-night":
          return "<img src=\"assets/img/clouds.jpg\" alt=\"partly cloudy night\" title=\"partly cloudy night\">";
          break;

        case "clear-day":
          return "<img src=\"assets/img/clear.jpg\" alt=\"clear day\" title=\"clear day\">";
          break;

        case "clear-night":
          return "<img src=\"assets/img/clear.jpg\" alt=\"clear night\" title=\"clear night\">";
          break;

        case "sun":
          return "<img src=\"assets/img/sun.jpg\" alt=\"sun\" title=\"sun\">";
          break;

        case "thunderstorm":
          return "<img src=\"assets/img/thunderstorm.jpg\" alt=\"thunderstorm\" title=\"thunderstorm\">";
          break;

        case "snow":
          return "<img src=\"assets/img/snow.jpg\" alt=\"snow\" title=\"snow\">";
          break;

        case "fog":
          return "<img src=\"assets/img/fog.jpg\" alt=\"fog\" title=\"fog\">";
          break;

        case "wind":
          return "<img src=\"assets/img/wind.jpg\" alt=\"wind\" title=\"wind\">";
          break;
      }
    }
  }, {
    key: "getPercent",
    value: function getPercent(value) {
      return "".concat((100 * value).toFixed(0), " %");
    }
  }, {
    key: "lat",
    get: function get() {
      return this._lat;
    },
    set: function set(newLat) {
      this._lat = newLat;
    }
  }, {
    key: "lng",
    get: function get() {
      return this._lng;
    },
    set: function set(newLng) {
      this._lng = newLng;
    }
  }, {
    key: "place",
    get: function get() {
      return this._place;
    },
    set: function set(newPlace) {
      this._place = newPlace;
    }
  }]);

  return Weather;
}();

var myWeather = new Weather("Berlin", "52.520008", "13.404954");

/***/ }),

/***/ "./src/assets/scss/styles.scss":
/*!*************************************!*\
  !*** ./src/assets/scss/styles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
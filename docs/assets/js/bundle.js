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
  function Weather(lat, lng) {
    _classCallCheck(this, Weather);

    this.lat = lat;
    this.lng = lng;
    this.getData();
  }

  _createClass(Weather, [{
    key: "evalData",
    value: function evalData(data) {
      var currently = data.currently,
          daily = data.daily;
      this.evalTodayData(currently);
      this.evalFollowing(daily);
    }
  }, {
    key: "evalFollowing",
    value: function evalFollowing(daily) {
      var _this = this;

      var data = daily.data;
      var date = new Date();
      data.forEach(function (day, i) {
        var imgCont = document.querySelector("#imag-".concat(i));
        var sumCont = document.querySelector("#summ-".concat(i));
        var maxCont = document.querySelector("#high-".concat(i));
        var minCont = document.querySelector("#low-".concat(i));
        var precCont = document.querySelector("#prec-".concat(i));
        var icon = day.icon,
            summary = day.summary,
            temperatureMax = day.temperatureMax,
            temperatureMin = day.temperatureMin,
            precipProbability = day.precipProbability;
        imgCont.innerHTML = _this.getImage(icon);
        sumCont.innerHTML = summary;
        maxCont.innerHTML = "maximum: ".concat(_this.getCelsius(temperatureMax));
        minCont.innerHTML = "minimum: ".concat(_this.getCelsius(temperatureMin));
        precCont.innerHTML = "precipitation probability: ".concat(_this.getPercent(precipProbability));

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
          precipProbability = data.precipProbability;
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
      var imageContainer = document.querySelector("#todayImage");
      imageContainer.innerHTML = this.getImage(icon);
    }
  }, {
    key: "getCelsius",
    value: function getCelsius(fahrenheit) {
      var celsius = (fahrenheit - 32) * 5 / 9;
      return "".concat(celsius.toFixed(0), " \xB0C");
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this2 = this;

      var secret_key = "ce21c715df0406faa728eb66e0d41cd7";
      var url = "https://api.darksky.net/forecast/".concat(secret_key, "/").concat(this.lat, ",").concat(this.lng);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.evalData(data);

        console.log(data);
      }).catch(function (error) {
        return console.log(error);
      });
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
      }
    }
  }, {
    key: "getPercent",
    value: function getPercent(value) {
      return "".concat((100 * value).toFixed(0), " %");
    }
  }]);

  return Weather;
}();

var myWeather = new Weather("52.520008", "13.404954");

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
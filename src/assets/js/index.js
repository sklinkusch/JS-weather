import "@scss/styles.scss";

const secret_key = "ce21c715df0406faa728eb66e0d41cd7";
const lat = "52.520008";
const lng = "13.404954";
const url = `https://api.darksky.net/forecast/${secret_key}/${lat},${lng}`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

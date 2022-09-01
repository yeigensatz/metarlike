const { Metar } = require("@flybywiresim/api-client");

export function getMetar(icao, source) {
  Metar.get(icao, source)
    .then((data) => {
      return data;
      console.log(data);
    })
    .catch((err) => {
      throw err;
    });
}

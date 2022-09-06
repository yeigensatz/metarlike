import base from "daisyui/dist/base";
import { ClientRequest } from "http";
import { useState, useEffect } from "react";
import metarParser from "aewx-metar-parser";
import airports from "airport-codes";

function Mainpage(props) {
  let [airporticao, setIcao] = useState("");
  let parsed = "";
  let airportName;

  const airports = require("airport-codes");
  const { metar, fetching, icao } = props;
  //useeffect update when props.icao has changed

  if (airporticao == "") {
    setIcao("LSZH");
    setIcao(props.icao);
    airportName = airports.findWhere({ icao: airporticao }).get("name");
  }

  console.log(metar);
  return (
    <>
      {icao === null ? (
        <>{fetching ? <></> : <></>}</>
      ) : (
        <>
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            {airportName} - METAR
          </div>
        </>
      )}
    </>
  );
}
export default Mainpage;
/*<div className="flex flex-col justify-center items-center">
  <h1>{props.icao} - METAR</h1>
</div>;*/

import base from "daisyui/dist/base";
import { ClientRequest } from "http";
import { useState, useEffect } from "react";
import metarParser from "aewx-metar-parser";
import airports from "airport-codes";

let parsed = "";

function Mainpage(props) {
  const airports = require("airport-codes");
  const { metar, fetching, icao } = props;
  let airporticao = "KJFK";
  let airportName = airports.findWhere({ icao: airporticao }).get("name");

  console.log(metar);
  return (
    <>
      {metar === null ? (
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

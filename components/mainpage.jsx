import base from "daisyui/dist/base";
import { ClientRequest } from "http";
import { useState, useEffect } from "react";
import metarParser from "aewx-metar-parser";

let parsed = "";

function Mainpage(props) {
  const { metar, fetching } = props;
  console.log(metar);
  return (
    <>
      {metar === null ? (
        <>{fetching ? <></> : <></>}</>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center">
            <h1>{props.metar.icao} - METAR</h1>
          </div>
        </>
      )}
    </>
  );
}
export default Mainpage;

import base from "daisyui/dist/base";
import { ClientRequest } from "http";
import { useState, useEffect } from "react";
import MetarForm from "./metarform";
import metarParser from "aewx-metar-parser";

let parsed = "";

function Mainpage(props) {
  console.log(props.data);

  //BUG Not working
  /*async function parseMetar(metar) {
    if (!metar) return;
    parsed = metarParser(metar);
  }

  parseMetar(props.data);
*/
  return (
    <div>
      <p>{parsed}</p>
    </div>
  );
}
export default Mainpage;

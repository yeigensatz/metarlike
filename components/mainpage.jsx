import base from "daisyui/dist/base";
import { ClientRequest } from "http";
import { useState, useEffect } from "react";
import MetarForm from "./metarform";
import metarParser from "aewx-metar-parser";

let parsed = "";

async function Mainpage(props) {
  console.log(props);
  const [fetching, setFetching] = useState();

  //wait until props is updated, then console.log(props.barometer.mb)
  useEffect(() => {
    console.log(props);
  }, [props]);

  //BUG Not working
  /*async function parseMetar(metar) {
    if (!metar) return;
    parsed = metarParser(metar);
  }

  parseMetar(props.data);
*/
  return (
    <div>
      <p>{props.barometer.mb}</p>
    </div>
  );
}
export default Mainpage;

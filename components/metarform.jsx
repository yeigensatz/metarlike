import { useState } from "react";
import Footer from "./footer";
import Mainpage from "./mainpage";

const source = "vatsim";

export default function MetarForm() {
  const [input, setInput] = useState("");
  const [data, setData] = useState();

  async function handleClick() {
    let icao = input;
    let response = await fetch(
      `https://api.flybywiresim.com/metar/${icao}?source=${source}`
    );
    let jsonResponse = await response.json();
    setData(jsonResponse.metar);
  }

  function handleInput(event) {
    let val = event.target.value;
    setInput(val);
  }

  return (
    <div>
      <div className="space-x-5">
        <div className="flex-none">
          <div className="form-control">
            <input
              type="text"
              name="search"
              id="search"
              onChange={handleInput}
              required
              maxLength="4"
              placeholder="Search Airport ICAO"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-outline btn-accent" onClick={handleClick}>
            Search...
          </button>
          <p></p>
        </div>
        <Mainpage data={data} />
        <Footer data={data} />
      </div>
    </div>
  );
}

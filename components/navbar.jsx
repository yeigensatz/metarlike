import base from "daisyui/dist/base";
import { ClientRequest } from "http";
import Mainpage from "./mainpage";
import Footer from "./footer";
import { useState } from "react";
import metarParser from "aewx-metar-parser";

export default function NavBar() {
  const source = "vatsim";
  const [input, setInput] = useState("");
  const [data, setData] = useState();

  function showAlert(reason) {
    return (
      <div className="alert alert-error shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{reason}</span>
        </div>
      </div>
    );
  }
  async function handleClick() {
    let icao = input;
    if (icao.length !== 4) {
      showAlert("S");
      console.error("ICAO code must be atleast 4 letters");
      return;
    }
    let response = await fetch(
      `https://api.flybywiresim.com/metar/${icao}?source=${source}`
    );
    let jsonResponse = await response.json();
    setData(jsonResponse.metar);
    let parsed = metarParser(jsonResponse.metar);
    //TODO
    console.error(jsonResponse.metar)
    console.warn(parsed);
    console.log(parsed);

  }

  function handleInput(event) {
    let val = event.target.value;
    setInput(val);
  }

  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <a href="#" className="btn btn-ghost normal-case text-xl">
          metarLike
        </a>
        <div className="dropdown justify-center">
          <label tabIndex="0" className="btn m-1">
            Set Source
          </label>
          <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Vatsim</a>
            </li>
            <li>
              <a>IVAO</a>
            </li>
            <li>
              <a>PilotEdge</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="space-x-5">
          <div className="flex-none">
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

            <button
              className="btn btn-outline btn-accent"
              onClick={handleClick}
            >
              Search...
            </button>
          </div>

          <Mainpage data={data}></Mainpage>
          <Footer data={data} />
        </div>
      </div>
    </nav>
  );
}

import base from "daisyui/dist/base";
import { ClientRequest } from "http";
import Mainpage from "./mainpage";
import Footer from "./footer";
import { useState } from "react";
import metarParser from "aewx-metar-parser";
import { ToastContainer, toast } from "react-toastify";

export default function NavBar() {
  let [invalid, setInvalid] = useState(true);
  let [source, setSource] = useState("vatsim");
  let [icao, setIcao] = useState("");
  let [loading, setLoading] = useState(false);
  let [metar, setMetar] = useState(null);
  let [metarRaw, setMetarRaw] = useState(null);
  let [fetching, setFetching] = useState(false);

  function handleKey(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  let handleClick = async () => {
    if (invalid === false) {
      setFetching(true);
      setMetar(null);
      setLoading(true);
      var metarRes, metarJson;
      try {
        metarRes = await fetch(
          `https://api.flybywiresim.com/metar/${icao}?source=${source}`
        );
        metarJson = await metarRes.json();
      } catch (error) {
        setLoading(false);
        setFetching(false);
        setInvalid(true);
        setMetar(null);
        return toast("ICAO not found");

        return console.error("Airport not found!");
      }
      setLoading(false);
      setMetar(metarJson.data);
      setFetching(false);
      console.log(metarJson);
      // await setMetar(metarParser(metarJson));
      setMetarRaw(metarJson);
    } else {
      toast("weirdo error");
    }
  };

  function handleInput(event) {
    let val = event.target.value;
    if (val.length !== 4) {
      setInvalid(true);
    } else {
      setInvalid(false);
      setIcao(val);
    }
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
          <ul
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            onChange={setSource}
            value={source}
          >
            <li>
              <a
                onClick={() => {
                  setSource("vatsim");
                  console.log("Vatsim source selected");
                }}
              >
                Vatsim
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  setSource("ivao") && console.log("IVAO source selected")
                }
              >
                IVAO
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  setSource("pilotedge") &&
                  console.log("PilotEdge source selected")
                }
              >
                PilotEdge
              </a>
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
              isInvalid={invalid}
              onChange={handleInput}
              onKeyPress={handleKey}
              required
              maxLength="4"
              placeholder="Search Airport ICAO"
              className="input input-bordered"
            />

            <button
              className="btn btn-outline btn-accent"
              isLoading={loading}
              onClick={handleClick}
            >
              Search...
            </button>
          </div>
        </div>
      </div>

      <Mainpage metar={metarRaw} fetching={fetching}></Mainpage>
      <Footer metar={metarRaw} fetching={fetching} />
    </nav>
  );
}

import base from "daisyui/dist/base";
import { ClientRequest } from "http";
import Mainpage from "./mainpage";
import Footer from "./footer";
import { useState } from "react";
import metarParser from "aewx-metar-parser";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { Metar } from "@flybywiresim/api-client";

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
        /*metarRes = await fetch(
          `https://api.flybywiresim.com/metar/${icao}?source=${source}`
        );*/
        Metar.get(icao, source)
          .then((data) => {
            console.log(data);
            setMetarRaw(data.metar);
            setIcao(data.icao);
            //setMetarRaw(data);
            metarJson = data.metar;
          })
          .catch((err) => {
            console.error(err);
            setLoading(false);
            setFetching(false);
            setInvalid(true);
            setMetar(null);
            return toast("ICAO not found");

            return console.error("Airport not found!");
          });
      } catch (err) {
        console.error(err);
      }
      //metarJson = await metarRes.json();
      setLoading(false);
      setMetar(metarJson);
      setFetching(false);
      console.log(metarJson);
      // await setMetar(metarParser(metarJson));
      setMetarRaw(metarJson);
    } else {
      toast("weirdo error");
    }
  };

  const toastSuccess = (text) => toast.success(text);
  const toastError = (text) => toast.error(text);
  const toastNormal = (text) => toast(text);
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
      <Toaster />
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
              <button
                className="btn btn-ghost"
                onClick={() => {
                  try {
                    setSource("vatsim");
                    toastSuccess("VATSIM source selected");
                  } catch (error) {
                    toastError(
                      "An error occured. Please try again or contact an administrator."
                    );
                  }
                }}
              >
                <a>Vatsim</a>
              </button>
            </li>
            <li>
              <button
                className="btn btn-ghost"
                onClick={() => {
                  try {
                    setSource("IVAO");
                    toastSuccess("IVAO source selected");
                  } catch (error) {
                    toastError(
                      "An error occured. Please try again or contact an administrator."
                    );
                  }
                }}
              >
                <a>IVAO</a>
              </button>
            </li>
            <li>
              <button
                disabled="disabled"
                className="btn"
                onClick={() => {
                  try {
                    setSource("msfs");
                    toastSuccess("MSFS2020 source selected");
                  } catch (error) {
                    toastError(
                      "An error occured. Please try again or contact an administrator."
                    );
                  }
                }}
              >
                <a>MSFS2020</a>
              </button>
            </li>
            <li>
              <button
                className="btn btn-ghost"
                onClick={() => {
                  try {
                    setSource("pilotedge");
                    toastSuccess("PilotEdge source selected");
                  } catch (error) {
                    toastError(
                      "An error occured. Please try again or contact an administrator."
                    );
                  }
                }}
              >
                <a>PilotEdge</a>
              </button>
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
              isinvalid={invalid.toString()}
              onChange={handleInput}
              onKeyPress={handleKey}
              required
              maxLength="4"
              placeholder="Search Airport ICAO"
              className="input input-bordered"
            />

            <button
              className="btn btn-outline btn-accent"
              isloading={loading.toString()}
              onClick={handleClick}
            >
              Search...
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
/*<Mainpage metar={metarRaw} fetching={fetching} icao={icao}></Mainpage>
      <Footer metar={metarRaw} fetching={fetching} icao={icao} />
    */

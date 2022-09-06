import React, { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Metar } from "@flybywiresim/api-client";
import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export default function Test() {
  let icao = "LSZH";
  let source = "ms";
  Metar.get(icao, source)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <div>
      <Toaster />
    </div>
  );
}

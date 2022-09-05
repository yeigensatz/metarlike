import React, { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export default function Test() {
  const notify = () => toast.success("Wow so easy !");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <Toaster />
    </div>
  );
}

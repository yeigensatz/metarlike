import base from "daisyui/dist/base";
import { ClientRequest } from "http";
import MetarForm from "./metarform";

function footer(props) {
  return (
    <footer className="footer footer-center p-4 left-0 bg-base-300 text-base-content absolute bottom-0">
      <div>
        <p>{props.data}</p>
      </div>
    </footer>
  );
}

export default footer;

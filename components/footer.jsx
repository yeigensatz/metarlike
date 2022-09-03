import base from "daisyui/dist/base";
import { ClientRequest } from "http";

function footer(props) {
  return (
    <footer className="footer footer-center p-4 left-0 bg-base-300 text-base-content absolute bottom-0 ">
      <div>
        <p>{props.metar}</p>
      </div>
    </footer>
  );
}

export default footer;

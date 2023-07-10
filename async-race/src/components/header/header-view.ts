import { Elem } from "../../types/type";
import createButton from "../../utils/createButton";
import createElement from "../../utils/createElement";
import garage from "../garage/garage-view";
import winner from "../winner/winners";
// import { garage } from "../view";
// import winners from "../winner/winners";
import "./header.scss";

const garageCallback: Elem["callback"] = () => {
  garage.classList.remove("hidden");
  winner.classList.add("hidden");
};
const garageButton = createButton(
  ["button", "garage-btn"],
  "To garage",
  garageCallback,
);

const winnersCallback: Elem["callback"] = () => {
  winner.classList.remove("hidden");
  garage.classList.add("hidden");
};
const winnersButton = createButton(
  ["button", "winners-btn"],
  "To winners",
  winnersCallback,
);

export default function createHeader(): HTMLElement {
  const headerOptions: Elem = {
    tag: "header",
    className: ["header"],
  };

  const header = createElement(headerOptions);
  header.append(garageButton, winnersButton);
  return header;
}

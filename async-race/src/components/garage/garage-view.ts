import "./garage.scss";
import createElement from "../../utils/createElement";
import createSelectView from "./select/select-view";
import createGarageView from "./main/main-view";

function createGarage(): HTMLElement {
  const garage = createElement({
    tag: "main",
    className: ["garage-view"],
  });
  const garageView = createGarageView();
  const selection = createSelectView(garageView);
  garage.append(selection, garageView);
  return garage;
}

const garage = createGarage();

export default garage;

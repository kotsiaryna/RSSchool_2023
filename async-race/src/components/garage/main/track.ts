import carImage from "../../../assets/icons/car.";
import { Car, Elem } from "../../../types/type";
import createButton from "../../../utils/createButton";
import createElement from "../../../utils/createElement";

function createButtonCont(carName: Car["name"]): HTMLElement {
  const cont = createElement({
    tag: "div",
    className: ["track__controls"],
  });

  const selectCar: Elem["callback"] = () => {};
  const selectButton = createButton(
    ["button", "select-btn"],
    "select",
    selectCar,
  );

  const removeCar: Elem["callback"] = () => {};
  const removeButton = createButton(
    ["button", "remove-btn"],
    "remove",
    removeCar,
  );

  const name = createElement({
    tag: "span",
    className: ["name"],
    text: carName,
  });

  cont.append(selectButton, removeButton, name);
  return cont;
}

const createDriveButtonsCont = (): HTMLElement => {
  const cont = createElement({
    tag: "div",
    className: ["track__drive"],
  });
  const startEngine: Elem["callback"] = () => {};
  const startButton = createButton(["button", "start"], "Start", startEngine);

  const stopEngine: Elem["callback"] = () => {};
  const stopButton = createButton(["button", "stop"], "Stop", stopEngine);
  cont.append(startButton, stopButton);
  return cont;
};

const createCar = (): HTMLElement => {
  const wrapper = createElement({
    tag: "div",
    className: ["car"],
  });
  // const obj = document.createElement("object");
  // obj.data = "../../../assets/icons/car.svg";
  // obj.type = "image/svg+xml";
  // obj.setAttribute("width", "60px");
  // obj.setAttribute("height", "30px");
  // wrapper.append(obj);
  wrapper.innerHTML = carImage;
  return wrapper;
};

export default function createTrack(car: Car): HTMLElement {
  const track = createElement({
    tag: "div",
    className: ["track"],
  });

  const buttonCont = createButtonCont(car.name);
  const driveButtonsCont = createDriveButtonsCont();
  const carWrapper = createCar();
  const carImg = carWrapper.firstElementChild as SVGImageElement;
  carImg.setAttribute("fill", car.color);
  track.append(buttonCont, driveButtonsCont, carImg);

  return track;
}

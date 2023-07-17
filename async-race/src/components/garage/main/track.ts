import carImage from "../../../assets/icons/car.";
import { select } from "../../../callbacks/edit";
// eslint-disable-next-line import/no-cycle
import remove from "../../../callbacks/remove";
import { startAnimation, stopAnimation } from "../../../callbacks/animation";
import { Car } from "../../../types/type";
import createButton from "../../../utils/createButton";
import createElement from "../../../utils/createElement";

function createButtonCont(carName: Car["name"]): HTMLElement {
  const cont = createElement({
    tag: "div",
    className: ["track__controls"],
  });

  // const selectCar: Elem["callback"] = () => {};
  const selectButton = createButton(["button", "select-btn"], "select", select);

  // const removeCar: Elem["callback"] = () => {};
  const removeButton = createButton(["button", "remove-btn"], "remove", remove);

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
  // const startEngine: Elem["callback"] = () => {};
  const startButton = createButton(
    ["button", "start"],
    "Start",
    startAnimation,
  );

  // const stopEngine: Elem["callback"] = () => {};
  const stopButton = createButton(["button", "stop"], "Stop", stopAnimation);
  stopButton.disabled = true;
  cont.append(startButton, stopButton);
  return cont;
};

const createCar = (): HTMLElement => {
  const wrapper = createElement({
    tag: "div",
    className: ["car"],
  });
  wrapper.innerHTML = carImage;
  return wrapper;
};

export default function createTrack(car: Car): HTMLElement {
  const track = createElement({
    tag: "div",
    className: ["track"],
  });
  track.id = car.id.toString();

  const buttonCont = createButtonCont(car.name);
  const driveButtonsCont = createDriveButtonsCont();
  const carWrapper = createCar();
  const carImg = carWrapper.firstElementChild as SVGImageElement;
  carImg.setAttribute("fill", car.color);
  track.append(buttonCont, driveButtonsCont, carImg);

  return track;
}

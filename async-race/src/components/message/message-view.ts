import "./message.scss";
import { Car, Elem } from "../../types/type";
import createElement from "../../utils/createElement";

export default function addWinMessage(car: Car): void {
  const winTme = (car.distance / car.velocity / 1000).toFixed(2);
  const messageOptions: Elem = {
    tag: "div",
    className: ["message"],
    text: `${car.name} wins in ${winTme}s`,
  };
  const message = createElement(messageOptions);
  document.body.append(message);
}

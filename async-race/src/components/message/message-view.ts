import "./message.scss";
import { Car, Elem } from "../../types/type";
import createElement from "../../utils/createElement";

function createWinMessage(): HTMLElement {
  const messageOptions: Elem = {
    tag: "div",
    className: ["message"],
  };
  const message = createElement(messageOptions);
  return message;
}
export const message = createWinMessage();

export default function addWinMessageText(car: Car): void {
  const winTme = (car.distance / car.velocity / 1000).toFixed(2);
  message.textContent = `${car.name} wins in ${winTme}s`;
}

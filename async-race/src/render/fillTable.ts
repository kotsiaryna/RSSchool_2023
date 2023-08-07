import carImage from "../assets/icons/car.";
import { WINNERS_PER_PAGE } from "../callbacks/consts";
import { Winner } from "../types/type";
import createElement from "../utils/createElement";

export default function fillTable(
  winners: Winner[],
  page: number,
  placeToAppend: Element,
): void {
  let n = (page - 1) * WINNERS_PER_PAGE + 1;
  winners.forEach((winner) => {
    const row = createElement({ tag: "tr" });
    row.setAttribute("data-id", `${winner.id}`);
    const numberTD = createElement({
      tag: "td",
      text: `${n}`,
    });
    n += 1;
    const carTD = createElement({
      tag: "td",
    });
    carTD.innerHTML = carImage;
    carTD.firstElementChild.setAttribute("fill", winner.color);
    const nameTD = createElement({
      tag: "td",
      text: winner.name,
    });
    const winsTD = createElement({
      tag: "td",
      text: `${winner.wins}`,
    });
    const timeTd = createElement({
      tag: "td",
      text: `${winner.time}`,
    });
    row.append(numberTD, carTD, nameTD, winsTD, timeTd);
    placeToAppend.append(row);
  });
}

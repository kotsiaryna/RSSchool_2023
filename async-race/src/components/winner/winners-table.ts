import { getWinners } from "../../api/getData";
import carImage from "../../assets/icons/car.";
import createElement from "../../utils/createElement";

const createTableHead = (): HTMLElement => {
  const head = createElement({
    tag: "thead",
  });
  const row = createElement({
    tag: "tr",
  });

  const headings: string[] = ["Number", "Car", "Name", "Wins", "Best time (s)"];
  const headingElements = headings.map((el) =>
    createElement({
      tag: "th",
      text: el,
    }),
  );
  row.append(...headingElements);
  head.append(row);
  return head;
};

export default function createWinnersTable(): HTMLElement {
  const table = createElement({
    tag: "table",
    className: ["winners__table"],
  });

  const tableBody = createElement({ tag: "tbody" });
  const head = createTableHead();
  table.append(head, tableBody);

  return table;
}

export async function addWinners(placeToAppend: Element): Promise<void> {
  const winners = await getWinners();

  let n = 1;
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
  const heading = placeToAppend.closest(".winners").firstElementChild;
  heading.firstElementChild.textContent = `(${winners.length})`;
}

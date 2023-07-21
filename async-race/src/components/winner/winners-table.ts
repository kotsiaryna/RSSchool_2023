import { editWinners } from "../../api/getData";
import { getWinnersPage } from "../../api/getPage";
import sortTable from "../../callbacks/sort";
import fillTable from "../../render/fillTable";
import createElement from "../../utils/createElement";

const createSortedTH = (headingElements: HTMLElement[]): void => {
  const sortTH = [headingElements[3], headingElements[4]];
  const columnDataset = ["wins", "time"];
  sortTH.forEach((th, i) => {
    const arrowCont = createElement({
      tag: "div",
      className: ["sort"],
    });

    const sortUp = createElement({
      tag: "div",
      className: ["sort__up"],
    });
    sortUp.dataset.sortOrder = "ASC";
    sortUp.dataset.column = columnDataset[i];
    sortUp.addEventListener("click", sortTable);

    const sortDown = createElement({
      tag: "div",
      className: ["sort__down"],
    });
    sortDown.dataset.sortOrder = "DESC";
    sortDown.dataset.column = columnDataset[i];
    sortDown.addEventListener("click", sortTable);

    arrowCont.append(sortUp, sortDown);
    th.append(arrowCont);
  });
};

const createTableHead = (): HTMLElement => {
  const head = createElement({
    tag: "thead",
  });
  const row = createElement({
    tag: "tr",
  });
  const headings: string[] = ["№", "Car", "Name", "Wins", "Best time"];
  const headingElements = headings.map((el) =>
    createElement({
      tag: "th",
      text: el,
    }),
  );
  createSortedTH(headingElements);
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

export async function addWinners(
  placeToAppend: Element,
  pageNumber = 1,
): Promise<void> {
  const winners = await getWinnersPage(pageNumber);
  const editedWinners = await editWinners(winners);

  fillTable(editedWinners, pageNumber, placeToAppend);
}

import { editWinners } from "../api/getData";
import getSortedWinners from "../api/getSortedWinners";
import { addWinners } from "../components/winner/winners-table";
import fillTable from "./fillTable";

function checkActiveSort(place: HTMLElement): HTMLElement | null {
  const table = [...place.children].find((el) =>
    el.classList.contains("winners__table"),
  );
  const active = table.querySelector(".active");
  const activeSort = active as HTMLElement;
  return activeSort;
}

async function addSortedWinners(
  activeSort: HTMLElement,
  page: number,
  tbody: Element,
): Promise<void> {
  const toSort = activeSort.dataset.column;
  const { sortOrder } = activeSort.dataset;
  const sortedWinners = await getSortedWinners(page, toSort, sortOrder);
  const edittedSortedwinner = await editWinners(sortedWinners);
  fillTable(edittedSortedwinner, page, tbody);
}

const changeTableContent = (place: HTMLElement, page: number): void => {
  const activeSort = checkActiveSort(place);
  const tbody = [...place.children].find((el) =>
    el.classList.contains("winners__table"),
  ).lastElementChild;

  tbody.innerHTML = "";
  if (activeSort) {
    addSortedWinners(activeSort, page, tbody);
  } else {
    addWinners(tbody, page);
  }
};

export default changeTableContent;

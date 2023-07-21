import { editWinners, getWinners } from "../api/getData";
import getSortedWinners from "../api/getSortedWinners";
import winner from "../components/winner/winners";
import { addWinners } from "../components/winner/winners-table";
import fillTable from "./fillTable";
// import { Winner } from "../types/type";

export default async function updateWinnerTable(): Promise<void> {
  const page = +winner.children[1].firstElementChild.textContent.slice(1);
  const winnersList = await getWinners();
  const heading = winner.firstElementChild.firstElementChild;
  heading.textContent = `(${winnersList.length})`;
  const tbody = [...winner.children].find((el) =>
    el.classList.contains("winners__table"),
  ).lastElementChild;
  tbody.innerHTML = "";
  const thead = [...winner.children].find((el) =>
    el.classList.contains("winners__table"),
  ).firstElementChild;
  const activeSort: HTMLElement = thead.querySelector(".active");
  if (activeSort) {
    const { sortOrder, column } = activeSort.dataset;
    const sortedWinners = await getSortedWinners(page, column, sortOrder);
    const edittedSortedWinners = await editWinners(sortedWinners);
    fillTable(edittedSortedWinners, page, tbody);
  } else {
    addWinners(tbody, page);
  }
}

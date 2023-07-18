import { getWinners } from "../api/getData";
import winner from "../components/winner/winners";
import { addWinners } from "../components/winner/winners-table";

export default async function updateWinnerTable(): Promise<void> {
  const page = +winner.children[1].firstElementChild.textContent.slice(1);
  const winnersList = await getWinners();
  const heading = winner.firstElementChild.firstElementChild;
  heading.textContent = `(${winnersList.length})`;
  const tbody = [...winner.children].find((el) =>
    el.classList.contains("winners__table"),
  ).lastElementChild;
  tbody.innerHTML = "";
  addWinners(tbody, page);
}

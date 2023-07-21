import { getWinners } from "../api/getData";
import winner from "../components/winner/winners";
import changeTableContent from "./changeTableContext";

export default async function updateWinnerTable(): Promise<void> {
  const page = +winner.children[1].firstElementChild.textContent.slice(1);
  const winnersList = await getWinners();
  const heading = winner.firstElementChild.firstElementChild;
  heading.textContent = `(${winnersList.length})`;
  changeTableContent(winner, page);
}

import { getWinners } from "../api/getData";
import { winnersAmountView } from "../components/winner/heading-view";
import winner from "../components/winner/winners";
import changeTableContent from "./changeTableContext";

export default async function updateWinnerTable(): Promise<void> {
  const page = +winner.children[1].firstElementChild.textContent.slice(1);
  const winnersList = await getWinners();
  if (page * 10 >= winnersList.length) {
    const nextBtn = winner.children[2].lastElementChild as HTMLButtonElement;
    nextBtn.disabled = true;
  }
  // const heading = winner.firstElementChild.firstElementChild;
  winnersAmountView.textContent = `(${winnersList.length})`;
  changeTableContent(winner, page);
}

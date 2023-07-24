import { getWinners } from "../api/getData";
import { winnersAmountView } from "../components/winner/heading-view";
import { pageCountView } from "../components/winner/winner-page-view";
import winner from "../components/winner/winners";
import changeTableContent from "./changeTableContext";

export default async function updateWinnerTable(): Promise<void> {
  const page = +pageCountView.textContent.slice(1);
  const winnersList = await getWinners();
  console.log(page);
  console.log(winnersList.length);
  const nextBtn = winner.children[2].lastElementChild as HTMLButtonElement;
  if (page * 10 >= winnersList.length) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
  winnersAmountView.textContent = `(${winnersList.length})`;
  changeTableContent(winner, page);
}

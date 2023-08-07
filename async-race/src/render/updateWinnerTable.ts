import { getWinners } from "../api/api";
import { WINNERS_PER_PAGE } from "../callbacks/consts";
import { winnersAmountView } from "../components/winner/heading-view";
import { pageCountView } from "../components/winner/winner-page-view";
import winner from "../components/winner/winners";
import changeTableContent from "./changeTableContext";

export default async function updateWinnerTable(): Promise<void> {
  const page = +pageCountView.textContent.slice(1);
  const winnersList = await getWinners();
  const nextBtn = winner.children[2].lastElementChild as HTMLButtonElement;
  if (page * WINNERS_PER_PAGE >= winnersList.length) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
  winnersAmountView.textContent = `(${winnersList.length})`;
  changeTableContent(winner, page);
}

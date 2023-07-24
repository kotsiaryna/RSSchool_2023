import { nextCallback, prevCallback } from "../../callbacks/winnerPagination";
import createButton from "../../utils/createButton";
import createElement from "../../utils/createElement";
import { heading } from "./heading-view";
import { pageHeading } from "./winner-page-view";
import createWinnersTable from "./winners-table";
import "./winners.scss";

function createPagination(winners: HTMLElement): HTMLElement {
  const paginCont = createElement({
    tag: "div",
    className: ["winners__pagination"],
  });
  const prevBtn = createButton(["button", "prev"], "prev", (e) =>
    prevCallback(e, winners),
  );
  prevBtn.disabled = true;

  const nextBtn = createButton(["button", "next"], "next", (e) =>
    nextCallback(e, winners),
  );

  paginCont.append(prevBtn, nextBtn);
  return paginCont;
}

function createWinners(): HTMLElement {
  const winners = createElement({
    tag: "main",
    className: ["winners", "hidden"],
  });
  const paginCont = createPagination(winners);
  const table = createWinnersTable();
  winners.append(heading, pageHeading, paginCont, table);

  return winners;
}

const winner = createWinners();

export default winner;

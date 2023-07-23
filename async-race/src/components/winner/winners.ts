import { nextCallback, prevCallback } from "../../callbacks/winnerPagination";
import createButton from "../../utils/createButton";
import createElement from "../../utils/createElement";
import { heading } from "./heading-view";
import { pageHeading } from "./winner-page-view";
import createWinnersTable from "./winners-table";
import "./winners.scss";

// function createHeading(): HTMLElement {
//   const heading = createElement({
//     tag: "h2",
//     className: ["heading", "winners__heading"],
//     text: "Winners ",
//   });

//   const winnersAmount = 0;
//   const winnersAmountView = createElement({
//     tag: "span",
//     className: ["winners__count"],
//     text: `(${winnersAmount})`,
//   });
//   heading.append(winnersAmountView);
//   return heading;
// }

// function createPageView(): HTMLElement {
//   const pageHeading = createElement({
//     tag: "h3",
//     className: ["winners__pages"],
//     text: "Page ",
//   });

//   const pageCount = 1;
//   const pageCountView = createElement({
//     tag: "span",
//     className: ["pages__count"],
//     text: `#${pageCount}`,
//   });
//   pageHeading.append(pageCountView);
//   return pageHeading;
// }

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
  // const heading = createHeading();
  // const pages = createPageView();
  const paginCont = createPagination(winners);
  const table = createWinnersTable();
  winners.append(heading, pageHeading, paginCont, table);

  return winners;
}

const winner = createWinners();

export default winner;

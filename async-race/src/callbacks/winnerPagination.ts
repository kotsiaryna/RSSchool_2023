import { winnersAmountView } from "../components/winner/heading-view";
import { pageCountView } from "../components/winner/winner-page-view";
import changeTableContent from "../render/changeTableContext";
import { Elem } from "../types/type";
import { WINNERS_PER_PAGE } from "./consts";

export const nextCallback: Elem["callback"] = async (e, place) => {
  const nextBtn = e.target as HTMLButtonElement;
  const prevBtn = nextBtn.previousElementSibling as HTMLButtonElement;
  prevBtn.disabled = false;

  const currentPage = +pageCountView.textContent.slice(1);
  const nextPage = currentPage + 1;
  pageCountView.textContent = `#${nextPage}`;
  const amount = +winnersAmountView.textContent.slice(1, -1);
  if (nextPage * WINNERS_PER_PAGE >= amount) {
    nextBtn.disabled = true;
  }
  changeTableContent(place, nextPage);
};

export const prevCallback: Elem["callback"] = (e, place) => {
  const prevBtn = e.target as HTMLButtonElement;
  const nextBtn = prevBtn.nextElementSibling as HTMLButtonElement;
  nextBtn.disabled = false;

  const currentPage = +pageCountView.textContent.slice(1);
  const prevPage = currentPage - 1;
  pageCountView.textContent = `#${prevPage}`;
  if (prevPage === 1) prevBtn.disabled = true;
  changeTableContent(place, prevPage);
};

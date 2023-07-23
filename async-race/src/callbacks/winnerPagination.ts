import { winnersAmountView } from "../components/winner/heading-view";
import changeTableContent from "../render/changeTableContext";
import { Elem } from "../types/type";

export const nextCallback: Elem["callback"] = async (e, place) => {
  const nextBtn = e.target as HTMLButtonElement;
  const prevBtn = nextBtn.previousElementSibling as HTMLButtonElement;
  prevBtn.disabled = false;
  const pageSpan = place.children[1].firstElementChild;

  const currentPage = +pageSpan.textContent.slice(1);
  const nextPage = currentPage + 1;
  pageSpan.textContent = `#${nextPage}`;
  const amount = +winnersAmountView.textContent.slice(1, -1);
  if (nextPage * 10 >= amount) {
    nextBtn.disabled = true;
  }
  changeTableContent(place, nextPage);
};

export const prevCallback: Elem["callback"] = (e, place) => {
  const prevBtn = e.target as HTMLButtonElement;
  const nextBtn = prevBtn.nextElementSibling as HTMLButtonElement;
  nextBtn.disabled = false;
  const pageSpan = place.children[1].firstElementChild;

  const currentPage = +pageSpan.textContent.slice(1);
  const prevPage = currentPage - 1;
  pageSpan.textContent = `#${prevPage}`;
  if (prevPage === 1) prevBtn.disabled = true;
  changeTableContent(place, prevPage);
};

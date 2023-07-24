import { carsAmountView } from "../components/garage/main/heading-view";
import { pageCountView } from "../components/garage/main/page-view";
import updateTracks from "../render/updateTracks";
import { Elem } from "../types/type";

export const next: Elem["callback"] = async (e, place) => {
  const nextBtn = e.target as HTMLButtonElement;
  const prevBtn = nextBtn.previousElementSibling as HTMLButtonElement;
  prevBtn.disabled = false;

  const page = +pageCountView.textContent.slice(1);
  const nextPage = page + 1;
  pageCountView.textContent = `#${nextPage}`;
  const carsAmount = +carsAmountView.textContent.slice(1, -1);
  if ((page + 1) * 7 >= carsAmount) {
    nextBtn.disabled = true;
  }
  updateTracks(nextPage, place);
};

export const prev: Elem["callback"] = async (e, place) => {
  const prevBtn = e.target as HTMLButtonElement;
  const nextBtn = prevBtn.nextElementSibling as HTMLButtonElement;
  nextBtn.disabled = false;

  const page = +pageCountView.textContent.slice(1);
  const prevPage = page - 1;
  pageCountView.textContent = `#${prevPage}`;
  if (page === 2) prevBtn.disabled = true;
  updateTracks(prevPage, place);
};

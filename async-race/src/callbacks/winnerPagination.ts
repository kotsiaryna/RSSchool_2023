import { editWinners } from "../api/getData";
import getSortedWinners from "../api/getSortedWinners";
import { addWinners } from "../components/winner/winners-table";
import fillTable from "../render/fillTable";
import { Elem } from "../types/type";

function checkActiveSort(place: HTMLElement): HTMLElement | null {
  const table = [...place.children].find((el) =>
    el.classList.contains("winners__table"),
  );
  const active = table.querySelector(".active");
  const activeSort = active as HTMLElement;
  return activeSort;
}

async function addSortedWinners(
  activeSort: HTMLElement,
  page: number,
  tbody: Element,
): Promise<void> {
  const toSort = activeSort.dataset.column;
  const { sortOrder } = activeSort.dataset;
  const sortedWinners = await getSortedWinners(page, toSort, sortOrder);
  const edittedSortedwinner = await editWinners(sortedWinners);
  fillTable(edittedSortedwinner, page, tbody);
}

export const nextCallback: Elem["callback"] = async (e, place, heading) => {
  const nextBtn = e.target as HTMLButtonElement;
  const prevBtn = nextBtn.previousElementSibling as HTMLButtonElement;
  prevBtn.disabled = false;
  const pageSpan = place.children[1].firstElementChild;

  const currentPage = +pageSpan.textContent.slice(1);
  const nextPage = currentPage + 1;
  pageSpan.textContent = `#${nextPage}`;
  const amount = +heading.firstElementChild.textContent.slice(1, -1);
  if (nextPage * 10 >= amount) {
    nextBtn.disabled = true;
  }
  const tbody = nextBtn.parentElement.nextElementSibling.lastElementChild;
  tbody.innerHTML = "";
  const activeSort = checkActiveSort(place);
  if (activeSort) {
    addSortedWinners(activeSort, nextPage, tbody);
  } else {
    addWinners(tbody, nextPage);
  }
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

  const tbody = nextBtn.parentElement.nextElementSibling.lastElementChild;
  tbody.innerHTML = "";
  const activeSort = checkActiveSort(place);
  if (activeSort) {
    addSortedWinners(activeSort, prevPage, tbody);
  } else {
    addWinners(tbody, prevPage);
  }
};

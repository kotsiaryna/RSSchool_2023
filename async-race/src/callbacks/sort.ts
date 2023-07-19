import { editWinners } from "../api/getData";
import getSortedWinners from "../api/getSortedWinners";
import fillTable from "../render/fillTable";

const getPage = (table: Element): number => {
  const pageSpan =
    table.previousElementSibling.previousElementSibling.firstElementChild;
  const page = pageSpan.textContent.slice(1);
  return +page;
};

const sortTable = async (e: Event): Promise<void> => {
  const btn = e.target as HTMLElement;
  const table = btn.closest(".winners__table");

  const activeBtn = table.querySelector(".active");
  if (activeBtn) activeBtn.classList.remove("active");
  btn.classList.add("active");

  const page = getPage(table);
  const { sortOrder, column } = btn.dataset;
  const sortedWinners = await getSortedWinners(page, column, sortOrder);
  const edittedSortedWinners = await editWinners(sortedWinners);
  console.log(sortedWinners);

  const tbody = table.lastElementChild;
  tbody.innerHTML = "";
  fillTable(edittedSortedWinners, page, tbody);
};
export default sortTable;

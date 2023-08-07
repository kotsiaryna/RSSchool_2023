import { editWinners, getSortedWinners } from "../api/api";
import { pageCountView } from "../components/winner/winner-page-view";
import fillTable from "../render/fillTable";

const sortTable = async (e: Event): Promise<void> => {
  const btn = e.target as HTMLElement;
  const table = btn.closest(".winners__table");

  const activeBtn = table.querySelector(".active");
  if (activeBtn) activeBtn.classList.remove("active");
  btn.classList.add("active");

  const page = +pageCountView.textContent.slice(1);
  const { sortOrder, column } = btn.dataset;
  const sortedWinners = await getSortedWinners(page, column, sortOrder);
  const edittedSortedWinners = await editWinners(sortedWinners);

  const tbody = table.lastElementChild;
  tbody.innerHTML = "";
  fillTable(edittedSortedWinners, page, tbody);
};
export default sortTable;

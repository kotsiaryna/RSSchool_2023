import { getWinners } from "../api/getData";
import removeCar from "../api/removeCar";
import removeWinner from "../api/removeWinner";
import { pageCountView } from "../components/garage/main/page-view";
import winner from "../components/winner/winners";
import { Car } from "../types/type";

const updateAmount = (heading: Element): void => {
  const amountSpan = heading.firstElementChild;
  const amount = +amountSpan.textContent.slice(1, -1);
  amountSpan.textContent = `(${amount - 1})`;
};

const removeFromWinners = async (id: Car["id"]): Promise<void> => {
  const winners = await getWinners();
  const isWinner = !!winners.filter((el) => el.id === id).length;
  if (isWinner) removeWinner(id);
};

export default async function remove(e: Event): Promise<[number, HTMLElement]> {
  const { target } = e;
  const btn = target as HTMLElement;
  const track = btn.closest(".track");
  const { id } = track;
  const garage: HTMLElement = track.closest(".garage");
  const page = +pageCountView.textContent.slice(1);
  await removeFromWinners(+id);
  await removeCar(+id);
  updateAmount(garage.firstElementChild);
  const row = [...winner.children[2].children[1].children].find(
    (el) => el.id === id,
  );
  if (row) {
    row.remove();
  }
  track.remove();
  return [page, garage];
}

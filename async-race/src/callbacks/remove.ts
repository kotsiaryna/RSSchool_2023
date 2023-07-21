import { getWinners } from "../api/getData";
import removeCar from "../api/removeCar";
import removeWinner from "../api/removeWinner";
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

export default function remove(e: Event): [number, HTMLElement] {
  const { target } = e;
  const btn = target as HTMLElement;
  const track = btn.closest(".track");
  const { id } = track;
  const garage: HTMLElement = track.closest(".garage");
  const page = +garage.children[1].firstElementChild.textContent.slice(1);
  removeFromWinners(+id);
  removeCar(+id);
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

import { addTracks } from "./garage/main/main-view";
import garage from "./garage/garage-view";
import createHeader from "./header/header-view";
import winner from "./winner/winners";
import { addWinners } from "./winner/winners-table";

export default async function makeView(): Promise<void> {
  const header = createHeader();

  const totalCarsAmount = await addTracks(garage.children[1]);
  if (totalCarsAmount < 8) {
    const nextBtn = garage.lastElementChild.children[2]
      .lastElementChild as HTMLButtonElement;
    nextBtn.disabled = true;
  }

  const table = [...winner.children].find((el) =>
    el.classList.contains("winners__table"),
  );

  await addWinners(table.children[1]);

  document.body.append(header, garage, winner);
}

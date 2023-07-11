import { addTracks } from "./garage/main/main-view";
import garage from "./garage/garage-view";
import createHeader from "./header/header-view";
import winner from "./winner/winners";
import { addWinners } from "./winner/winners-table";

export default async function makeView(): Promise<void> {
  const header = createHeader();

  addTracks(garage.children[1]);
  addWinners(winner.children[2].children[1]);

  document.body.append(header, garage, winner);
}

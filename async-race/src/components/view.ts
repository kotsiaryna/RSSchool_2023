import { addTracks } from "./garage/main/main-view";
import garage from "./garage/garage-view";
import createHeader from "./header/header-view";
import winner from "./winner/winners";

export default async function makeView(): Promise<void> {
  const header = createHeader();
  console.log(garage);

  addTracks(garage.children[1]);

  document.body.append(header, garage, winner);
}

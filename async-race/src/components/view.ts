import garage from "./garage/garage-view";
import createHeader from "./header/header-view";
import winner from "./winner/winners";

export default function makeView(): void {
  const header = createHeader();

  document.body.append(header, garage, winner);
}

import { stopEngine } from "../api/api";
import { LEFT_PADDING } from "./consts";

export default async function resetRace(
  e: Event,
  garage: Element,
): Promise<void> {
  const resetBtn = e.target as HTMLButtonElement;
  const raceBtn = resetBtn.previousElementSibling as HTMLButtonElement;
  raceBtn.disabled = false;
  const tracks = [...garage.children].filter((el) =>
    el.classList.contains("track"),
  );

  const carsImg = tracks.map(
    (track) => track.lastElementChild,
  ) as SVGAElement[];

  carsImg.forEach((car) => {
    const elem = car;
    elem.style.left = `${LEFT_PADDING}px`;
  });

  const winMessage = [...document.body.children].find((el) =>
    el.classList.contains("message"),
  );
  if (winMessage) winMessage.remove();

  const IDs = tracks.map((track) => +track.id);
  IDs.forEach((id) => stopEngine(id));
}

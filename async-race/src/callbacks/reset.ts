import stopEngine from "../api/stopEngine";

export default async function resetRace(
  e: Event,
  garage: Element,
): Promise<void> {
  const tracks = [...garage.children].filter((el) =>
    el.classList.contains("track"),
  );

  const carsImg = tracks.map(
    (track) => track.lastElementChild,
  ) as SVGAElement[];

  carsImg.forEach((car) => {
    const elem = car;
    elem.style.left = `20px`;
  });

  const IDs = tracks.map((track) => +track.id);
  IDs.forEach((id) => stopEngine(id));
}

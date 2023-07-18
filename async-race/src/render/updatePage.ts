import { getGaragePage } from "../api/getPage";
// eslint-disable-next-line import/no-cycle
import createTrack from "../components/garage/main/track";

export default async function updatePage(
  n: number,
  place: Element,
): Promise<void> {
  const actualCars = await getGaragePage(n);
  console.log(actualCars);

  const currentCars = [...place.children].filter((elem) =>
    elem.classList.contains("track"),
  );
  console.log(currentCars);
  currentCars.forEach((car) => car.remove());

  actualCars.forEach((car) => {
    const track = createTrack(car);
    place.append(track);
  });
}

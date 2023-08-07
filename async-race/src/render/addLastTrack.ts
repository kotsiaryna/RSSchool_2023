import { getGaragePage } from "../api/api";
import { CARS_PER_PAGE } from "../callbacks/consts";
import createTrack from "../components/garage/main/track";

const addLastTrack = async (
  page: number,
  place: HTMLElement,
): Promise<void> => {
  const cars = await getGaragePage(page);
  if (cars.length === CARS_PER_PAGE) {
    const lastCar = cars.at(-1);
    const track = createTrack(lastCar);
    place.append(track);
  }
};

export default addLastTrack;

import { getGaragePage } from "../api/getPage";
import createTrack from "../components/garage/main/track";

const addLastTrack = async (
  page: number,
  place: HTMLElement,
): Promise<void> => {
  const cars = await getGaragePage(page);
  if (cars.length === 7) {
    const lastCar = cars.at(-1);
    const track = createTrack(lastCar);
    place.append(track);
  }
};

export default addLastTrack;

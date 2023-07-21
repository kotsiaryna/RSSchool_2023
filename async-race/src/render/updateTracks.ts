import { getGaragePage } from "../api/getPage";
import createTrack from "../components/garage/main/track";

const updateTracks = async (
  page: number,
  place: HTMLElement,
): Promise<void> => {
  const cars = await getGaragePage(page);
  const tracks = [...place.querySelectorAll(".track")];
  tracks.forEach((track) => track.remove());
  cars.forEach((car) => {
    const track = createTrack(car);
    place.append(track);
  });
};

export default updateTracks;

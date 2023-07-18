import { getGaragePage } from "../api/getPage";
import createTrack from "../components/garage/main/track";
import { Elem } from "../types/type";

export const next: Elem["callback"] = async (e, place, heading) => {
  const nextBtn = e.target as HTMLButtonElement;
  const prevBtn = nextBtn.previousElementSibling as HTMLButtonElement;
  prevBtn.disabled = false;
  const pageSpan = place.children[1].firstElementChild;

  const page = +pageSpan.textContent.slice(1);
  pageSpan.textContent = `#${page + 1}`;
  const carsAmount = +heading.firstElementChild.textContent.slice(1, -1);
  if ((page + 1) * 7 >= carsAmount) {
    nextBtn.disabled = true;
  }
  const cars = await getGaragePage(page + 1);
  const tracks = [...place.querySelectorAll(".track")];
  console.log(tracks);
  tracks.forEach((track) => track.remove());
  cars.forEach((car) => {
    const track = createTrack(car);
    place.append(track);
  });
};

export const prev: Elem["callback"] = async (e, place) => {
  const prevBtn = e.target as HTMLButtonElement;
  const nextBtn = prevBtn.nextElementSibling as HTMLButtonElement;
  nextBtn.disabled = false;

  const pageSpan = place.children[1].firstElementChild;
  const page = +pageSpan.textContent.slice(1);
  pageSpan.textContent = `#${page - 1}`;
  if (page === 2) prevBtn.disabled = true;
  const cars = await getGaragePage(page - 1);
  const tracks = [...place.querySelectorAll(".track")];
  tracks.forEach((track) => track.remove());
  cars.forEach((car) => {
    const track = createTrack(car);
    place.append(track);
  });
};

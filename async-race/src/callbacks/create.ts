import createCar from "../api/createCar";
// import garage from "../components/garage/garage-view";
import createTrack from "../components/garage/main/track";
import { Car } from "../types/type";

const getCarParams = (e: Event): Omit<Car, "id"> => {
  const { target } = e;
  const btn = target as HTMLElement;
  const colorInput = btn.previousElementSibling as HTMLInputElement;
  const nameInput = colorInput.previousElementSibling as HTMLInputElement;
  const carParams = {
    name: nameInput.value,
    color: colorInput.value,
  };
  colorInput.value = "";
  nameInput.value = "";
  return carParams;
};

const updateAmount = (heading: Element): number => {
  const amountSpan = heading.firstElementChild;
  const amount = +amountSpan.textContent.slice(1, -1);
  amountSpan.textContent = `(${amount + 1})`;
  return amount + 1;
};

const getPageN = (place: Element): number => {
  const pageSpan = place.children[1].firstElementChild;
  const page = +pageSpan.textContent.slice(1);
  return page;
};

const createCallback = async (
  e: Event,
  placeToAppend: HTMLElement,
): Promise<void> => {
  const carParams = getCarParams(e);
  const car = await createCar(carParams);

  const page = getPageN(placeToAppend);
  const amount = updateAmount(placeToAppend.firstElementChild);
  if (page * 7 >= amount) {
    const track = createTrack(car);
    placeToAppend.append(track);
  }
  const nextBtn = placeToAppend.children[2]
    .lastElementChild as HTMLButtonElement;
  if (amount > page * 7) {
    nextBtn.disabled = false;
  }
};

export default createCallback;

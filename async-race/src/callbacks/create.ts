import createCar from "../api/createCar";
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
  return carParams;
};

const updateAmount = (heading: Element): void => {
  const amountSpan = heading.firstElementChild;
  const amount = +amountSpan.textContent.slice(1, -1);
  amountSpan.textContent = `(${amount + 1})`;
};

const createCallback = async (
  e: Event,
  placeToAppend: HTMLElement,
): Promise<void> => {
  const carParams = getCarParams(e);
  const car = await createCar(carParams);
  const track = createTrack(car);
  placeToAppend.append(track);
  updateAmount(placeToAppend.firstElementChild);
};

export default createCallback;

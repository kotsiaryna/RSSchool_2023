import { createCar } from "../api/api";
import { carsAmountView } from "../components/garage/main/heading-view";
import { pageCountView } from "../components/garage/main/page-view";
import createTrack from "../components/garage/main/track";
import { Car } from "../types/type";
import { CARS_PER_PAGE } from "./consts";

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

const updateAmount = (): number => {
  const amount = +carsAmountView.textContent.slice(1, -1);
  const updatedAmount = amount + 1;
  carsAmountView.textContent = `(${updatedAmount})`;
  return updatedAmount;
};

const createCallback = async (
  e: Event,
  placeToAppend: HTMLElement,
): Promise<void> => {
  const carParams = getCarParams(e);
  const car = await createCar(carParams);

  const page = +pageCountView.textContent.slice(1);
  const amount = updateAmount();
  if (page * CARS_PER_PAGE >= amount) {
    const track = createTrack(car);
    placeToAppend.append(track);
  }
  const nextBtn = placeToAppend.children[2]
    .lastElementChild as HTMLButtonElement;
  if (amount > page * CARS_PER_PAGE) {
    nextBtn.disabled = false;
  }
};

export default createCallback;

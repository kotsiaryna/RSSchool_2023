import { createCar } from "../api/api";
import { carsAmountView } from "../components/garage/main/heading-view";
import { pageCountView } from "../components/garage/main/page-view";
import updateTracks from "../render/updateTracks";
import { Car } from "../types/type";
import { CAR_AMOUNT_TO_GENERATE } from "./consts";

const randomColor = (): string => {
  const color = `#${Math.random().toString(16).slice(3, 9)}`;
  return color;
};
const firstName: string[] = [
  "Ferrari",
  "Bugatti",
  "Porsche",
  "Toyota",
  "Audi",
  "Mercedes",
  "Eagle",
  "BMW",
  "Honda",
  "Subaru",
];
const lastName: string[] = [
  "Model_1",
  "Model_2",
  "Model_3",
  "Model_4",
  "Model_5",
  "Model_6",
  "Model_7",
  "Model_8",
  "Model_9",
  "Model_10",
];

const getRandomName = (array: string[]): string => {
  const randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
};

const generateCarParams = (): Omit<Car, "id">[] => {
  const carsOptions = [];
  for (let i = 0; i < CAR_AMOUNT_TO_GENERATE; i += 1) {
    const carParams = {
      name: `${getRandomName(firstName)} ${getRandomName(lastName)}`,
      color: randomColor(),
    };
    carsOptions.push(carParams);
  }
  return carsOptions;
};

const create100Cars = async (
  carsOptionsArray: Omit<Car, "id">[],
): Promise<Car[]> => {
  const promisedCars = carsOptionsArray.map((car) => createCar(car));
  const createdCars = await Promise.all(promisedCars);
  return createdCars;
};

const generateCallback = (e: Event, place: HTMLElement): void => {
  create100Cars(generateCarParams());

  const amount = +carsAmountView.textContent.slice(1, -1);
  const newAmount = amount + CAR_AMOUNT_TO_GENERATE;
  carsAmountView.textContent = `(${newAmount})`;

  const page = +pageCountView.textContent.slice(1);
  const nextBtn = place.children[2].lastElementChild as HTMLButtonElement;
  nextBtn.disabled = false;
  updateTracks(page, place);
};

export default generateCallback;

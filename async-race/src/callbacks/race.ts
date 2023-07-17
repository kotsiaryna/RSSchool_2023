import getPage from "../api/getPage";
import startEngine from "../api/startEngine";
import { Car } from "../types/type";
import { startDrive } from "./animation";

export default async function startRace(e: Event): Promise<Car> {
  const raceBtn = e.target as HTMLButtonElement;
  const garage = raceBtn.closest(".select").nextElementSibling;
  const page = +garage.children[1].firstElementChild.textContent.slice(1);
  const currentCars = await getPage(page);
  const promisedCars = currentCars.map((car) => startEngine(car.id));

  const carParams = await Promise.all(promisedCars);
  console.log(carParams);
  const promisedCarParams = carParams.map((params) =>
    startDrive(params, garage),
  );
  const winnerID = await Promise.any(promisedCarParams);
  const winner = currentCars.find((el) => el.id === winnerID);
  console.log(winner);
  return winner;
}

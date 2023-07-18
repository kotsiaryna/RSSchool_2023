import { getGaragePage } from "../api/getPage";
import startEngine from "../api/startEngine";
import addWinMessage from "../components/message/message-view";
import { Car } from "../types/type";
import addWinner from "../api/addWinner";
import { startDrive } from "./animation";

export default async function startRace(e: Event): Promise<Car> {
  const raceBtn = e.target as HTMLButtonElement;
  const garage = raceBtn.closest(".select").nextElementSibling;
  const page = +garage.children[1].firstElementChild.textContent.slice(1);
  const currentCars = await getGaragePage(page);
  const promisedCars = currentCars.map((car) => startEngine(car.id));

  const carParams = await Promise.all(promisedCars);
  console.log(carParams);
  const promisedCarParams = carParams.map((params) =>
    startDrive(params, garage),
  );
  const winnerID = await Promise.any(promisedCarParams);
  const winnerCar = currentCars.find((el) => el.id === winnerID);
  const winnerParams = carParams.find((param) => param.id === winnerID);
  const winner = { ...winnerCar, ...winnerParams };
  console.log(winner);
  addWinMessage(winner);
  addWinner(winner);
  return winner;
}

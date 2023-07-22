import { getGaragePage } from "../api/getPage";
import startEngine from "../api/startEngine";
import addWinMessage, { message } from "../components/message/message-view";
import { Car } from "../types/type";
import addWinner from "../api/addWinner";
import { startDrive } from "./animation";

const disableButtons = (buttons: HTMLButtonElement[]): void => {
  buttons.forEach((button) => {
    const el = button;
    el.disabled = true;
  });
};
const enableButtons = (buttons: HTMLButtonElement[]): void => {
  buttons.forEach((button) => {
    const el = button;
    if (!el.classList.contains("stop")) el.disabled = false;
  });
};

export default async function startRace(e: Event): Promise<Car> {
  const raceBtn = e.target as HTMLButtonElement;
  const resetBtn = raceBtn.nextElementSibling as HTMLButtonElement;
  const generateBtn = resetBtn.nextElementSibling as HTMLButtonElement;
  const garage = raceBtn.closest(".select").nextElementSibling;
  const buttons = [
    raceBtn,
    resetBtn,
    generateBtn,
    ...garage.querySelectorAll("button"),
  ];
  disableButtons(buttons);
  const page = +garage.children[1].firstElementChild.textContent.slice(1);
  const currentCars = await getGaragePage(page);
  const promisedCars = currentCars.map((car) => startEngine(car.id));
  const carParams = await Promise.all(promisedCars);
  const promisedCarParams = carParams.map((params) =>
    startDrive(params, garage),
  );
  const maxTime = Math.max(
    ...carParams.map((car) => car.distance / car.velocity),
  );
  setTimeout(() => {
    enableButtons(buttons);
  }, maxTime);
  let winner: Car;
  try {
    const winnerID = await Promise.any(promisedCarParams);
    const winnerCar = currentCars.find((el) => el.id === winnerID);
    const winnerParams = carParams.find((param) => param.id === winnerID);
    winner = { ...winnerCar, ...winnerParams };
    console.log(winner);
    addWinMessage(winner);
    addWinner(winner);
  } catch {
    message.textContent = "All cars have been broken";
    enableButtons(buttons);
  }
  return winner;
}

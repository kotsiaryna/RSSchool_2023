import { Car, Winner } from "../types/type";
import { BASEURL, endPoint } from "./urls";

export async function getCars(): Promise<Car[]> {
  const resp = await fetch(`${BASEURL}${endPoint.garage}`);
  const cars = await resp.json();
  return cars;
}

export async function getWinners(): Promise<Winner[]> {
  const cars = await getCars();

  const resp = await fetch(`${BASEURL}${endPoint.winners}`);
  const winners: Winner[] = await resp.json();
  const editWinners = winners
    .filter((winner) => cars.find((car) => car.id === winner.id))
    .map((winner) => {
      const currentCar = cars.find((car) => car.id === winner.id);
      const editWinner = { ...winner };
      editWinner.color = currentCar.color;
      editWinner.name = currentCar.name;
      return editWinner;
    });
  return editWinners;
}

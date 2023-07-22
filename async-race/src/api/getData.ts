import { Car, Winner } from "../types/type";
import { BASEURL, endPoint } from "./urls";

export async function getCars(): Promise<Car[]> {
  const resp = await fetch(`${BASEURL}${endPoint.garage}`);
  const cars = await resp.json();
  return cars;
}

export async function getWinners(): Promise<Winner[]> {
  const resp = await fetch(`${BASEURL}${endPoint.winners}`);
  const winners: Winner[] = await resp.json();
  return winners;
}

export async function editWinners(
  winners: Pick<Winner, "id" | "wins" | "time">[],
): Promise<Winner[]> {
  const cars = await getCars();
  const editedWinners = winners
    .filter((winner) => cars.find((car) => car.id === winner.id))
    .map((winner) => {
      const currentCar = cars.find((car) => car.id === winner.id);
      const editedWinner = {
        ...winner,
        color: currentCar.color,
        name: currentCar.name,
      };
      return editedWinner;
    });
  return editedWinners;
}

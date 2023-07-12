import { Car, Winner } from "../types/type";
import { BASEURL } from "./urls";

// const URL = "http://127.0.0.1:3000";

export async function getCars(): Promise<Car[]> {
  const resp = await fetch(`${BASEURL}/garage`);
  const cars = await resp.json();
  return cars;
}

export async function getWinners(): Promise<Winner[]> {
  const cars = await getCars();

  const resp = await fetch(`${BASEURL}/winners`);
  const winners: Winner[] = await resp.json();
  console.log(winners);
  const editWinners = winners.map((winner) => {
    const currentCar = cars.find((car) => car.id === winner.id);
    const editWinner = { ...winner };
    editWinner.color = currentCar.color;
    editWinner.name = currentCar.name;
    return editWinner;
  });
  console.log(editWinners);
  return editWinners;
}

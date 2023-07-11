import { Car } from "../types/type";

const URL = "http://127.0.0.1:3000";

export default async function getCars(): Promise<Car[]> {
  const resp = await fetch(`${URL}/garage`);
  const cars = await resp.json();
  return cars;
}

import { Car } from "../types/type";
import { BASEURL, endPoint } from "./urls";

export default async function createCar(car: Omit<Car, "id">): Promise<Car> {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  };

  const response = await fetch(`${BASEURL}${endPoint.garage}`, options);
  const createdCar = await response.json();
  console.log(createdCar);
  return createdCar;
}

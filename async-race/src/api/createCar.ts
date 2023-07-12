import { Car } from "../types/type";
import { BASEURL, url } from "./urls";

export default async function createCar(car: Omit<Car, "id">): Promise<Car> {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  };

  const response = await fetch(`${BASEURL}${url.garage}`, options);
  const createdCar = await response.json();
  console.log(createdCar);
  return createdCar;
}

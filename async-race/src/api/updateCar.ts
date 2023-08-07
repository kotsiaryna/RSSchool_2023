import { Car } from "../types/type";
import { BASEURL, endPoint } from "./urls";

export default async function updateCar(car: Car): Promise<void> {
  const { id, ...body } = car;
  const resp = await fetch(`${BASEURL}${endPoint.garage}/${car.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  await resp.json();
}

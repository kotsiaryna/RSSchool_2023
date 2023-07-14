import { Car } from "../types/type";
import { BASEURL, url } from "./urls";

export default async function updateCar(car: Car): Promise<void> {
  const { id, ...body } = car;
  const resp = await fetch(`${BASEURL}${url.garage}/${car.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const result = await resp.json();
  console.log(result);
}

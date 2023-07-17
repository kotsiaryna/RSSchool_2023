import { Car } from "../types/type";
import { BASEURL, endPoint } from "./urls";

export default async function removeCar(id: Car["id"]): Promise<void> {
  const response = await fetch(`${BASEURL}${endPoint.garage}/${id}`, {
    method: "DELETE",
  });
  await response.json();
}

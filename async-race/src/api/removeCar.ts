import { Car } from "../types/type";
import { BASEURL, url } from "./urls";

export default async function removeCar(id: Car["id"]): Promise<void> {
  const response = await fetch(`${BASEURL}${url.garage}/${id}`, {
    method: "DELETE",
  });
  await response.json();
}

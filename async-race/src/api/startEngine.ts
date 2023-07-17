import { Car } from "../types/type";
import { BASEURL, endPoint } from "./urls";

export default async function startEngine(
  id: Car["id"],
): Promise<Pick<Car, "id" | "velocity" | "distance">> {
  const response = await fetch(
    `${BASEURL}${endPoint.engine}?id=${id}&status=started`,
    {
      method: "PATCH",
    },
  );
  const data = await response.json();
  return { id, ...data };
}

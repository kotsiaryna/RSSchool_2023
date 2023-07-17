import { Car } from "../types/type";
import { BASEURL, endPoint } from "./urls";

export default async function stopEngine(id: Car["id"]): Promise<void> {
  await fetch(`${BASEURL}${endPoint.engine}?id=${id}&status=stopped`, {
    method: "PATCH",
  });
}

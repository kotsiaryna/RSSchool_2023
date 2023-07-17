import { Winner } from "../types/type";
import { BASEURL, endPoint } from "./urls";

export default async function removeWinner(id: Winner["id"]): Promise<void> {
  const response = await fetch(`${BASEURL}${endPoint.winners}/${id}`, {
    method: "DELETE",
  });
  const res = await response.json();
  return res;
}

import { Winner } from "../types/type";
import { BASEURL, endPoint } from "./urls";

export default async function updateWinner(
  winner: Pick<Winner, "id" | "wins" | "time">,
): Promise<Pick<Winner, "id" | "wins" | "time">> {
  const resp = await fetch(`${BASEURL}${endPoint.winners}/${winner.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(winner),
  });
  const result = await resp.json();
  return result;
}

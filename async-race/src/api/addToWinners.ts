import { Winner } from "../types/type";
import { BASEURL, endPoint } from "./urls";

export default async function addToWinners(
  winner: Pick<Winner, "id" | "wins" | "time">,
): Promise<Pick<Winner, "id" | "wins" | "time">> {
  const resp = await fetch(`${BASEURL}${endPoint.winners}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(winner),
  });
  const result = await resp.json();
  return result;
}

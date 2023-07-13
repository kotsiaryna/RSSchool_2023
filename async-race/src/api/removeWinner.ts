import { Winner } from "../types/type";
import { BASEURL, url } from "./urls";

export default async function removeWinner(id: Winner["id"]): Promise<void> {
  const response = await fetch(`${BASEURL}${url.winners}/${id}`, {
    method: "DELETE",
  });
  const res = await response.json();
  return res;
}

import { Car, Winner } from "../types/type";
import { BASEURL, endPoint } from "./urls";

export async function getGaragePage(n: number): Promise<Car[]> {
  const resp = await fetch(`${BASEURL}${endPoint.garage}?_page=${n}&_limit=7`);
  const result = await resp.json();
  return result;
}

export async function getWinnersPage(n: number): Promise<Winner[]> {
  const resp = await fetch(
    `${BASEURL}${endPoint.winners}?_page=${n}&_limit=10`,
  );
  const result = await resp.json();
  return result;
}

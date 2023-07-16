import { Car } from "../types/type";
import { BASEURL, url } from "./urls";

export default async function getPage(n: number): Promise<Car[]> {
  const resp = await fetch(`${BASEURL}${url.garage}?_page=${n}&_limit=7`);
  const result = await resp.json();
  return result;
}

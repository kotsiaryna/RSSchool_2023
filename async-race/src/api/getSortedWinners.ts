import { Winner } from "../types/type";
import { BASEURL, endPoint } from "./urls";

const getSortedWinners = async (
  page: number,
  toSort: string,
  sortOrder: string,
): Promise<Winner[]> => {
  const resp = await fetch(
    `${BASEURL}${endPoint.winners}?_page=${page}&_limit=10&_sort=${toSort}&_order=${sortOrder}`,
  );

  const sortedWinners = await resp.json();
  return sortedWinners;
};
export default getSortedWinners;

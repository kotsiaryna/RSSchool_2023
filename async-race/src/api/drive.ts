import { Car } from "../types/type";
import { BASEURL, endPoint } from "./urls";

export default async function driveModeOn(id: Car["id"]): Promise<number> {
  const response = await fetch(
    `${BASEURL}${endPoint.engine}?id=${id}&status=drive`,
    {
      method: "PATCH",
    },
  );
  const { status } = response;
  return status;
}

import { Car, DriveParams } from "../types/type";
import { BASEURL, endPoint } from "./urls";

export default async function startEngine(id: Car["id"]): Promise<DriveParams> {
  const response = await fetch(
    `${BASEURL}${endPoint.engine}?id=${id}&status=started`,
    {
      method: "PATCH",
    },
  );
  const data = await response.json();
  return data;
}

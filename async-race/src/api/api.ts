import { Car, Winner } from "../types/type";

const BASEURL = "http://127.0.0.1:3000";

const endPoint = {
  garage: "/garage",
  winners: "/winners",
  engine: "/engine",
};

export async function getWinners(): Promise<Winner[]> {
  const resp = await fetch(`${BASEURL}${endPoint.winners}`);
  const winners: Winner[] = await resp.json();
  return winners;
}

export async function addToWinners(
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

export async function updateWinner(
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

export async function addWinner(winner: Car): Promise<void> {
  const winners = await getWinners();
  const winnerInWinners = winners.find((car) => car.id === winner.id);
  const MSEC_PER_SEC = 1000;
  const lastTime = +(winner.distance / winner.velocity / MSEC_PER_SEC).toFixed(
    2,
  );

  if (!winnerInWinners) {
    const winnerToAdd = {
      id: winner.id,
      wins: 1,
      time: lastTime,
    };
    addToWinners(winnerToAdd);
  } else {
    const winnerToUpdate = {
      id: winnerInWinners.id,
      wins: winnerInWinners.wins + 1,
      time: Math.min(winnerInWinners.time, lastTime),
    };
    updateWinner(winnerToUpdate);
  }
}

export async function createCar(car: Omit<Car, "id">): Promise<Car> {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  };

  const response = await fetch(`${BASEURL}${endPoint.garage}`, options);
  const createdCar = await response.json();
  return createdCar;
}

export async function driveModeOn(id: Car["id"]): Promise<number> {
  const response = await fetch(
    `${BASEURL}${endPoint.engine}?id=${id}&status=drive`,
    {
      method: "PATCH",
    },
  );
  const { status } = response;
  return status;
}

export async function getCars(): Promise<Car[]> {
  const resp = await fetch(`${BASEURL}${endPoint.garage}`);
  const cars = await resp.json();
  return cars;
}

export async function editWinners(
  winners: Pick<Winner, "id" | "wins" | "time">[],
): Promise<Winner[]> {
  const cars = await getCars();
  const editedWinners = winners
    .filter((winner) => cars.find((car) => car.id === winner.id))
    .map((winner) => {
      const currentCar = cars.find((car) => car.id === winner.id);
      const editedWinner = {
        ...winner,
        color: currentCar.color,
        name: currentCar.name,
      };
      return editedWinner;
    });
  return editedWinners;
}

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

export const getSortedWinners = async (
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

export async function removeCar(id: Car["id"]): Promise<void> {
  const response = await fetch(`${BASEURL}${endPoint.garage}/${id}`, {
    method: "DELETE",
  });
  await response.json();
}

export async function removeWinner(id: Winner["id"]): Promise<void> {
  const response = await fetch(`${BASEURL}${endPoint.winners}/${id}`, {
    method: "DELETE",
  });
  const res = await response.json();
  return res;
}

export async function startEngine(
  id: Car["id"],
): Promise<Pick<Car, "id" | "velocity" | "distance">> {
  const response = await fetch(
    `${BASEURL}${endPoint.engine}?id=${id}&status=started`,
    {
      method: "PATCH",
    },
  );
  const data = await response.json();
  return { id, ...data };
}

export async function stopEngine(id: Car["id"]): Promise<void> {
  await fetch(`${BASEURL}${endPoint.engine}?id=${id}&status=stopped`, {
    method: "PATCH",
  });
}

export async function updateCar(car: Car): Promise<void> {
  const { id, ...body } = car;
  const resp = await fetch(`${BASEURL}${endPoint.garage}/${car.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  await resp.json();
}

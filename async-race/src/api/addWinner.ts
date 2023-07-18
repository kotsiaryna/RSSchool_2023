import addToWinners from "./addToWinners";
import { getWinners } from "./getData";
import updateWinner from "./updateWinner";
import { Car } from "../types/type";

export default async function addWinner(winner: Car): Promise<void> {
  const winners = await getWinners();
  const winnerInWinners = winners.find((car) => car.id === winner.id);
  const lastTime = +(winner.distance / winner.velocity / 1000).toFixed(2);

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

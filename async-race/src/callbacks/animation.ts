import driveModeOn from "../api/drive";
import startEngine from "../api/startEngine";
import stopEngine from "../api/stopEngine";

const animationID = { id: 1 };

export async function startAnimation(e: Event): Promise<void> {
  // const start = performance.now();
  const startBtn = e.target as HTMLButtonElement;
  const stopBtn = startBtn.nextElementSibling as HTMLButtonElement;
  stopBtn.disabled = false;
  startBtn.disabled = true;
  const { id } = startBtn.closest(".track");
  const driveParams = await startEngine(+id);
  const timeMSec = driveParams.distance / driveParams.velocity;
  const timeSec = timeMSec / 1000;
  const times = timeSec * 60;
  // const { clientWidth } = document.documentElement;
  const { innerWidth } = window;
  // const distance = clientWidth - 20 - 100;
  const distance = innerWidth - 20 - 100;
  const step = distance / times;
  const car = startBtn.parentElement.nextElementSibling as SVGAElement;
  car.style.left = `${20 - step}px`;
  const moveLeft = (): void => {
    const way = parseFloat(car.style.left);
    car.style.left = `${way + step}px`;
    if (way < distance) {
      animationID.id = requestAnimationFrame(moveLeft);
    } else {
      console.log(way);
    }
  };
  moveLeft();
  const status = await driveModeOn(+id);
  if (status === 500) cancelAnimationFrame(animationID.id);
}

export async function stopAnimation(e: Event): Promise<void> {
  const stopBtn = e.target as HTMLButtonElement;
  const startBtn = stopBtn.previousElementSibling as HTMLButtonElement;
  stopBtn.disabled = true;
  startBtn.disabled = false;
  const { id } = stopBtn.closest(".track");
  await stopEngine(+id);
  cancelAnimationFrame(animationID.id);
  const car = stopBtn.parentElement.nextElementSibling as SVGAElement;
  car.style.left = `20px`;
}

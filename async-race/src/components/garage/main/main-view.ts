import { getCars } from "../../../api/getData";
import { getGaragePage } from "../../../api/getPage";
import { next, prev } from "../../../callbacks/pagination";
import remove from "../../../callbacks/remove";
import addLastTrack from "../../../render/addLastTrack";
import createButton from "../../../utils/createButton";
import createElement from "../../../utils/createElement";
import { carsAmountView, heading } from "./heading-view";
import { pageHeading } from "./page-view";
import createTrack from "./track";

function createPagination(garage: HTMLElement): HTMLElement {
  const pagination = createElement({
    tag: "div",
    className: ["garage__pagination"],
  });

  const prevBtn = createButton(["button", "prev"], "prev", (e) =>
    prev(e, garage),
  );
  prevBtn.disabled = true;

  const nextBtn = createButton(["button", "next"], "next", (e) =>
    next(e, garage),
  );

  pagination.append(prevBtn, nextBtn);
  return pagination;
}

export default function createGarageView(): HTMLElement {
  const garage = createElement({
    tag: "section",
    className: ["garage"],
  });

  const pagination = createPagination(garage);

  garage.append(heading, pageHeading, pagination);
  garage.addEventListener("click", async (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("remove-btn")) {
      const data = await remove(e);
      addLastTrack(...data);
    }
  });
  return garage;
}

export async function addTracks(placeToAppend: Element): Promise<number> {
  const currentCars = await getGaragePage(1);
  const allCars = await getCars();
  const carsAmount = allCars.length;
  carsAmountView.textContent = `(${carsAmount})`;
  currentCars.forEach((car) => {
    const track = createTrack(car);
    placeToAppend.append(track);
  });
  return allCars.length;
}

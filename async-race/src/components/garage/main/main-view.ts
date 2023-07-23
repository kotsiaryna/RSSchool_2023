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

// function createPageView(): HTMLElement {
//   const pageHeading = createElement({
//     tag: "h3",
//     className: ["garage__pages"],
//     text: "Page ",
//   });

//   const pageCount = 1;
//   const pageCountView = createElement({
//     tag: "span",
//     className: ["pages__count"],
//     text: `#${pageCount}`,
//   });
//   pageHeading.append(pageCountView);
//   return pageHeading;
// }

// function createHeading(): HTMLElement {
//   const heading = createElement({
//     tag: "h2",
//     className: ["heading", "garage__heading"],
//     text: "Garage ",
//   });

//   const carsAmountView = createElement({
//     tag: "span",
//     className: ["garage__count"],
//   });
//   heading.append(carsAmountView);
//   return heading;
// }
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

  // const heading = createHeading();
  // const pages = createPageView();
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
  // const heading = placeToAppend.firstElementChild.firstElementChild;
  carsAmountView.textContent = `(${carsAmount})`;
  currentCars.forEach((car) => {
    const track = createTrack(car);
    placeToAppend.append(track);
  });
  return allCars.length;
}

import { getCars } from "../../../api/getData";
import getPage from "../../../api/getPage";
import { next, prev } from "../../../callbacks/pagination";
import createButton from "../../../utils/createButton";
import createElement from "../../../utils/createElement";
import createTrack from "./track";

function createPageView(): HTMLElement {
  const pageHeading = createElement({
    tag: "h3",
    className: ["garage__pages"],
    text: "Page ",
  });

  const pageCount = 1;
  const pageCountView = createElement({
    tag: "span",
    className: ["pages__count"],
    text: `#${pageCount}`,
  });
  pageHeading.append(pageCountView);
  return pageHeading;
}

function createHeading(): HTMLElement {
  const heading = createElement({
    tag: "h2",
    className: ["heading", "garage__heading"],
    text: "Garage ",
  });

  const carsAmountView = createElement({
    tag: "span",
    className: ["garage__count"],
  });
  heading.append(carsAmountView);
  return heading;
}

export default function createGarageView(): HTMLElement {
  const garage = createElement({
    tag: "section",
    className: ["garage"],
  });

  const heading = createHeading();
  const pages = createPageView();

  const pagination = createElement({
    tag: "div",
    className: ["garage__pagination"],
  });

  const prevBtn = createButton(["button", "prev"], "prev", (e) =>
    prev(e, garage, heading),
  );
  prevBtn.disabled = true;

  const nextBtn = createButton(["button", "next"], "next", (e) =>
    next(e, garage, heading),
  );

  pagination.append(prevBtn, nextBtn);

  garage.append(heading, pages, pagination);
  return garage;
}

export async function addTracks(placeToAppend: Element): Promise<void> {
  const cars = await getPage(1);
  const allCars = await getCars();
  const carsAmount = allCars.length;
  const heading = placeToAppend.firstElementChild.firstElementChild;
  heading.textContent = `(${carsAmount})`;
  cars.forEach((car) => {
    const track = createTrack(car);
    placeToAppend.append(track);
  });
}

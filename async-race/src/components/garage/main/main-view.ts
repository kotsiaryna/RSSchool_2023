import getCars from "../../../api/getCars";
import createElement from "../../../utils/createElement";
import createTrack from "./track";

function createPageView(): HTMLElement {
  const pageHeading = createElement({
    tag: "h3",
    className: ["garage__pages"],
    text: "Page ",
  });

  const pageCount = 0;
  const pageCountView = createElement({
    tag: "span",
    className: ["pages__count"],
    text: `(${pageCount})`,
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

  const tracksWrapper = createElement({
    tag: "div",
    className: ["garage__inner"],
  });

  garage.append(heading, pages, tracksWrapper);
  return garage;
}

export async function addTracks(placeToAppend: Element): Promise<void> {
  const cars = await getCars();
  const carsAmount = cars.length;
  const heading = placeToAppend.firstElementChild.firstElementChild;
  heading.textContent = `(${carsAmount})`;
  cars.forEach((car) => {
    const track = createTrack(car);
    placeToAppend.append(track);
  });
}

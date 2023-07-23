import createElement from "../../../utils/createElement";

function createHeading(): HTMLElement[] {
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
  return [heading, carsAmountView];
}
const [heading, carsAmountView] = createHeading();

export { heading, carsAmountView };

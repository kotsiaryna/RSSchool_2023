import createElement from "../../utils/createElement";

function createHeading(): HTMLElement[] {
  const heading = createElement({
    tag: "h2",
    className: ["heading", "winners__heading"],
    text: "Winners ",
  });

  const winnersAmount = 0;
  const winnersAmountView = createElement({
    tag: "span",
    className: ["winners__count"],
    text: `(${winnersAmount})`,
  });
  heading.append(winnersAmountView);
  return [heading, winnersAmountView];
}

const [heading, winnersAmountView] = createHeading();
export { heading, winnersAmountView };

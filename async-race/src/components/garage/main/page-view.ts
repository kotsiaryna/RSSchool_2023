import createElement from "../../../utils/createElement";

function createPageView(): HTMLElement[] {
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
  return [pageHeading, pageCountView];
}

const [pageHeading, pageCountView] = createPageView();

export { pageHeading, pageCountView };

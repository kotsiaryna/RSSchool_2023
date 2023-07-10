import createElement from "../../utils/createElement";

const createTableHead = (): HTMLElement => {
  const head = createElement({
    tag: "thead",
  });
  const row = createElement({
    tag: "tr",
  });

  const headings: string[] = ["Number", "Car", "Wins", "Best time (s)"];
  const headingElements = headings.map((el) =>
    createElement({
      tag: "th",
      text: el,
    }),
  );
  row.append(...headingElements);
  head.append(row);
  return head;
};

export default function createWinnersTable(): HTMLElement {
  const table = createElement({
    tag: "table",
    className: ["winners__table"],
  });

  const head = createTableHead();
  table.append(head);

  return table;
}

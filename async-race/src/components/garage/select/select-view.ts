import createCallback from "../../../callbacks/create";
import { updateCallback } from "../../../callbacks/edit";
import { Elem } from "../../../types/type";
import createButton from "../../../utils/createButton";
import createElement from "../../../utils/createElement";

function createSelectLine(
  text: Elem["text"],
  callback: Elem["callback"],
  place: HTMLElement,
): HTMLElement {
  const selectLine = createElement({ tag: "div", className: ["select__line"] });

  const inputName = createElement({
    tag: "input",
    className: ["select__input"],
  }) as HTMLInputElement;

  const inputColor = createElement({
    tag: "input",
    className: ["select__color"],
  }) as HTMLInputElement;
  inputColor.type = "color";

  const btn = createButton(["button", `${text}-button`], `${text}`, (e) =>
    callback(e, place),
  );

  selectLine.append(inputName, inputColor, btn);
  return selectLine;
}

function createButtonsLine(): HTMLElement {
  const buttonsLine = createElement({
    tag: "div",
    className: ["select__line"],
  });

  const race: Elem["callback"] = () => {};
  const raceButton = createButton(["button", "race-btn"], "race", race);

  const reset: Elem["callback"] = () => {};
  const resetButton = createButton(["button", "reset-btn"], "reset", reset);

  const generate: Elem["callback"] = () => {};
  const generateButton = createButton(
    ["button", "generate-btn"],
    "generate cars",
    generate,
  );

  buttonsLine.append(raceButton, resetButton, generateButton);
  return buttonsLine;
}

export default function createSelectView(place: HTMLElement): HTMLElement {
  const selectCont = createElement({
    tag: "section",
    className: ["select"],
  });
  const createLine = createSelectLine("create", createCallback, place);

  const updateLine = createSelectLine("update", updateCallback, place);

  const buttonsLine = createButtonsLine();

  selectCont.append(createLine, updateLine, buttonsLine);
  return selectCont;
}

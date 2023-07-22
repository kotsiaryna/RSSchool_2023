import { Elem } from "../types/type";

export default function createButton(
  className: Elem["className"],
  text: Elem["text"],
  callback?: Elem["callback"],
): HTMLButtonElement {
  const button = document.createElement("button");
  button.className = className.join(" ");
  button.textContent = text;
  if (callback) button.addEventListener("click", callback);
  return button;
}

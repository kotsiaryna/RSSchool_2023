import { Elem } from "../types/type";

export default function createButton(
  className: Elem["className"],
  text: Elem["text"],
  callback: Elem["callback"],
): HTMLDivElement {
  const button = document.createElement("div");
  button.className = className.join(" ");
  button.textContent = text;
  button.addEventListener("click", callback);
  return button;
}

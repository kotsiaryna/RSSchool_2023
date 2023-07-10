import { Elem } from "../types/type";

export default function createElement(options: Elem): HTMLElement {
  const element = document.createElement(options.tag);
  if (options.className) element.className = options.className.join(" ");
  element.textContent = options.text;
  return element;
}

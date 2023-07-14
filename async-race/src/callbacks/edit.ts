import updateCar from "../api/updateCar";
import { Car } from "../types/type";

export function select(e: Event): void {
  const btn = e.target as HTMLElement;
  const garage = btn.closest(".garage-view");

  const name = btn.nextElementSibling.nextElementSibling.textContent;
  const track = btn.closest(".track");
  const color = track.children[2].getAttribute("fill");

  const nameInput = garage.firstElementChild.children[1]
    .firstElementChild as HTMLInputElement;
  const colorInput = garage.firstElementChild.children[1]
    .children[1] as HTMLInputElement;
  const updateBtn = garage.firstElementChild.children[1]
    .lastElementChild as HTMLElement;
  updateBtn.dataset.id = track.id;

  nameInput.value = name;
  colorInput.value = color;
}

const updateWinnerRow = (car: Car, garage: HTMLElement): void => {
  const tbody = garage.parentElement.nextElementSibling.children[2].children[1];
  const row = tbody.querySelector(`[data-id="${car.id}"]`);
  row.children[1].firstElementChild.setAttribute("fill", car.color);
  row.children[2].textContent = car.name;
};

export function updateCallback(e: Event, garage: HTMLElement): void {
  const btn = e.target as HTMLElement;
  const { id } = btn.dataset;

  const track = garage.querySelector(`[id="${id}"]`);

  const nameToUpdate = track.firstElementChild.lastElementChild;
  const imgToUpdate = track.lastElementChild;

  const name = btn.previousElementSibling
    .previousElementSibling as HTMLInputElement;
  const color = btn.previousElementSibling as HTMLInputElement;

  nameToUpdate.textContent = name.value;
  imgToUpdate.setAttribute("fill", color.value);

  const carParams: Car = {
    id: +id,
    color: color.value,
    name: name.value,
  };

  updateWinnerRow(carParams, garage);

  updateCar(carParams);
  name.value = "";
  color.value = "";
  btn.removeAttribute("data-id");
}

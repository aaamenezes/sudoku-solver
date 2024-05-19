import {
  emptyTable,
  tableEasy,
  tableHard,
  tableMedium,
} from "./tables/index.js";
import Table from "./entities/table.js";

const inserEasy = document.querySelector(".insert-easy");
const inserMedium = document.querySelector(".insert-medium");
const inserHard = document.querySelector(".insert-hard");
const resolve = document.querySelector(".resolve");
const clear = document.querySelector(".clear");
const inputs = document.querySelectorAll("input");

const table = new Table(emptyTable);
const allowKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9];

inserEasy?.addEventListener("click", () => table.insert(tableEasy));
inserMedium?.addEventListener("click", () => table.insert(tableMedium));
inserHard?.addEventListener("click", () => table.insert(tableHard));
resolve?.addEventListener("click", () => table.solve());
clear?.addEventListener("click", () => {
  inputs[0].focus();
  table.clear();
});

inputs.forEach((input, inputIndex) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Tab") return;
    event.preventDefault();

    if (event.key === "Backspace") {
      const previousInput = inputs[inputIndex - 1];
      if (previousInput) previousInput.focus();

      if (input.value !== "") input.value = "";
      if (input.value === "" && previousInput) previousInput.value = "";
    }

    if (allowKeys.includes(Number(event.key))) {
      input.value = event.key;

      const nextInput = inputs[inputIndex + 1];
      if (!nextInput) return;

      nextInput.focus();
    }
  });
});

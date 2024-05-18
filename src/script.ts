import { TableProps } from "./entities/types";
import { tableEasy, tableHard, tableMedium } from "./tables/index.js";
import Table from "./entities/table.js";

const inserEasy = document.querySelector(".insert-easy");
const inserMedium = document.querySelector(".insert-medium");
const inserHard = document.querySelector(".insert-hard");
const resolve = document.querySelector(".resolve");

const table = new Table(tableEasy);

if (inserEasy) {
  inserEasy.addEventListener("click", () => insertTable(tableEasy));
}

if (inserMedium) {
  inserMedium.addEventListener("click", () => insertTable(tableMedium));
}

if (inserHard) {
  inserHard.addEventListener("click", () => insertTable(tableHard));
}

if (resolve) {
  // resolve.addEventListener("click", () => insertTable());
}

function insertTable(table: TableProps) {
  const grid = document.querySelector(".grid");

  if (!grid) return;

  let lineIndex: number;

  /**
   * Array.from fail
   * Spread operator fail
   */
  for (lineIndex = 0; lineIndex < grid.children.length; lineIndex++) {
    const line = grid.children[lineIndex];
    line.children;
    let celIndex: number;

    for (celIndex = 0; celIndex < line.children.length; celIndex++) {
      const cel = line.children[celIndex];
      const input = cel.children[0] as HTMLInputElement;

      const inputValie = table[lineIndex].cels[celIndex].response;
      if (inputValie === 0) continue;

      input.value = inputValie.toString();
    }
  }
}

export {};

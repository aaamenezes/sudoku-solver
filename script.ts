import { Cel, Line, Table } from "./entities";
import { TableProps, CelProps, LineProps } from "./entities/types";

const tableEasy: TableProps = [
  [
    { response: 4, validValues: [] },
    { response: 9, validValues: [] },
    { response: 6, validValues: [] },
    { response: 0, validValues: [] },
    { response: 7, validValues: [] },
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
  ],
  [
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
    { response: 8, validValues: [] },
    { response: 9, validValues: [] },
    { response: 0, validValues: [] },
    { response: 3, validValues: [] },
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
  ],
  [
    { response: 7, validValues: [] },
    { response: 5, validValues: [] },
    { response: 0, validValues: [] },
    { response: 8, validValues: [] },
    { response: 0, validValues: [] },
    { response: 2, validValues: [] },
    { response: 0, validValues: [] },
    { response: 1, validValues: [] },
    { response: 9, validValues: [] },
  ],
  [
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
    { response: 2, validValues: [] },
    { response: 5, validValues: [] },
  ],
  [
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
    { response: 1, validValues: [] },
    { response: 7, validValues: [] },
    { response: 2, validValues: [] },
    { response: 0, validValues: [] },
    { response: 4, validValues: [] },
    { response: 9, validValues: [] },
    { response: 0, validValues: [] },
  ],
  [
    { response: 8, validValues: [] },
    { response: 0, validValues: [] },
    { response: 7, validValues: [] },
    { response: 0, validValues: [] },
    { response: 9, validValues: [] },
    { response: 0, validValues: [] },
    { response: 3, validValues: [] },
    { response: 6, validValues: [] },
    { response: 0, validValues: [] },
  ],
  [
    { response: 0, validValues: [] },
    { response: 8, validValues: [] },
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
    { response: 7, validValues: [] },
    { response: 9, validValues: [] },
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
  ],
  [
    { response: 0, validValues: [] },
    { response: 6, validValues: [] },
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
    { response: 5, validValues: [] },
    { response: 4, validValues: [] },
    { response: 0, validValues: [] },
    { response: 3, validValues: [] },
    { response: 0, validValues: [] },
  ],
  [
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
    { response: 0, validValues: [] },
    { response: 2, validValues: [] },
    { response: 8, validValues: [] },
    { response: 9, validValues: [] },
    { response: 1, validValues: [] },
    { response: 5, validValues: [] },
    { response: 6, validValues: [] },
  ],
];

const tableMedium: TableProps = [];

const tableHard: TableProps = [];

const cel = new Cel(0);
const line = new Line([cel, cel, cel]);
const table = new Table([line, line, line]);

/*
function isComplete(table) {
  let isComplete = true;

  table.forEach((line) => {
    line.forEach((cel) => {
      if (cel.response === 0) isComplete = false;
    });
  });

  return isComplete;
}
*/

const solution = sudokuResolve(tableEasy);
console.log(solution);

const resolve = document.querySelector(".resolve");

if (resolve)
  resolve.addEventListener("click", () => {
    const solution = sudokuResolve(tableEasy);
    console.log(solution);
  });

const resolveAfter = document.querySelector(".resolve-after");

if (resolveAfter)
  resolveAfter.addEventListener("click", () => {
    const table = [];

    Array.from(document.querySelector(".grid").children).forEach(
      (line, lineIndex) => {
        table.push([]);

        Array.from(line.children).forEach((cel, celIndex) => {
          const [input] = cel.children;
          table.at(-1).push({
            response: +input.value || 0,
            validValues: [],
          });
        });
      }
    );

    console.log("table:", table);

    const solution = sudokuResolve(table);
    console.log(solution);
  });

export {};

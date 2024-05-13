import { Table, Cel, Line } from "./types";

// const cel = { response: 0, validValues: [] };

const tableEasy: Table = [
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

function sudokuResolve(table: Table) {
  return table.map((lineData: Line, lineIndex) =>
    resolveLine(lineData, lineIndex, table)
  );

  /*
  Array.from(document.querySelector(".grid").children).forEach(
    (line, lineIndex) => {
      Array.from(line.children).forEach((cel, celIndex) => {
        const [input] = cel.children;
        input.value =
          solution[lineIndex][celIndex].response > 0
            ? solution[lineIndex][celIndex].response
            : "";
      });
    }
  );
  */
}

function resolveLine(lineData: Line, lineIndex: number, table: Table) {
  return lineData.map((celData, celIndex) =>
    resolveCel(celData, celIndex, lineIndex, table)
  );
}

function resolveCel(
  celData: Cel,
  celIndex: number,
  lineIndex: number,
  table: Table
) {
  if (celData.response > 0) return celData;

  const validValues =
    celData.validValues.length > 0
      ? celData.validValues
      : getValidValues(celIndex, lineIndex, table);

  const response = (validValues.length = 1 ? validValues[0] : 0);
  return { response, validValues };
}

function getFilledValuesInLine(table: Table, lineIndex: number) {
  return table[lineIndex]
    .filter((cel) => cel.response > 0)
    .map((cel) => cel.response);
}

function getFilledValuesInColumn(table: Table, celIndex: number) {
  return table
    .map((line) => line[celIndex])
    .filter((cel) => cel.response > 0)
    .map((cel) => cel.response);
}

function getFilledValuesInBlock(
  table: Table,
  lineIndex: number,
  celIndex: number
) {
  // pegar esses valores aqui
  const [lineIndexA, lineIndexB, lineIndexC] = (() => {
    if (lineIndex === 0 || lineIndex === 1 || lineIndex === 2) return [0, 1, 2];
    if (lineIndex === 3 || lineIndex === 4 || lineIndex === 5) return [3, 4, 5];
    return [6, 7, 8];
  })();

  const [celIndexA, celIndexB, celIndexC] = (() => {
    if (celIndex === 0 || celIndex === 1 || celIndex === 2) return [0, 1, 2];
    if (celIndex === 3 || celIndex === 4 || celIndex === 5) return [3, 4, 5];
    return [6, 7, 8];
  })();

  return [
    table[lineIndexA][celIndexA].response,
    table[lineIndexA][celIndexB].response,
    table[lineIndexA][celIndexC].response,
    table[lineIndexB][celIndexA].response,
    table[lineIndexB][celIndexB].response,
    table[lineIndexB][celIndexC].response,
    table[lineIndexC][celIndexA].response,
    table[lineIndexC][celIndexB].response,
    table[lineIndexC][celIndexC].response,
  ].filter((n) => n > 0);
}

function getValidValues(celIndex: number, lineIndex: number, table: Table) {
  const filledValuesInLine = getFilledValuesInLine(table, lineIndex);
  const filledValuesInColumn = getFilledValuesInColumn(table, celIndex);
  const filledValuesInBlock = getFilledValuesInBlock(
    table,
    lineIndex,
    celIndex
  );

  /**
   * TODO
   * Não deu pra usar o new Set pra remover duplicados
   * Resolver isso depois
   */
  const nonValidValues = [
    ...filledValuesInLine,
    ...filledValuesInColumn,
    ...filledValuesInBlock,
  ].sort();

  const validValues = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
    (p) => !nonValidValues.some((n) => n === p)
  );

  return validValues;
}

const solution = sudokuResolve(tableEasy);
console.log(solution);

/*
document.querySelector(".resolve").onclick = () => {
  const solution = sudokuResolve(table);
  console.log(solution);
};

document.querySelector(".resolve-after").onclick = () => {
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
};
*/

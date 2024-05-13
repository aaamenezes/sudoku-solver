"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// const cel = { response: 0, validValues: [] };
var tableEasy = [
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
function sudokuResolve(table) {
    return table.map(function (lineData, lineIndex) {
        return resolveLine(lineData, lineIndex, table);
    });
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
function resolveLine(lineData, lineIndex, table) {
    return lineData.map(function (celData, celIndex) {
        return resolveCel(celData, celIndex, lineIndex, table);
    });
}
function resolveCel(celData, celIndex, lineIndex, table) {
    if (celData.response > 0)
        return celData;
    var validValues = celData.validValues.length > 0
        ? celData.validValues
        : getValidValues(celIndex, lineIndex, table);
    var response = (validValues.length = 1 ? validValues[0] : 0);
    return { response: response, validValues: validValues };
}
function getFilledValuesInLine(table, lineIndex) {
    return table[lineIndex]
        .filter(function (cel) { return cel.response > 0; })
        .map(function (cel) { return cel.response; });
}
function getFilledValuesInColumn(table, celIndex) {
    return table
        .map(function (line) { return line[celIndex]; })
        .filter(function (cel) { return cel.response > 0; })
        .map(function (cel) { return cel.response; });
}
function getFilledValuesInBlock(table, lineIndex, celIndex) {
    // pegar esses valores aqui
    var _a = (function () {
        if (lineIndex === 0 || lineIndex === 1 || lineIndex === 2)
            return [0, 1, 2];
        if (lineIndex === 3 || lineIndex === 4 || lineIndex === 5)
            return [3, 4, 5];
        return [6, 7, 8];
    })(), lineIndexA = _a[0], lineIndexB = _a[1], lineIndexC = _a[2];
    var _b = (function () {
        if (celIndex === 0 || celIndex === 1 || celIndex === 2)
            return [0, 1, 2];
        if (celIndex === 3 || celIndex === 4 || celIndex === 5)
            return [3, 4, 5];
        return [6, 7, 8];
    })(), celIndexA = _b[0], celIndexB = _b[1], celIndexC = _b[2];
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
    ].filter(function (n) { return n > 0; });
}
function getValidValues(celIndex, lineIndex, table) {
    var filledValuesInLine = getFilledValuesInLine(table, lineIndex);
    var filledValuesInColumn = getFilledValuesInColumn(table, celIndex);
    var filledValuesInBlock = getFilledValuesInBlock(table, lineIndex, celIndex);
    /**
     * TODO
     * Não deu pra usar o new Set pra remover duplicados
     * Resolver isso depois
     */
    var nonValidValues = __spreadArray(__spreadArray(__spreadArray([], filledValuesInLine, true), filledValuesInColumn, true), filledValuesInBlock, true).sort();
    var validValues = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (p) { return !nonValidValues.some(function (n) { return n === p; }); });
    return validValues;
}
var solution = sudokuResolve(tableEasy);
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

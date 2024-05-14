"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _Table_lines, _Line_cels, _Cel_response, _Cel_validValues;
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
var tableHard = [];
var Table = /** @class */ (function () {
    function Table(lines) {
        _Table_lines.set(this, void 0);
        __classPrivateFieldSet(this, _Table_lines, lines, "f");
    }
    Table.prototype.getLine = function (index) {
        return __classPrivateFieldGet(this, _Table_lines, "f")[index - 1];
    };
    Table.prototype.getColumn = function (index) {
        return __classPrivateFieldGet(this, _Table_lines, "f").map(function (line) { return line.cels[index - 1].response; });
    };
    Table.prototype.getCel = function (lineIndex, celIndex) {
        return __classPrivateFieldGet(this, _Table_lines, "f")[lineIndex - 1].cels[celIndex - 1].response;
    };
    Table.prototype.getBlock = function (lineIndex, celIndex) {
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
            this.getCel(lineIndexA, celIndexA),
            this.getCel(lineIndexA, celIndexB),
            this.getCel(lineIndexA, celIndexC),
            this.getCel(lineIndexB, celIndexA),
            this.getCel(lineIndexB, celIndexB),
            this.getCel(lineIndexB, celIndexC),
            this.getCel(lineIndexC, celIndexA),
            this.getCel(lineIndexC, celIndexB),
            this.getCel(lineIndexC, celIndexC),
        ].filter(function (n) { return n > 0; });
    };
    return Table;
}());
_Table_lines = new WeakMap();
var Line = /** @class */ (function () {
    function Line(cels) {
        _Line_cels.set(this, void 0);
        __classPrivateFieldSet(this, _Line_cels, cels, "f");
    }
    Object.defineProperty(Line.prototype, "cels", {
        get: function () {
            return __classPrivateFieldGet(this, _Line_cels, "f");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "celsValues", {
        get: function () {
            return __classPrivateFieldGet(this, _Line_cels, "f").map(function (cel) { return cel.response; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "celsValidValues", {
        get: function () {
            return __classPrivateFieldGet(this, _Line_cels, "f").map(function (cel) { return cel.validValues; });
        },
        enumerable: false,
        configurable: true
    });
    return Line;
}());
_Line_cels = new WeakMap();
var Cel = /** @class */ (function () {
    function Cel(response, validValues) {
        _Cel_response.set(this, void 0);
        _Cel_validValues.set(this, void 0);
        __classPrivateFieldSet(this, _Cel_response, response, "f");
        __classPrivateFieldSet(this, _Cel_validValues, validValues || [], "f");
    }
    Object.defineProperty(Cel.prototype, "response", {
        get: function () {
            return __classPrivateFieldGet(this, _Cel_response, "f");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cel.prototype, "validValues", {
        get: function () {
            return __classPrivateFieldGet(this, _Cel_validValues, "f");
        },
        enumerable: false,
        configurable: true
    });
    return Cel;
}());
_Cel_response = new WeakMap(), _Cel_validValues = new WeakMap();
var Column = /** @class */ (function () {
    function Column() {
    }
    return Column;
}());
var cel = new Cel(0);
var line = new Line([cel, cel]);
var table = new Table([line, line]);
var column = table.getColumn(4);
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
    Array.from(document.querySelector(".grid").children).forEach(function (line, lineIndex) {
        Array.from(line.children).forEach(function (cel, celIndex) {
            var input = cel.children[0];
            input.value =
                solution[lineIndex][celIndex].response > 0
                    ? solution[lineIndex][celIndex].response
                    : "";
        });
    });
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
var resolve = document.querySelector(".resolve");
if (resolve)
    resolve.addEventListener("click", function () {
        var solution = sudokuResolve(tableEasy);
        console.log(solution);
    });
var resolveAfter = document.querySelector(".resolve-after");
if (resolveAfter)
    resolveAfter.addEventListener("click", function () {
        var table = [];
        Array.from(document.querySelector(".grid").children).forEach(function (line, lineIndex) {
            table.push([]);
            Array.from(line.children).forEach(function (cel, celIndex) {
                var input = cel.children[0];
                table.at(-1).push({
                    response: +input.value || 0,
                    validValues: [],
                });
            });
        });
        console.log("table:", table);
        var solution = sudokuResolve(table);
        console.log(solution);
    });

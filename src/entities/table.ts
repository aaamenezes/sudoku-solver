import Line from "./line";
import { TableProps } from "./types";

export default class Table {
  #lines: Line[];
  grid: HTMLDivElement | null;

  constructor(lines: TableProps) {
    this.#lines = lines;
    this.grid = document.querySelector(".grid");
  }

  /**
   * Data methods
   */

  get isComplete() {
    return this.#lines.every((line) => {
      return line.cels.every((cel) => {
        return cel.response > 0;
      });
    });
  }

  cel(lineIndex: number, celIndex: number) {
    return this.#lines[lineIndex].cels[celIndex];
  }

  line(lineIndex: number) {
    return this.#lines[lineIndex].filledValues;
  }

  column(celIndex: number) {
    const filledCels = this.#lines
      .map((line) => line.cels[celIndex])
      .filter((cel) => cel.response > 0);

    if (filledCels.length === 0) return [];
    const filledValuesInColumn = filledCels.map((cel) => cel.response);
    return filledValuesInColumn;
  }

  block(lineIndex: number, celIndex: number) {
    const [lineIndexA, lineIndexB, lineIndexC] = (() => {
      if (lineIndex === 0 || lineIndex === 1 || lineIndex === 2)
        return [0, 1, 2];
      if (lineIndex === 3 || lineIndex === 4 || lineIndex === 5)
        return [3, 4, 5];
      if (lineIndex === 6 || lineIndex === 7 || lineIndex === 8)
        return [6, 7, 8];

      throw new Error("lineIndex inválido");
    })();

    const [celIndexA, celIndexB, celIndexC] = (() => {
      if (celIndex === 0 || celIndex === 1 || celIndex === 2) return [0, 1, 2];
      if (celIndex === 3 || celIndex === 4 || celIndex === 5) return [3, 4, 5];
      if (celIndex === 6 || celIndex === 7 || celIndex === 8) return [6, 7, 8];

      throw new Error("celIndex inválido");
    })();

    return [
      this.cel(lineIndexA, celIndexA).response,
      this.cel(lineIndexA, celIndexB).response,
      this.cel(lineIndexA, celIndexC).response,
      this.cel(lineIndexB, celIndexA).response,
      this.cel(lineIndexB, celIndexB).response,
      this.cel(lineIndexB, celIndexC).response,
      this.cel(lineIndexC, celIndexA).response,
      this.cel(lineIndexC, celIndexB).response,
      this.cel(lineIndexC, celIndexC).response,
    ].filter((cel) => cel > 0);
  }

  setCel(celData: number, lineIndex: number, celIndex: number) {
    const currentCel = this.cel(lineIndex, celIndex);
    currentCel.response = celData;
    currentCel.validValues = [];
  }

  nonValidValues(lineIndex: number, celIndex: number) {
    return [
      ...new Set([
        ...this.line(lineIndex),
        ...this.column(celIndex),
        ...this.block(lineIndex, celIndex),
      ]),
    ];
  }

  validValues(lineIndex: number, celIndex: number) {
    const validValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const nonValidValues = this.nonValidValues(lineIndex, celIndex);

    return validValues.filter((validValue) => {
      return !nonValidValues.includes(validValue);
    });
  }

  fromScreenToInstance() {
    if (!this.grid) throw new Error("O grid não foi encontrado");

    Array.from(this.grid.children).forEach((line, lineIndex) => {
      Array.from(line.children).forEach((cel, celIndex) => {
        const input = cel.children[0] as HTMLInputElement;
        this.setCel(Number(input.value) || 0, lineIndex, celIndex);
      });
    });
  }

  solve() {
    this.fromScreenToInstance();

    this.#lines.forEach((line, lineIndex) => {
      line.cels.forEach((cel, celIndex) => {
        cel.validValues = this.validValues(lineIndex, celIndex);
        cel.solve();
      });
    });

    this.insert(this.#lines);

    if (this.isComplete) {
      alert("Sudoku resolvido com sucesso!");
    }
  }

  /**
   * Screen methods
   */

  insert(table: TableProps) {
    if (!this.grid) throw new Error("O grid não foi encontrado");

    Array.from(this.grid.children).forEach((line, lineIndex) => {
      Array.from(line.children).forEach((cel, celIndex) => {
        const currentValue = table[lineIndex].cels[celIndex].response;
        if (currentValue === 0) return;

        const input = cel.children[0] as HTMLInputElement;
        input.value = currentValue.toString();
      });
    });
  }

  clear() {
    if (!this.grid) throw new Error("O grid não foi encontrado");

    Array.from(this.grid.children).forEach((line, lineIndex) => {
      Array.from(line.children).forEach((cel, celIndex) => {
        const input = cel.children[0] as HTMLInputElement;
        input.value = "";
      });
    });
  }
}

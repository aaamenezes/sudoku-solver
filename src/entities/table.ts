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
    return this.#lines[lineIndex].cels[celIndex].response;
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
      this.cel(lineIndexA, celIndexA),
      this.cel(lineIndexA, celIndexB),
      this.cel(lineIndexA, celIndexC),
      this.cel(lineIndexB, celIndexA),
      this.cel(lineIndexB, celIndexB),
      this.cel(lineIndexB, celIndexC),
      this.cel(lineIndexC, celIndexA),
      this.cel(lineIndexC, celIndexB),
      this.cel(lineIndexC, celIndexC),
    ].filter((cel) => cel > 0);
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

  solve() {
    this.#lines.forEach((line, lineIndex) => {
      line.cels.forEach((cel, celIndex) => {
        cel.validValues = this.validValues(lineIndex, celIndex);
        cel.solve();
      });
    });

    this.insert(this.#lines);
  }

  /**
   * Screen methods
   */

  insert(table: TableProps) {
    if (!this.grid) throw new Error("O grid não foi encontrado");

    Array.from(this.grid.children).forEach((line, lineIndex) => {
      Array.from(line.children).forEach((cel, celIndex) => {
        const currentValue = this.cel(lineIndex, celIndex);
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

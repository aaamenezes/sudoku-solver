import Line from "./line";
import { CelProps } from "./types";

export default class Table {
  #lines: Line[];

  constructor(lines: Line[]) {
    this.#lines = lines;
  }

  getLine(index: number) {
    return this.#lines[index];
  }

  getColumn(index: number) {
    return this.#lines.map((line) => line.cels[index].response);
  }

  getCel(lineIndex: number, celIndex: number) {
    return this.#lines[lineIndex].cels[celIndex].response;
  }

  getBlock(lineIndex: number, celIndex: number) {
    const [lineIndexA, lineIndexB, lineIndexC] = (() => {
      if (lineIndex === 0 || lineIndex === 1 || lineIndex === 2)
        return [0, 1, 2];
      if (lineIndex === 3 || lineIndex === 4 || lineIndex === 5)
        return [3, 4, 5];
      return [6, 7, 8];
    })();

    const [celIndexA, celIndexB, celIndexC] = (() => {
      if (celIndex === 0 || celIndex === 1 || celIndex === 2) return [0, 1, 2];
      if (celIndex === 3 || celIndex === 4 || celIndex === 5) return [3, 4, 5];
      return [6, 7, 8];
    })();

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
    ].filter((n) => n > 0);
  }

  get isComplete() {
    return this.#lines.every((line) => {
      line.cels.every((cel: CelProps) => {
        cel.response > 0;
      });
    });
  }

  get nextEmpty() {
    /**
     * TODO PAREI AQUI
     */
    return this.#lines.find((line) =>
      line.cels.find((cel: CelProps) => cel.response === 0)
    );
  }

  solve() {
    //
  }
}

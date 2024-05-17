import Line from "./line";

export default class Table {
  #lines: Line[];

  constructor(lines: Line[]) {
    this.#lines = lines;
  }

  get isComplete() {
    return this.#lines.every((line) => {
      return line.cels.every((cel) => {
        return cel.response > 0;
      });
    });
  }

  getCel(lineIndex: number, celIndex: number) {
    return this.#lines[lineIndex].cels[celIndex];
  }

  getLine(lineIndex: number) {
    return this.#lines[lineIndex].validValues;
  }

  getColumn(celIndex: number) {
    const validValues = this.#lines
      .map((line) => line.cels[celIndex])
      .filter((cel) => cel.validValues);

    if (!validValues) return [];

    return validValues.map((cel) => cel.response);
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
      this.getCel(lineIndexA, celIndexA).response,
      this.getCel(lineIndexA, celIndexB).response,
      this.getCel(lineIndexA, celIndexC).response,
      this.getCel(lineIndexB, celIndexA).response,
      this.getCel(lineIndexB, celIndexB).response,
      this.getCel(lineIndexB, celIndexC).response,
      this.getCel(lineIndexC, celIndexA).response,
      this.getCel(lineIndexC, celIndexB).response,
      this.getCel(lineIndexC, celIndexC).response,
    ].filter((cel) => cel > 0);
  }

  getNonValidValues(lineIndex: number, celIndex: number) {
    return [
      ...this.getLine(lineIndex),
      ...this.getColumn(celIndex),
      ...this.getBlock(lineIndex, celIndex),
    ];
  }

  getValidValues(nonValidValues: number[]) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((v) => {
      return nonValidValues.every(function (n) {
        return n !== v;
      });
    });
  }

  solve() {
    this.#lines.forEach((line, lineIndex) => {
      line.cels.forEach((cel, celIndex) => {
        const nonValidValues = this.getNonValidValues(lineIndex, celIndex);
        const validValues = this.getValidValues(nonValidValues);
        cel.validValues = validValues;
        cel.solve();
      });
    });

    console.log(`this.isComplete():`, this.isComplete);

    /*
    if (!this.isComplete) {
      executar this.solve() até resolver tudo
    }

    if (this.isComplete()) Inserir resultado na tela

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
}

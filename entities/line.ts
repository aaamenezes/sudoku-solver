import { CelProps } from "./types";

export default class Line {
  #cels: CelProps[];

  constructor(cels: CelProps[]) {
    this.#cels = cels;
  }

  get cels() {
    return this.#cels;
  }

  get celsValues() {
    return this.#cels.map((cel) => cel.response);
  }

  get celsValidValues() {
    return this.#cels.map((cel) => cel.validValues);
  }
}

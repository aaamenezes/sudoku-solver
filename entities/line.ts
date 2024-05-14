import { CelProps } from "./types";

export default class Line {
  #cels: CelProps[];

  constructor(cels: CelProps[]) {
    this.#cels = cels;
  }

  get cels() {
    return this.#cels;
  }

  get values() {
    return this.#cels.map((cel) => cel.response);
  }

  get validValues() {
    return this.#cels
      .filter((cel) => cel.response > 0)
      .map((cel) => cel.response);
  }
}

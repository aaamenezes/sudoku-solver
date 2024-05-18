import type { LineProps } from "./types";

export default class Line {
  #cels: LineProps;

  constructor(cels: LineProps) {
    this.#cels = cels;
  }

  get cels() {
    return this.#cels;
  }

  get values() {
    return this.#cels.map((cel) => cel.response);
  }

  get filledValues() {
    return this.#cels
      .filter((cel) => cel.response > 0)
      .map((cel) => cel.response);
  }
}

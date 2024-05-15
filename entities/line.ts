import Cel from "./cel";

export default class Line {
  #cels: Cel[];

  constructor(cels: Cel[]) {
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

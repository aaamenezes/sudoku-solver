export default class Cel {
  #response: number;
  #validValues: number[];

  constructor(response: number) {
    this.#response = response;
    this.#validValues = [];
  }

  get response() {
    return this.#response;
  }

  set response(response: number) {
    this.#response = response;
  }

  solve() {
    if (this.#response > 0) return;

    if (this.#validValues.length === 0) {
      throw new Error("Uma célula não pode ter valores válidos vazios");
    }

    if (this.#validValues.length !== 1) return;

    this.#response = this.#validValues[0];
  }

  get validValues() {
    return this.#validValues;
  }

  set validValues(validValues: number[]) {
    this.#validValues = validValues;
  }
}

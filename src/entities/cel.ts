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

  get validValues() {
    return this.#validValues;
  }

  set validValues(validValues: number[]) {
    this.#validValues = validValues;
  }

  solve() {
    if (this.#response > 0) return;
    if (this.#validValues.length !== 1) return;

    this.#response = this.#validValues[0];
  }
}

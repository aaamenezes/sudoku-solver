export default class Cel {
  #response: number;
  #validValues?: number[];

  constructor(response: number, validValues?: number[]) {
    this.#response = response;
    this.#validValues = validValues || [];
  }

  get response() {
    return this.#response;
  }

  get validValues() {
    return this.#validValues;
  }
}

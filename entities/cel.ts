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
}

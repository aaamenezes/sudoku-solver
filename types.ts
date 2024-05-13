export interface Cel {
  response: number; // 0 === vazio
  validValues: number[];
}

export type Line = Cel[];
export type Table = Line[];

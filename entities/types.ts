export interface CelProps {
  response: number; // 0 === vazio
  validValues?: number[];
}

export type LineProps = CelProps[];
export type TableProps = LineProps[];
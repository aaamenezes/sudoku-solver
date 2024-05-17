interface CelProps {
  response: number; // 0 === vazio
  validValues?: number[];
}

type LineProps = CelProps[];
export type TableProps = LineProps[];

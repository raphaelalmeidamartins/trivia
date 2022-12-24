export interface IRankItem {
  id: string;
  name: string;
  score: number;
  picture: string;
}

type IRanking = IRankItem[];

export default IRanking;

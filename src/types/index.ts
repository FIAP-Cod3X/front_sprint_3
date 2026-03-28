export interface Integrante {
  nome: string;
  rm: string;
  turma: string;
  descricao: string;
  foto: string;
  github: string;
  linkedin: string;
}

export interface FaqItem {
  id: number;
  pergunta: string;
  resposta: string;
}

export interface SolucaoItem {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
  detalhes: string;
  recursos: string[];
}

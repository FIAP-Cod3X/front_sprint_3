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
 

export type StatusAtendimento =
  | "ABERTO"
  | "EM_ANDAMENTO"
  | "AGUARDANDO_RESPOSTA"
  | "RESOLVIDO"
  | "CANCELADO";
 
export type Prioridade = "BAIXA" | "MEDIA" | "ALTA" | "CRITICA";
 
export type CanalComunicacao = "WHATSAPP" | "EMAIL" | "PORTAL" | "TELEFONE";
 
export type PerfilUsuario = "ADMIN" | "OPERADOR" | "VOLUNTARIO";
 
export type OrigemMensagem = "SISTEMA" | "USUARIO" | "SOLICITANTE";
 
// ─── Interfaces da API ───────────────────────────────────────────────────────
 
export interface Solicitante {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  tipoPublico?: string;
  createdAt?: string;
}
 
export interface Departamento {
  id: number;
  nome: string;
  descricao?: string;
  ativo: boolean;
}
 
export interface Usuario {
  id: number;
  nome: string;
  email: string;
  perfil: PerfilUsuario;
  ativo: boolean;
}
 
export interface Mensagem {
  id: number;
  conteudo: string;
  origem: OrigemMensagem;
  createdAt: string;
}
 
export interface Atendimento {
  id: number;
  assunto: string;
  descricao: string;
  status: StatusAtendimento;
  prioridade: Prioridade;
  canal: CanalComunicacao;
  solicitante?: Solicitante;
  departamento?: Departamento;
  responsavel?: Usuario;
  createdAt: string;
  updatedAt?: string;
}
 
 
export type AtendimentoComMensagens = Atendimento & {
  mensagens: Mensagem[];
};
 
export type AtendimentoComDiagnostico = Atendimento & {
  diagnostico: {
    acaoRecomendada: string;
    situacaoOperacional: string;
    observacoes?: string;
  };
};
 
 
export interface AtendimentoRequest {
  assunto: string;
  descricao: string;
  canal: CanalComunicacao;
  solicitanteId?: number;
}
 
export interface SolicitanteRequest {
  nome: string;
  email: string;
  telefone?: string;
}
 
 
export type LoadingState = "idle" | "loading" | "success" | "error";
 
export interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
 
export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  page: number;
  size: number;
}
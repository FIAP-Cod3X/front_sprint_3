import type {
  Atendimento,
  AtendimentoRequest,
  AtendimentoComMensagens,
  AtendimentoComDiagnostico,
  Solicitante,
  SolicitanteRequest,
  Departamento,
  Usuario,
  Mensagem,
  StatusAtendimento,
} from "../types";

const BASE_URL = "https://tdb-atendimento.onrender.com";

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Erro desconhecido");
    throw new Error(`Erro ${response.status}: ${errorText}`);
  }

  // 204 No Content
  if (response.status === 204) return undefined as unknown as T;

  return response.json() as Promise<T>;
}


export const atendimentosService = {
  listar: () => request<Atendimento[]>("/api/atendimentos"),

  buscar: (id: number) => request<Atendimento>(`/api/atendimentos/${id}`),

  abrir: (data: AtendimentoRequest) =>
    request<Atendimento>("/api/atendimentos", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  atualizar: (id: number, data: Partial<AtendimentoRequest>) =>
    request<Atendimento>(`/api/atendimentos/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  excluir: (id: number) =>
    request<void>(`/api/atendimentos/${id}`, { method: "DELETE" }),

  alterarStatus: (id: number, status: StatusAtendimento) =>
    request<Atendimento>(`/api/atendimentos/${id}/status`, {
      method: "PUT",
      body: JSON.stringify({ status }),
    }),

  filaPriorizada: () =>
    request<Atendimento[]>("/api/atendimentos/fila-priorizada"),

  buscarComMensagens: async (id: number): Promise<AtendimentoComMensagens> => {
    const [atendimento, mensagens] = await Promise.all([
      request<Atendimento>(`/api/atendimentos/${id}`),
      request<Mensagem[]>(`/api/atendimentos/${id}/mensagens`),
    ]);
    return { ...atendimento, mensagens };
  },

  buscarComDiagnostico: async (
    id: number
  ): Promise<AtendimentoComDiagnostico> => {
    const [atendimento, diagnostico] = await Promise.all([
      request<Atendimento>(`/api/atendimentos/${id}`),
      request<AtendimentoComDiagnostico["diagnostico"]>(
        `/api/atendimentos/${id}/diagnostico-negocio`
      ),
    ]);
    return { ...atendimento, diagnostico };
  },

  registrarMensagem: (id: number, conteudo: string) =>
    request<Mensagem>(`/api/atendimentos/${id}/mensagens`, {
      method: "POST",
      body: JSON.stringify({ conteudo }),
    }),
};



export const solicitantesService = {
  listar: () => request<Solicitante[]>("/api/solicitantes"),

  buscar: (id: number) => request<Solicitante>(`/api/solicitantes/${id}`),

  criar: (data: SolicitanteRequest) =>
    request<Solicitante>("/api/solicitantes", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  atualizar: (id: number, data: Partial<SolicitanteRequest>) =>
    request<Solicitante>(`/api/solicitantes/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  excluir: (id: number) =>
    request<void>(`/api/solicitantes/${id}`, { method: "DELETE" }),
};


export const departamentosService = {
  listar: () => request<Departamento[]>("/api/departamentos"),

  buscar: (id: number) => request<Departamento>(`/api/departamentos/${id}`),

  criar: (data: { nome: string; descricao?: string }) =>
    request<Departamento>("/api/departamentos", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  excluir: (id: number) =>
    request<void>(`/api/departamentos/${id}`, { method: "DELETE" }),
};


export const usuariosService = {
  listar: () => request<Usuario[]>("/api/usuarios"),

  buscar: (id: number) => request<Usuario>(`/api/usuarios/${id}`),
};



export const relatoriosService = {
  resumo: () => request<Record<string, unknown>>("/api/relatorios/resumo"),
};

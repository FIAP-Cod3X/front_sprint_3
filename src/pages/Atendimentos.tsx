import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { atendimentosService, solicitantesService } from "../services/api";
import { useApi } from "../hooks/useApi";
import type {
  Atendimento,
  AtendimentoRequest,
  StatusAtendimento,
  CanalComunicacao,
  Solicitante,
} from "../types";

const statusLabel: Record<StatusAtendimento, string> = {
  ABERTO: "Aberto",
  EM_ANDAMENTO: "Em Andamento",
  AGUARDANDO_RESPOSTA: "Aguardando Resposta",
  RESOLVIDO: "Resolvido",
  CANCELADO: "Cancelado",
};

const statusColor: Record<StatusAtendimento, string> = {
  ABERTO: "bg-blue-100 text-blue-700",
  EM_ANDAMENTO: "bg-yellow-100 text-yellow-700",
  AGUARDANDO_RESPOSTA: "bg-orange-100 text-orange-700",
  RESOLVIDO: "bg-green-100 text-green-700",
  CANCELADO: "bg-red-100 text-red-700",
};

const emptyForm: AtendimentoRequest = {
  assunto: "",
  descricao: "",
  canal: "PORTAL",
  solicitanteId: undefined,
};

export default function Atendimentos() {
  useEffect(() => {
    document.title = "Cod3X - Atendimentos";
  }, []);

  const { data: atendimentos, loading, error, refetch } = useApi(
    () => atendimentosService.listar(),
    []
  );

  const { data: solicitantes } = useApi<Solicitante[]>(
    () => solicitantesService.listar(),
    []
  );

  const [showForm, setShowForm] = useState(false);
  const [editando, setEditando] = useState<Atendimento | null>(null);
  const [form, setForm] = useState<AtendimentoRequest>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [filtroStatus, setFiltroStatus] = useState<StatusAtendimento | "TODOS">("TODOS");
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const lista = atendimentos ?? [];
  const filtrados =
    filtroStatus === "TODOS"
      ? lista
      : lista.filter((a) => a.status === filtroStatus);

  function abrirNovoForm() {
    setEditando(null);
    setForm(emptyForm);
    setSaveError(null);
    setShowForm(true);
  }

  function abrirEditarForm(a: Atendimento) {
    setEditando(a);
    setForm({
      assunto: (a as any).assunto ?? "",
      descricao: a.descricao,
      canal: a.canal,
      solicitanteId: a.solicitante?.id,
    });
    setSaveError(null);
    setShowForm(true);
  }

  function fecharForm() {
    setShowForm(false);
    setEditando(null);
    setForm(emptyForm);
    setSaveError(null);
  }

  function showSuccess(msg: string) {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(null), 3000);
  }

  async function handleSalvar() {
    if (!form.assunto.trim()) {
      setSaveError("Preencha o assunto.");
      return;
    }
    if (form.descricao.trim().length < 30) {
      setSaveError("A descrição deve ter pelo menos 30 caracteres.");
      return;
    }
    if (!form.solicitanteId) {
      setSaveError("Selecione um solicitante.");
      return;
    }
    setSaving(true);
    setSaveError(null);
    try {
      if (editando) {
        await atendimentosService.atualizar(editando.id, form);
        showSuccess("Atendimento atualizado com sucesso!");
      } else {
        await atendimentosService.abrir(form);
        showSuccess("Atendimento aberto com sucesso!");
      }
      fecharForm();
      refetch();
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Erro ao salvar");
    } finally {
      setSaving(false);
    }
  }

  async function handleExcluir(id: number) {
    if (!confirm("Deseja realmente excluir este atendimento?")) return;
    setDeletingId(id);
    try {
      await atendimentosService.excluir(id);
      showSuccess("Atendimento excluído.");
      refetch();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Erro ao excluir");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Atendimentos</h1>
            <p className="opacity-90">Gerencie todas as solicitações da Turma do Bem em tempo real.</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {successMsg && (
            <div className="mb-4 bg-green-100 text-green-800 border border-green-300 rounded-lg px-4 py-3 flex items-center gap-2">
              <i className="fa-solid fa-circle-check"></i>
              {successMsg}
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
            <div className="flex flex-wrap gap-2">
              {(["TODOS", "ABERTO", "EM_ANDAMENTO", "AGUARDANDO_RESPOSTA", "RESOLVIDO", "CANCELADO"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setFiltroStatus(s)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    filtroStatus === s
                      ? "bg-primary text-white"
                      : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {s === "TODOS" ? "Todos" : statusLabel[s]}
                </button>
              ))}
            </div>
            <button
              onClick={abrirNovoForm}
              className="flex items-center gap-2 bg-action hover:bg-action-dark text-white font-bold px-4 py-2 rounded-lg transition-colors"
            >
              <i className="fa-solid fa-plus"></i>
              Novo Atendimento
            </button>
          </div>

          {loading && (
            <div className="flex justify-center py-16">
              <div className="flex flex-col items-center gap-3 text-gray-500">
                <i className="fa-solid fa-spinner fa-spin text-3xl text-primary"></i>
                <span>Carregando atendimentos...</span>
              </div>
            </div>
          )}

          {error && !loading && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-6 text-center">
              <i className="fa-solid fa-triangle-exclamation text-2xl mb-2"></i>
              <p className="font-semibold">Não foi possível carregar os atendimentos</p>
              <p className="text-sm mt-1">{error}</p>
              <button onClick={refetch} className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                Tentar novamente
              </button>
            </div>
          )}

          {!loading && !error && (
            <>
              {filtrados.length === 0 ? (
                <div className="text-center py-16 text-gray-400">
                  <i className="fa-solid fa-inbox text-5xl mb-4 block"></i>
                  <p className="text-lg">Nenhum atendimento encontrado.</p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {filtrados.map((a) => (
                    <div key={a.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-gray-400 text-sm font-mono">#{a.id}</span>
                            <span className={`px-2 py-0.5 rounded-full text-xs ${statusColor[a.status]}`}>
                              {statusLabel[a.status]}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-600">
                              {a.canal}
                            </span>
                          </div>
                          <h3 className="font-bold text-gray-800 text-lg truncate">
                            {(a as any).assunto ?? a.descricao}
                          </h3>
                          <p className="text-gray-500 text-sm mt-1 line-clamp-2">{a.descricao}</p>
                          {a.solicitante && (
                            <p className="text-xs text-gray-400 mt-2">
                              <i className="fa-solid fa-user mr-1"></i>
                              {a.solicitante.nome}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <button
                            onClick={() => abrirEditarForm(a)}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors text-sm"
                          >
                            <i className="fa-solid fa-pen"></i> Editar
                          </button>
                          <button
                            onClick={() => handleExcluir(a.id)}
                            disabled={deletingId === a.id}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-sm disabled:opacity-50"
                          >
                            {deletingId === a.id
                              ? <i className="fa-solid fa-spinner fa-spin"></i>
                              : <i className="fa-solid fa-trash"></i>}
                            Excluir
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-primary">
                {editando ? "Editar Atendimento" : "Novo Atendimento"}
              </h2>
              <button onClick={fecharForm} className="text-gray-400 hover:text-gray-600 transition-colors">
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Assunto *</label>
                <input
                  type="text"
                  value={form.assunto}
                  onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                  placeholder="Assunto do atendimento"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descrição *</label>
                <textarea
                  value={form.descricao}
                  onChange={(e) => setForm({ ...form, descricao: e.target.value })}
                  rows={3}
                  placeholder="Descreva o atendimento com detalhes suficientes (mín. 30 caracteres)..."
                  className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 resize-none ${
                    form.descricao.trim().length > 0 && form.descricao.trim().length < 30
                      ? "border-red-400 focus:ring-red-300"
                      : "border-gray-300 focus:ring-primary/50"
                  }`}
                />
                <div className="flex justify-between mt-1">
                  {form.descricao.trim().length > 0 && form.descricao.trim().length < 30 ? (
                    <p className="text-xs text-red-500">
                      <i className="fa-solid fa-triangle-exclamation mr-1"></i>
                      Mínimo de 30 caracteres ({30 - form.descricao.trim().length} restantes)
                    </p>
                  ) : (
                    <span />
                  )}
                  <p className={`text-xs ml-auto ${form.descricao.trim().length >= 30 ? "text-green-500" : "text-gray-400"}`}>
                    {form.descricao.trim().length} caracteres
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Solicitante *</label>
                <select
                  value={form.solicitanteId ?? ""}
                  onChange={(e) => setForm({ ...form, solicitanteId: e.target.value ? Number(e.target.value) : undefined })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Selecione um solicitante...</option>
                  {(solicitantes ?? []).map((s) => (
                    <option key={s.id} value={s.id}>{s.nome} — {s.email}</option>
                  ))}
                </select>
                {(solicitantes ?? []).length === 0 && (
                  <p className="text-xs text-orange-500 mt-1">
                    <i className="fa-solid fa-triangle-exclamation mr-1"></i>
                    Cadastre um solicitante primeiro na página de Solicitantes.
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Canal</label>
                <select
                  value={form.canal}
                  onChange={(e) => setForm({ ...form, canal: e.target.value as CanalComunicacao })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="PORTAL">Portal</option>
                  <option value="WHATSAPP">WhatsApp</option>
                  <option value="EMAIL">E-mail</option>
                  <option value="TELEFONE">Telefone</option>
                </select>
              </div>

              {saveError && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-3 py-2 text-sm">
                  <i className="fa-solid fa-triangle-exclamation mr-1"></i>
                  {saveError}
                </div>
              )}
            </div>

            <div className="flex gap-3 p-6 border-t">
              <button onClick={fecharForm} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                Cancelar
              </button>
              <button
                onClick={handleSalvar}
                disabled={saving}
                className="flex-1 px-4 py-2 bg-action hover:bg-action-dark text-white font-bold rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {saving
                  ? <><i className="fa-solid fa-spinner fa-spin"></i> Salvando...</>
                  : <><i className="fa-solid fa-floppy-disk"></i> {editando ? "Salvar Alterações" : "Abrir Atendimento"}</>
                }
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { solicitantesService } from "../services/Api";
import { useApi } from "../hooks/useApi";
import type { Solicitante, SolicitanteRequest } from "../types";

const emptyForm: SolicitanteRequest = { nome: "", email: "", telefone: "" };

export default function Solicitantes() {
  useEffect(() => {
    document.title = "Cod3X - Solicitantes";
  }, []);

  const { data: solicitantes, loading, error, refetch } = useApi(
    () => solicitantesService.listar(),
    []
  );

  const [showForm, setShowForm] = useState(false);
  const [editando, setEditando] = useState<Solicitante | null>(null);
  const [form, setForm] = useState<SolicitanteRequest>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [busca, setBusca] = useState("");
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const lista = solicitantes ?? [];
  const filtrados = lista.filter(
    (s) =>
      s.nome.toLowerCase().includes(busca.toLowerCase()) ||
      s.email.toLowerCase().includes(busca.toLowerCase())
  );

  function abrirNovoForm() {
    setEditando(null);
    setForm(emptyForm);
    setSaveError(null);
    setShowForm(true);
  }

  function abrirEditarForm(s: Solicitante) {
    setEditando(s);
    setForm({ nome: s.nome, email: s.email, telefone: s.telefone ?? "" });
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
    if (!form.nome.trim() || !form.email.trim()) {
      setSaveError("Preencha nome e e-mail.");
      return;
    }
    setSaving(true);
    setSaveError(null);
    try {
      if (editando) {
        await solicitantesService.atualizar(editando.id, form);
        showSuccess("Solicitante atualizado!");
      } else {
        await solicitantesService.criar(form);
        showSuccess("Solicitante cadastrado!");
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
    if (!confirm("Deseja excluir este solicitante?")) return;
    setDeletingId(id);
    try {
      await solicitantesService.excluir(id);
      showSuccess("Solicitante excluído.");
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Solicitantes</h1>
            <p className="opacity-90">
              Cadastre e gerencie os beneficiários da Turma do Bem.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8 max-w-5xl">
          {successMsg && (
            <div className="mb-4 bg-green-100 text-green-800 border border-green-300 rounded-lg px-4 py-3 flex items-center gap-2">
              <i className="fa-solid fa-circle-check"></i>
              {successMsg}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar por nome ou e-mail..."
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <button
              onClick={abrirNovoForm}
              className="flex items-center gap-2 bg-action hover:bg-action-dark text-white font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              <i className="fa-solid fa-plus"></i>
              Novo Solicitante
            </button>
          </div>

          {loading && (
            <div className="flex justify-center py-16">
              <div className="flex flex-col items-center gap-3 text-gray-500">
                <i className="fa-solid fa-spinner fa-spin text-3xl text-primary"></i>
                <span>Carregando solicitantes...</span>
              </div>
            </div>
          )}

          {error && !loading && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-6 text-center">
              <i className="fa-solid fa-triangle-exclamation text-2xl mb-2"></i>
              <p className="font-semibold">Não foi possível carregar os dados</p>
              <p className="text-sm mt-1">{error}</p>
              <button onClick={refetch} className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                Tentar novamente
              </button>
            </div>
          )}

          {!loading && !error && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {filtrados.length === 0 ? (
                <div className="text-center py-16 text-gray-400">
                  <i className="fa-solid fa-users text-5xl mb-4 block"></i>
                  <p className="text-lg">Nenhum solicitante encontrado.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left px-4 py-3 text-gray-600 font-semibold">#</th>
                        <th className="text-left px-4 py-3 text-gray-600 font-semibold">Nome</th>
                        <th className="text-left px-4 py-3 text-gray-600 font-semibold">E-mail</th>
                        <th className="text-left px-4 py-3 text-gray-600 font-semibold">Telefone</th>
                        <th className="text-right px-4 py-3 text-gray-600 font-semibold">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtrados.map((s, idx) => (
                        <tr
                          key={s.id}
                          className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                        >
                          <td className="px-4 py-3 text-gray-400 font-mono">{s.id}</td>
                          <td className="px-4 py-3 font-medium text-gray-800">{s.nome}</td>
                          <td className="px-4 py-3 text-gray-600">{s.email}</td>
                          <td className="px-4 py-3 text-gray-600">{s.telefone ?? "—"}</td>
                          <td className="px-4 py-3">
                            <div className="flex gap-2 justify-end">
                              <button
                                onClick={() => abrirEditarForm(s)}
                                className="px-3 py-1 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors text-xs"
                              >
                                <i className="fa-solid fa-pen mr-1"></i>Editar
                              </button>
                              <button
                                onClick={() => handleExcluir(s.id)}
                                disabled={deletingId === s.id}
                                className="px-3 py-1 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-xs disabled:opacity-50"
                              >
                                {deletingId === s.id ? (
                                  <i className="fa-solid fa-spinner fa-spin"></i>
                                ) : (
                                  <><i className="fa-solid fa-trash mr-1"></i>Excluir</>
                                )}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-primary">
                {editando ? "Editar Solicitante" : "Novo Solicitante"}
              </h2>
              <button onClick={fecharForm} className="text-gray-400 hover:text-gray-600">
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Nome completo"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email@exemplo.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <input
                  type="text"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  placeholder="(11) 99999-9999"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
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
                {saving ? (
                  <><i className="fa-solid fa-spinner fa-spin"></i> Salvando...</>
                ) : (
                  <><i className="fa-solid fa-floppy-disk"></i> {editando ? "Salvar" : "Cadastrar"}</>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

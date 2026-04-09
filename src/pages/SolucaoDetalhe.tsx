import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { solucoesData } from "./Solucao";

export default function SolucaoDetalhe() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const solucao = solucoesData.find((s) => s.id === id);

  useEffect(() => {
    if (solucao) {
      document.title = `Cod3X - ${solucao.titulo}`;
    } else {
      document.title = "Cod3X - Solução não encontrada";
    }
  }, [solucao]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-12">
          <div className="container mx-auto px-4">
            <button
              onClick={() => navigate("/solucao")}
              className="text-white/80 hover:text-white transition-colors mb-4 flex items-center gap-2"
            >
              <i className="fa-solid fa-arrow-left"></i>
              Voltar para soluções
            </button>
            <h1 className="text-3xl md:text-4xl font-bold">
              {solucao ? solucao.titulo : "Solução não encontrada"}
            </h1>
          </div>
        </section>

        {solucao ? (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                {/* Ícone e Descrição */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-20 h-20 bg-action rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <i className={`${solucao.icone} text-white text-3xl`}></i>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      {solucao.titulo}
                    </h2>
                    <p className="text-gray-600">{solucao.descricao}</p>
                  </div>
                </div>

                {/* Detalhes */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h3 className="text-lg font-bold text-primary mb-3">
                    Como funciona
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solucao.detalhes}
                  </p>
                </div>

                {/* Recursos */}
                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">
                    Principais Recursos
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {solucao.recursos.map((recurso, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                        <i className="fa-solid fa-check-circle text-accent"></i>
                        <span className="text-gray-700 text-sm">{recurso}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navegação entre soluções */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/solucao"
                    className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors text-center"
                  >
                    Ver Todas as Soluções
                  </Link>
                  <Link
                    to="/contato"
                    className="bg-action hover:bg-action-dark text-white font-bold px-6 py-3 rounded-lg transition-colors text-center"
                  >
                    Entrar em Contato
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <i className="fa-solid fa-exclamation-triangle text-6xl text-action mb-4"></i>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Solução não encontrada
              </h2>
              <p className="text-gray-600 mb-6">
                A solução que você procura não existe. Verifique o endereço ou volte para a lista.
              </p>
              <button
                onClick={() => navigate("/solucao")}
                className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Voltar para Soluções
              </button>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

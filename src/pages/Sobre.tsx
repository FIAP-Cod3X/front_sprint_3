import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Sobre() {
  useEffect(() => {
    document.title = "Cod3X - Sobre o Projeto";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Sobre o Projeto</h1>
            <p className="text-lg opacity-90">
              Conheça o Cod3X e nossa parceria com a ONG Turma do Bem para
              transformar vidas através da tecnologia e da saúde bucal.
            </p>
          </div>
        </section>

        {/* A Turma do Bem */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <img
                  src="/img/sorrisos.png"
                  alt="Turma do Bem"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Turma do Bem
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  A Turma do Bem gerencia a maior rede de voluntariado especializado do mundo,
                  contando com mais de 18 mil dentistas atuando em 12 países. Oferece
                  atendimento odontológico gratuito à população de baixa renda em condição de
                  vulnerabilidade social.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Focando em dois públicos principais: jovens de 11 a 17 anos e mulheres
                  vítimas de violência de gênero que tiveram a dentição afetada. Em mais de
                  20 anos, já impactou mais de 82 mil jovens e 1.100 mulheres.
                </p>
                <a
                  href="https://turmadobem.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-action hover:text-action-dark font-semibold transition-colors"
                >
                  Conheça a Turma do Bem →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* O Projeto */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Nosso Projeto
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  O Cod3X é uma solução tecnológica desenvolvida para a ONG Turma do Bem,
                  focada em resolver o problema de dispersão de atendimentos em múltiplos
                  canais de comunicação.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A Turma do Bem recebe solicitações através de WhatsApp e Gmail, tornando
                  difícil o controle, priorização e acompanhamento dos atendimentos. Nossa
                  plataforma centraliza tudo em um lugar único.
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-primary mb-4">Nossa Solução</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check-circle text-accent mt-1"></i>
                      <span className="text-gray-600">Centraliza todos os atendimentos em um local único</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check-circle text-accent mt-1"></i>
                      <span className="text-gray-600">Roteia automaticamente solicitações para voluntários</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check-circle text-accent mt-1"></i>
                      <span className="text-gray-600">Acompanha o status de cada caso em tempo real</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-check-circle text-accent mt-1"></i>
                      <span className="text-gray-600">Gera relatórios gerenciais para tomada de decisões</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tecnologias */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary text-center mb-8">
              Tecnologias Utilizadas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-background rounded-xl p-4 text-center shadow">
                <i className="fa-brands fa-react text-4xl text-blue-500 mb-2"></i>
                <p className="font-semibold text-primary text-sm">React</p>
              </div>
              <div className="bg-background rounded-xl p-4 text-center shadow">
                <i className="fa-solid fa-bolt text-4xl text-yellow-500 mb-2"></i>
                <p className="font-semibold text-primary text-sm">Vite</p>
              </div>
              <div className="bg-background rounded-xl p-4 text-center shadow">
                <i className="fa-solid fa-code text-4xl text-blue-700 mb-2"></i>
                <p className="font-semibold text-primary text-sm">TypeScript</p>
              </div>
              <div className="bg-background rounded-xl p-4 text-center shadow">
                <i className="fa-brands fa-css3 text-4xl text-sky-500 mb-2"></i>
                <p className="font-semibold text-primary text-sm">TailwindCSS</p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary text-center mb-8">
              Roadmap do Projeto
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
                <span className="bg-accent text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <h3 className="font-bold text-primary">Sprint 1 - Fundação ✅</h3>
                  <p className="text-sm text-gray-600">Site estático desktop, prototipagem e documentação inicial.</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
                <span className="bg-accent text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-primary">Sprint 2 - Desenvolvimento ✅</h3>
                  <p className="text-sm text-gray-600">Responsividade, JavaScript, validações e LocalStorage.</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
                <span className="bg-accent text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-primary">Sprint 3 - Componentização ✅</h3>
                  <p className="text-sm text-gray-600">Migração para React + Vite + TypeScript + TailwindCSS.</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
                <span className="bg-accent text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                <div>
                  <h3 className="font-bold text-primary">Sprint 4 - Integração ✅</h3>
                  <p className="text-sm text-gray-600">Back-end, API REST e funcionalidades avançadas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Descubra Mais */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary text-center mb-8">
              Descubra mais sobre nós
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/integrantes" className="block p-6 bg-background rounded-xl shadow hover:shadow-lg transition-shadow text-center">
                <i className="fa-solid fa-users text-3xl text-accent mb-3"></i>
                <p className="font-semibold text-primary">Integrantes</p>
              </Link>
              <Link to="/solucao" className="block p-6 bg-background rounded-xl shadow hover:shadow-lg transition-shadow text-center">
                <i className="fa-solid fa-gear text-3xl text-action mb-3"></i>
                <p className="font-semibold text-primary">Nossa Solução</p>
              </Link>
              <Link to="/faq" className="block p-6 bg-background rounded-xl shadow hover:shadow-lg transition-shadow text-center">
                <i className="fa-solid fa-circle-question text-3xl text-primary mb-3"></i>
                <p className="font-semibold text-primary">Perguntas Frequentes</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

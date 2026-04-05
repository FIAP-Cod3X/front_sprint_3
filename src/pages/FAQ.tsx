import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { FaqItem } from "../types";

const faqData: FaqItem[] = [
  {
    id: 1,
    pergunta: "O que é o projeto Cod3X?",
    resposta: "O Cod3X é uma plataforma de gestão inteligente desenvolvida para a ONG Turma do Bem, com o objetivo de centralizar e otimizar atendimentos recebidos por múltiplos canais de comunicação."
  },
  {
    id: 2,
    pergunta: "Quem é a Turma do Bem?",
    resposta: "A Turma do Bem é uma OSCIP fundada em 2002 que gerencia a maior rede de voluntariado especializado do mundo, com mais de 18 mil dentistas atuando em 12 países, oferecendo tratamento odontológico gratuito."
  },
  {
    id: 3,
    pergunta: "Quais são os programas da Turma do Bem?",
    resposta: "Os principais programas são o Dentista do Bem, que atende jovens de 11 a 17 anos em vulnerabilidade social, e o Apolônias do Bem, que atende mulheres vítimas de violência que tiveram a dentição afetada."
  },
  {
    id: 4,
    pergunta: "Qual problema o Cod3X resolve?",
    resposta: "A Turma do Bem recebe solicitações por WhatsApp e Gmail, o que dificulta o controle e priorização. O Cod3X centraliza todos os atendimentos em uma única plataforma, automatiza o encaminhamento e gera relatórios gerenciais."
  },
  {
    id: 5,
    pergunta: "Quais tecnologias são utilizadas?",
    resposta: "O projeto utiliza React com Vite e TypeScript para o front-end, estilizado com TailwindCSS. A navegação é feita com React Router e os formulários com React Hook Form."
  },
  {
    id: 6,
    pergunta: "Como posso contribuir com a Turma do Bem?",
    resposta: "Você pode se voluntariar como dentista, fazer doações, ou se tornar um parceiro. Acesse nosso formulário de contato para saber mais sobre como participar."
  },
  {
    id: 7,
    pergunta: "O sistema permite acompanhar os atendimentos?",
    resposta: "Sim! A plataforma permite rastreamento em tempo real do andamento das solicitações, com relatórios organizados e comunicação direta com a equipe de atendimento."
  },
  {
    id: 8,
    pergunta: "Quem desenvolveu o projeto?",
    resposta: "O projeto foi desenvolvido pela equipe Cod3X, composta por estudantes da FIAP como parte do Challenge acadêmico em parceria com a Turma do Bem."
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    document.title = "Cod3X - FAQ";
  }, []);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const faqFiltrado = faqData.filter(
    (item) =>
      item.pergunta.toLowerCase().includes(busca.toLowerCase()) ||
      item.resposta.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">FAQ</h1>
            <p className="text-lg opacity-90">
              Encontre respostas para as perguntas mais frequentes sobre o Cod3X e a Turma do Bem.
            </p>
          </div>
        </section>

        {/* Busca */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar pergunta..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                />
                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Items */}
        <section className="py-4 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto space-y-3">
              {faqFiltrado.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  Nenhuma pergunta encontrada para "{busca}".
                </p>
              ) : (
                faqFiltrado.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-4 text-left font-semibold text-primary hover:bg-gray-50 transition-colors flex justify-between items-center"
                    >
                      <span>{item.pergunta}</span>
                      <i
                        className={`fa-solid fa-chevron-down transition-transform duration-300 ${
                          openId === item.id ? "rotate-180" : ""
                        }`}
                      ></i>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openId === item.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-4 pb-4 text-gray-600 border-t pt-3">
                        {item.resposta}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Descubra Mais */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary text-center mb-8">
              Descubra mais sobre nós
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/contato" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow text-center">
                <i className="fa-solid fa-envelope text-3xl text-action mb-3"></i>
                <p className="font-semibold text-primary">Contato</p>
              </Link>
              <Link to="/" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow text-center">
                <i className="fa-solid fa-house text-3xl text-accent mb-3"></i>
                <p className="font-semibold text-primary">Início</p>
              </Link>
              <Link to="/sobre" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow text-center">
                <i className="fa-solid fa-lightbulb text-3xl text-primary mb-3"></i>
                <p className="font-semibold text-primary">Sobre</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

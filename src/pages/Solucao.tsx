import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { SolucaoItem } from "../types";

export const solucoesData: SolucaoItem[] = [
  {
    id: "centralizacao",
    titulo: "Centralização de Atendimentos",
    descricao: "Todos os atendimentos recebidos por WhatsApp, e-mail e formulários reunidos em um único painel.",
    icone: "fa-solid fa-inbox",
    detalhes: "A plataforma Cod3X centraliza todas as solicitações recebidas pela Turma do Bem, independentemente do canal de origem. Com isso, a equipe consegue visualizar e gerenciar todos os atendimentos de forma unificada, eliminando a dispersão de informações entre múltiplos canais. O sistema captura automaticamente os dados das solicitações e os organiza em um painel intuitivo.",
    recursos: [
      "Integração com WhatsApp e Gmail",
      "Painel unificado de atendimentos",
      "Captura automática de dados",
      "Organização por canal de origem",
    ],
  },
  {
    id: "roteamento",
    titulo: "Roteamento Inteligente",
    descricao: "Encaminhamento automático de solicitações para os voluntários mais adequados.",
    icone: "fa-solid fa-route",
    detalhes: "O sistema de roteamento inteligente do Cod3X analisa cada solicitação recebida e a encaminha automaticamente para o voluntário ou equipe mais adequada. Considerando critérios como especialidade, localização geográfica e disponibilidade, garantimos que cada caso seja tratado pelo profissional mais qualificado para atendê-lo.",
    recursos: [
      "Análise automática de solicitações",
      "Critérios de especialidade e localização",
      "Distribuição equilibrada de demandas",
      "Notificações para voluntários",
    ],
  },
  {
    id: "acompanhamento",
    titulo: "Acompanhamento em Tempo Real",
    descricao: "Status atualizado de cada atendimento, desde a abertura até a conclusão.",
    icone: "fa-solid fa-chart-line",
    detalhes: "Com o sistema de acompanhamento do Cod3X, é possível visualizar o status de cada atendimento em tempo real. Desde a abertura do caso até sua conclusão, cada etapa é registrada e pode ser consultada a qualquer momento. Isso proporciona transparência e permite que gestores identifiquem possíveis gargalos no fluxo de trabalho.",
    recursos: [
      "Timeline de cada atendimento",
      "Atualizações em tempo real",
      "Histórico completo de interações",
      "Alertas de SLA e prazos",
    ],
  },
  {
    id: "relatorios",
    titulo: "Relatórios Gerenciais",
    descricao: "Dados e métricas para apoiar a tomada de decisão da gestão da ONG.",
    icone: "fa-solid fa-file-lines",
    detalhes: "O módulo de relatórios do Cod3X gera dashboards e análises detalhadas sobre o desempenho dos atendimentos. Com gráficos interativos e exportação de dados, os gestores da Turma do Bem podem tomar decisões baseadas em dados concretos, identificar tendências e otimizar a alocação de recursos voluntários.",
    recursos: [
      "Dashboards interativos",
      "Exportação de dados em PDF e CSV",
      "Métricas de desempenho",
      "Análise de tendências",
    ],
  },
];

export default function Solucao() {
  useEffect(() => {
    document.title = "Cod3X - Nossa Solução";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Nossa Solução</h1>
            <p className="text-lg opacity-90">
              Conheça os módulos e funcionalidades do sistema Cod3X para gestão
              de atendimentos da Turma do Bem.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Plataforma Integrada de Gestão
              </h2>
              <p className="text-gray-600">
                O Cod3X foi projetado para resolver os desafios de comunicação da Turma do Bem,
                oferecendo uma solução completa que transforma a maneira como os atendimentos
                são gerenciados. Clique em cada módulo para saber mais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {solucoesData.map((solucao) => (
                <Link
                  key={solucao.id}
                  to={`/solucao/${solucao.id}`}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-action rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <i className={`${solucao.icone} text-white text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">{solucao.titulo}</h3>
                      <p className="text-gray-600 text-sm">{solucao.descricao}</p>
                      <span className="inline-block mt-3 text-action font-semibold text-sm group-hover:translate-x-1 transition-transform">
                        Ver detalhes →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Quer saber mais sobre o projeto?
            </h2>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco ou conheça mais sobre a equipe por trás do Cod3X.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="bg-action hover:bg-action-dark text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Fale Conosco
              </Link>
              <Link
                to="/sobre"
                className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Sobre o Projeto
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

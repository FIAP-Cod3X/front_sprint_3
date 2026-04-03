import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Cod3X - Saúde Bucal para Todos";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  A saúde bucal é um direito de todos
                </h1>
                <p className="text-base md:text-lg opacity-90 mb-6 leading-relaxed">
                  Um sorriso não deveria ser um privilégio. Através de uma rede de dentistas
                  voluntários, oferecemos tratamento completo e gratuito para quem mais precisa,
                  quebrando o ciclo de exclusão e transformando vidas. Porque acreditamos que um
                  sorriso saudável tem o poder de gerar inclusão social.
                </p>
                <Link
                  to="/contato"
                  className="inline-block bg-action hover:bg-action-dark text-white font-bold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg"
                >
                  Quero ajuda!
                </Link>
              </div>
              <div className="flex-1">
                <img
                  src="/img/sorriso.jpg"
                  alt="Jovem sorrindo, representando felicidade e saúde bucal"
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Como Podemos Ajudar */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-10">
              Como podemos ajudar você hoje?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card Voluntário */}
              <div className="bg-background rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-user-doctor text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  Quero ser um Dentista Voluntário
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Faça parte de uma grande rede de voluntariados especializados conosco.
                  Cadastre-se e ajude a transformar vidas através da saúde bucal.
                </p>
                <Link
                  to="/contato"
                  className="inline-block bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-lg transition-colors text-sm font-semibold"
                >
                  Saiba Mais
                </Link>
              </div>

              {/* Card Atendimento */}
              <div className="bg-background rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-action rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-tooth text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  Preciso de Atendimento
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Se você tem entre 11 e 17 anos ou é uma mulher vítima de violência,
                  veja como se inscrever em nossos programas de atendimento gratuito.
                </p>
                <Link
                  to="/contato"
                  className="inline-block bg-action hover:bg-action-dark text-white px-6 py-2 rounded-lg transition-colors text-sm font-semibold"
                >
                  Verificar Critérios
                </Link>
              </div>

              {/* Card Doação */}
              <div className="bg-background rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-handshake text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  Quero Doar ou ser um Parceiro
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Sua contribuição é fundamental para continuarmos nosso trabalho de
                  transformação social. Apoie nossa causa e faça a diferença.
                </p>
                <Link
                  to="/contato"
                  className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors text-sm font-semibold"
                >
                  Quero doar!
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Portal de Benefícios */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">
                Seu Portal Exclusivo
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Ao se cadastrar, você ganha acesso a um portal exclusivo para acompanhar
                o status de todas as suas solicitações, interagir com nossa equipe e consultar
                seus relatórios de forma segura e organizada.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-location-arrow text-action text-xl mt-1"></i>
                  <div>
                    <strong className="text-primary">Rastreamento</strong>
                    <p className="text-sm text-gray-600">Acompanhe em tempo real o andamento de suas solicitações.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-file text-action text-xl mt-1"></i>
                  <div>
                    <strong className="text-primary">Relatórios</strong>
                    <p className="text-sm text-gray-600">Documentos organizados e acessíveis em um só lugar.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-bolt text-action text-xl mt-1"></i>
                  <div>
                    <strong className="text-primary">Agilidade</strong>
                    <p className="text-sm text-gray-600">Respostas rápidas e comunicação direta com nossa equipe.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Descubra Mais */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary text-center mb-8">
              Descubra mais sobre nós
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/sobre" className="block p-6 bg-background rounded-xl shadow hover:shadow-lg transition-shadow text-center">
                <i className="fa-solid fa-lightbulb text-4xl text-action mb-4"></i>
                <p className="font-semibold text-primary">Sobre o Projeto</p>
              </Link>
              <Link to="/integrantes" className="block p-6 bg-background rounded-xl shadow hover:shadow-lg transition-shadow text-center">
                <i className="fa-solid fa-users text-4xl text-accent mb-4"></i>
                <p className="font-semibold text-primary">Integrantes</p>
              </Link>
              <Link to="/faq" className="block p-6 bg-background rounded-xl shadow hover:shadow-lg transition-shadow text-center">
                <i className="fa-solid fa-circle-question text-4xl text-primary mb-4"></i>
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

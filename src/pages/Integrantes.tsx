import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IntegranteCard from "../components/IntegranteCard";
import type { Integrante } from "../types";

import gabrielFoto from "../assets/img/gabriel.jpg";
import guilhermeFoto from "../assets/img/guilherme.jpeg";
import erickFoto from "../assets/img/erick.jpeg";

const integrantes: Integrante[] = [
  {
    nome: "Gabriel Stuani",
    rm: "RM566682",
    turma: "1TDSPB",
    descricao: "Estudante de Tecnologia na FIAP.",
    foto: gabrielFoto,
    github: "https://github.com/Gstuani",
    linkedin: "https://www.linkedin.com/in/gabrielstuani/",
  },
  {
    nome: "Guilherme Soares",
    rm: "RM568227",
    turma: "1TDSPB",
    descricao: "Estudante de Tecnologia na FIAP.",
    foto: guilhermeFoto,
    github: "https://github.com/Guilherme-Soares00",
    linkedin: "https://www.linkedin.com/in/guilherme-soares-alberti/",
  },
  {
    nome: "Erick Ramos Santos",
    rm: "RM567837",
    turma: "1TDSPB",
    descricao: "Estudante de Tecnologia na FIAP.",
    foto: erickFoto,
    github: "https://github.com/erickramossantoser",
    linkedin: "https://www.linkedin.com/in/erickrsantos/",
  },
];

export default function Integrantes() {
  useEffect(() => {
    document.title = "Cod3X - Integrantes";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Banner Intro */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Integrantes
            </h1>

            <p className="text-lg opacity-90">
              Conheça a equipe por trás do projeto Cod3X. Somos dedicados a
              criar soluções que fazem a diferença na vida das pessoas.
            </p>
          </div>
        </section>

        {/* Cards dos Integrantes */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {integrantes.map((integrante, index) => (
                <IntegranteCard key={index} {...integrante} />
              ))}
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
              <Link
                to="/sobre"
                className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow text-center"
              >
                <i className="fa-solid fa-lightbulb text-3xl text-action mb-3"></i>

                <p className="font-semibold text-primary">
                  Sobre o Projeto
                </p>
              </Link>

              <Link
                to="/faq"
                className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow text-center"
              >
                <i className="fa-solid fa-circle-question text-3xl text-primary mb-3"></i>

                <p className="font-semibold text-primary">
                  Perguntas Frequentes
                </p>
              </Link>

              <Link
                to="/contato"
                className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow text-center"
              >
                <i className="fa-solid fa-envelope text-3xl text-accent mb-3"></i>

                <p className="font-semibold text-primary">
                  Contato
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
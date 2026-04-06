import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { formatTelefone } from "../utils/masks";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    document.title = "Cod3X - Contato";
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Formulário enviado:", data);
    setEnviado(true);
    reset();

    setTimeout(() => {
      setEnviado(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Contato</h1>
            <p className="text-lg opacity-90">
              Entre em contato conosco: tire dúvidas, envie sugestões ou solicite informações.
            </p>
          </div>
        </section>

        {/* Formulário */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {enviado && (
              <div className="max-w-xl mx-auto mb-6 bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-xl"></i>
                <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-xl mx-auto space-y-5"
            >
              {/* Nome */}
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-primary mb-1">
                  Nome completo <span className="text-red-500">*</span>
                </label>
                <input
                  id="nome"
                  type="text"
                  {...register("nome", {
                    required: "Nome é obrigatório",
                    minLength: { value: 3, message: "Nome deve ter pelo menos 3 caracteres" },
                    maxLength: { value: 100, message: "Nome deve ter no máximo 100 caracteres" },
                    pattern: {
                      value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
                      message: "Nome deve conter apenas letras",
                    },
                  })}
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                />
                {errors.nome && (
                  <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "E-mail é obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "E-mail inválido",
                    },
                  })}
                  placeholder="contato@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-primary mb-1">
                  Telefone <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="telefone"
                  control={control}
                  rules={{
                    required: "Telefone é obrigatório",
                    validate: (value) => {
                      const numbers = value.replace(/\D/g, "");
                      return numbers.length >= 10 || "Telefone deve ter pelo menos 10 dígitos";
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      id="telefone"
                      type="tel"
                      onChange={(e) => {
                        const formatted = formatTelefone(e.target.value);
                        field.onChange(formatted);
                      }}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    />
                  )}
                />
                {errors.telefone && (
                  <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>
                )}
              </div>

              {/* Assunto */}
              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-primary mb-1">
                  Assunto <span className="text-red-500">*</span>
                </label>
                <input
                  id="assunto"
                  type="text"
                  {...register("assunto", {
                    required: "Assunto é obrigatório",
                    minLength: { value: 5, message: "Assunto deve ter pelo menos 5 caracteres" },
                    maxLength: { value: 100, message: "Assunto deve ter no máximo 100 caracteres" },
                  })}
                  placeholder="Assunto da mensagem"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                />
                {errors.assunto && (
                  <p className="text-red-500 text-sm mt-1">{errors.assunto.message}</p>
                )}
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-primary mb-1">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="mensagem"
                  rows={5}
                  {...register("mensagem", {
                    required: "Mensagem é obrigatória",
                    minLength: { value: 10, message: "Mensagem deve ter pelo menos 10 caracteres" },
                    maxLength: { value: 1000, message: "Mensagem deve ter no máximo 1000 caracteres" },
                  })}
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                />
                {errors.mensagem && (
                  <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-action hover:bg-action-dark text-white font-bold py-3 rounded-xl transition-colors duration-200 disabled:opacity-50 shadow-lg"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </div>
        </section>

        {/* Informações de Contato */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-600 mb-6">
                Estamos sempre prontos para ouvir você. Se tiver dúvidas, sugestões ou quiser
                saber mais sobre o projeto Cod3X e a Turma do Bem, entre em contato!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-4 shadow">
                  <i className="fa-solid fa-envelope text-2xl text-action mb-2"></i>
                  <p className="text-sm font-semibold text-primary">E-mail</p>
                  <p className="text-sm text-gray-600">contato@cod3x.com.br</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow">
                  <i className="fa-solid fa-phone text-2xl text-accent mb-2"></i>
                  <p className="text-sm font-semibold text-primary">Telefone</p>
                  <p className="text-sm text-gray-600">+55 (11) 2657-7622</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow">
                  <i className="fa-solid fa-location-dot text-2xl text-primary mb-2"></i>
                  <p className="text-sm font-semibold text-primary">Endereço</p>
                  <p className="text-sm text-gray-600">FIAP - São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

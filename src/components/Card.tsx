import { Link } from "react-router-dom";

interface CardProps {
  titulo: string;
  descricao: string;
  icone: string;
  link: string;
  cor?: string;
  cta?: string;
}

export default function Card({
  titulo,
  descricao,
  icone,
  link,
  cor = "bg-action",
  cta = "Saiba mais",
}: CardProps) {
  return (
    <Link
      to={link}
      className="group flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${cor} transition-transform group-hover:scale-110`}
      >
        <i className={`${icone} text-2xl text-white`}></i>
      </div>
      <h3 className="mb-2 text-lg font-bold text-primary">{titulo}</h3>
      <p className="flex-1 text-sm text-gray-600">{descricao}</p>
      <span className="mt-4 inline-flex items-center gap-2 font-semibold text-action transition-transform group-hover:translate-x-1">
        {cta}
        <i className="fa-solid fa-arrow-right text-sm"></i>
      </span>
    </Link>
  );
}

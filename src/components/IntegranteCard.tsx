import type { Integrante } from "../types";

export default function IntegranteCard({ nome, rm, turma, descricao, foto, github, linkedin }: Integrante) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
      <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-accent">
        <img
          src={foto}
          alt={nome}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-primary mb-1">{nome}</h3>
      <span className="text-sm text-gray-500">{rm} | {turma}</span>
      <p className="text-gray-600 mt-3 mb-4 flex-grow text-sm">{descricao}</p>
      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors text-sm flex items-center gap-2"
        >
          <i className="fa-brands fa-github"></i>
          GitHub
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center gap-2"
        >
          <i className="fa-brands fa-linkedin"></i>
          LinkedIn
        </a>
      </div>
    </div>
  );
}

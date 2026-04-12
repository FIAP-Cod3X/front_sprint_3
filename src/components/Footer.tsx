import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary pt-10 pb-6 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="mb-2">
              <img src="/img/logo.png" alt="Cod3X" className="h-10 w-auto" />
            </Link>
            <p className="text-center text-sm text-gray-300 md:text-left">
              Cod3X - Tecnologia com proposito
            </p>
          </div>

          <nav>
            <h3 className="mb-3 font-display font-semibold text-accent">Navegacao</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 transition-colors hover:text-white">Inicio</Link></li>
              <li><Link to="/sobre" className="text-gray-300 transition-colors hover:text-white">Sobre</Link></li>
              <li><Link to="/integrantes" className="text-gray-300 transition-colors hover:text-white">Integrantes</Link></li>
            </ul>
          </nav>

          <nav>
            <h3 className="mb-3 font-display font-semibold text-accent">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="text-gray-300 transition-colors hover:text-white">FAQ</Link></li>
              <li><Link to="/contato" className="text-gray-300 transition-colors hover:text-white">Contato</Link></li>
              <li><Link to="/solucao" className="text-gray-300 transition-colors hover:text-white">Solucao</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="mb-3 font-display font-semibold text-accent">Redes</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/FIAP-Cod3X"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-xl text-gray-300 transition-colors hover:text-white"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/gabrielstuani/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-xl text-gray-300 transition-colors hover:text-white"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="mailto:contato@cod3x.com.br"
                aria-label="E-mail"
                className="text-xl text-gray-300 transition-colors hover:text-white"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="mb-4 border-gray-600" />

        <p className="text-center text-sm text-gray-400">
          &copy; 2025 Cod3X FIAP. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

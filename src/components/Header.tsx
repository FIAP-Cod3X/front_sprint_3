import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/sobre", label: "Sobre" },
  { to: "/solucao", label: "Solucao" },
  { to: "/integrantes", label: "Integrantes" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
];

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);
  const isActivePath = (path: string) =>
    path === "/"
      ? location.pathname === path
      : location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/95 text-white shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={handleNavClick}>
          <img src="/img/logo.png" alt="Cod3X" className="h-10 w-auto md:h-11" />
          <span className="hidden text-lg font-bold tracking-wide sm:block">Cod3X</span>
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`font-medium transition-colors duration-200 hover:text-accent ${
                    isActivePath(link.to) ? "text-accent font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="p-1 text-white focus:outline-none md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <i className="fa-solid fa-xmark text-2xl"></i>
          ) : (
            <i className="fa-solid fa-bars text-2xl"></i>
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden bg-primary-dark transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-4 py-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={handleNavClick}
                  className={`block py-2 text-lg transition-colors hover:text-accent ${
                    isActivePath(link.to) ? "text-accent font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

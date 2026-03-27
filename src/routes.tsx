import { createBrowserRouter } from "react-router-dom";
import App from "./root";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import Integrantes from "./pages/Integrantes";
import Solucao from "./pages/Solucao";
import SolucaoDetalhe from "./pages/SolucaoDetalhe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "sobre", element: <Sobre /> },
      { path: "faq", element: <FAQ /> },
      { path: "contato", element: <Contato /> },
      { path: "integrantes", element: <Integrantes /> },
      { path: "solucao", element: <Solucao /> },
      { path: "solucao/:id", element: <SolucaoDetalhe /> },
    ],
  },
]);

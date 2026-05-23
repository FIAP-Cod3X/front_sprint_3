# 🚀 Sistema para a ONG Turma do Bem - Cod3X

<div align="center">

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge)
![Sprint](https://img.shields.io/badge/Sprint-4%2F4%20Concluída-blue?style=for-the-badge)
![Progress](https://img.shields.io/badge/Progresso-100%25-green?style=for-the-badge)

**Plataforma de gestão inteligente para centralizar e otimizar atendimentos da ONG Turma do Bem**

[🌐 Demo ao Vivo](#-instalação-e-links) • [📋 Documentação](#-sobre-o-projeto) • [🎯 Roadmap](#️-roadmap-do-projeto) • [👥 Equipe](#-equipe)

</div>

---

## 📖 Sobre o Projeto

O **Cod3X** é uma solução tecnológica desenvolvida especificamente para a **ONG Turma do Bem**, focada em resolver o problema de dispersão de atendimentos em múltiplos canais de comunicação.

### 🎯 **Problema Identificado**
A Turma do Bem recebe solicitações através de múltiplos canais (WhatsApp e Gmail), tornando difícil o controle, priorização e acompanhamento adequado dos atendimentos.

### 💡 **Nossa Solução**
Uma plataforma web inteligente que:
- **Centraliza** todos os atendimentos em um local único
- **Roteia automaticamente** solicitações para voluntários especializados
- **Acompanha** o status de cada caso em tempo real
- **Gerencia** solicitantes e beneficiários da ONG
- **Gera relatórios** gerenciais para tomada de decisões

---

## 🛠️ Tecnologias Utilizadas

<div align="center">

### **Frontend**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### **Bibliotecas**
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)

### **Backend / API**
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Quarkus](https://img.shields.io/badge/Quarkus-4695EB?style=for-the-badge&logo=quarkus&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

### **Ferramentas**
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)

</div>

---

## 📁 Estrutura de Pastas
sprint4/
├── public/
│   └── img/                    # Imagens e assets estáticos
├── src/
│   ├── assets/
│   │   └── img/                # Fotos dos integrantes e logo
│   ├── components/             # Componentes reutilizáveis
│   │   ├── Card.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── IntegranteCard.tsx
│   ├── hooks/
│   │   └── useApi.ts           # Hook customizado para consumo de API
│   ├── pages/
│   │   ├── Atendimentos.tsx    # CRUD de atendimentos (integração API)
│   │   ├── Contato.tsx
│   │   ├── FAQ.tsx
│   │   ├── Home.tsx
│   │   ├── Integrantes.tsx
│   │   ├── Sobre.tsx
│   │   ├── Solicitantes.tsx    # CRUD de solicitantes (integração API)
│   │   ├── Solucao.tsx
│   │   └── SolucaoDetalhe.tsx
│   ├── services/
│   │   └── api.ts              # Camada de acesso à API REST (fetch nativo)
│   ├── types/
│   │   └── index.ts            # Interfaces, Union Types e Intersection Types
│   ├── utils/
│   │   └── masks.ts
│   ├── app.css
│   ├── main.tsx
│   ├── root.tsx
│   └── routes.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md

---

## 🌐 Páginas do Projeto

| Página | Rota | Descrição |
|--------|------|-----------|
| 🏠 Home | `/` | Página inicial com hero, cards e benefícios |
| 💡 Sobre | `/sobre` | Informações sobre o projeto e Turma do Bem |
| ⚙️ Solução | `/solucao` | Visão geral dos módulos da plataforma |
| 🔍 Detalhe | `/solucao/:id` | Detalhes de cada módulo (rota dinâmica) |
| 📋 Atendimentos | `/atendimentos` | CRUD completo integrado à API |
| 👤 Solicitantes | `/solicitantes` | CRUD completo integrado à API |
| 👥 Integrantes | `/integrantes` | Apresentação da equipe Cod3X |
| ❓ FAQ | `/faq` | Perguntas frequentes com busca interativa |
| 📞 Contato | `/contato` | Formulário validado com React Hook Form |

---

## 🖼️ Prévia Visual

<div align="center">
  <img src="./src/assets/img/sorriso.jpg" alt="Preview visual da home" width="380" />
  <img src="./src/assets/img/sorrisos.png" alt="Imagem institucional" width="380" />
</div>

---

## 🎨 Design e Identidade Visual

### 🎨 **Paleta de Cores**

| Cor | Hex | Uso |
|-----|-----|-----|
| **Azul Escuro** | `#3A506B` | Cor primária, textos |
| **Branco Creme** | `#F4F4F9` | Fundo principal |
| **Verde Claro** | `#96ac3f` | Destaque, sucesso |
| **Laranja** | `#e88407` | Ação, botões CTA |

### ✍️ **Tipografia**
- **Poppins** — Títulos e interface
- **Montserrat** — Cabeçalhos
- **Open Sans** — Corpo de texto

---

## 📱 Responsividade

- **📱 Mobile** (até 480px) — Layout empilhado, menu hambúrguer
- **📱 Tablet** (768px) — Grid adaptativo
- **🖥️ Desktop** (992px+) — Layout completo com navegação expandida

---

## 🔌 Integração com API

A Sprint 4 integra o front-end com a API REST desenvolvida em Java (Quarkus), hospedada no Render.

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/atendimentos` | Lista todos os atendimentos |
| `POST` | `/api/atendimentos` | Cria novo atendimento |
| `PUT` | `/api/atendimentos/{id}` | Atualiza atendimento |
| `DELETE` | `/api/atendimentos/{id}` | Remove atendimento |
| `PUT` | `/api/atendimentos/{id}/status` | Altera status |
| `GET` | `/api/solicitantes` | Lista todos os solicitantes |
| `POST` | `/api/solicitantes` | Cadastra solicitante |
| `PUT` | `/api/solicitantes/{id}` | Atualiza solicitante |
| `DELETE` | `/api/solicitantes/{id}` | Remove solicitante |

> Toda a comunicação é feita via **Fetch API nativa** (sem bibliotecas externas), com tratamento de erros e estados de loading.

---

## 🗓️ Roadmap do Projeto

| Sprint | Status | Título | Progresso |
|:------:|:------:|--------|:---------:|
| **1** | ✅ | **Fundação e Prototipagem** | 100% |
| **2** | ✅ | **Desenvolvimento e Aprofundamento** | 100% |
| **3** | ✅ | **Componentização e SPA com React** | 100% |
| **4** | ✅ | **Back-end e Integração com API** | 100% |

---

## 🔧 Como Usar

### Instalação

```bash
git clone https://github.com/FIAP-Cod3X/front_sprint_3.git
cd front_sprint_3
npm install
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

---

## 🔗 Links Importantes

| Recurso | URL |
|---------|-----|
| 🔗 Repositório GitHub | [https://github.com/FIAP-Cod3X/front_sprint_3](https://github.com/FIAP-Cod3X/front_sprint_3) |
| 🎬 Vídeo YouTube | [https://www.youtube.com/watch?v=zYpjG3acaxk](https://www.youtube.com/watch?v=zYpjG3acaxk) |
| 🌐 Deploy Vercel | https://project-96yel.vercel.app |
| ⚙️ API Backend | [https://tdb-atendimento.onrender.com](https://tdb-atendimento.onrender.com) |
| 📖 Documentação API | [https://tdb-atendimento.onrender.com/swagger](https://tdb-atendimento.onrender.com/swagger) |

---

## 📧 Contato

- **GitHub:** [FIAP-Cod3X](https://github.com/FIAP-Cod3X)

---

## 👥 Equipe

<div align="center">

| Foto | Nome Completo | RM | Turma | GitHub | LinkedIn |
|:----:|:-------------:|:--:|:-----:|:------:|:--------:|
| <img src="./src/assets/img/gabriel.jpg" width="80"> | **Gabriel Stuani** | RM566682 | 1TDSPB | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/Gstuani) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/gabrielstuani/) |
| <img src="./src/assets/img/guilherme.jpeg" width="80"> | **Guilherme Soares** | RM568227 | 1TDSPB | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/Guilherme-Soares00) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/guilherme-soares-alberti/) |
| <img src="./src/assets/img/erick.jpeg" width="80"> | **Erick Ramos Santos** | RM567837 | 1TDSPB | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/erickramossantoser) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/erickrsantos/) |

</div>

---

<div align="center">
  <p>Desenvolvido com ❤️ pela equipe <strong>Cod3X</strong> — 1TDSPB — FIAP 2025</p>
</div>
# 🚀 Sistema para a ONG Turma do Bem - Cod3X

<div align="center">

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge)
![Sprint](https://img.shields.io/badge/Sprint-3%2F4%20Concluída-blue?style=for-the-badge)
![Progress](https://img.shields.io/badge/Progresso-75%25-green?style=for-the-badge)

**Plataforma de gestão inteligente para centralizar e otimizar atendimentos da ONG Turma do Bem**

[🌐 Demo ao Vivo](#-instalação-e-links) • [📋 Documentação](#-sobre-o-projeto) • [🎯 Roadmap](#️-roadmap-do-projeto) • [👥 Equipe](#-equipe)

</div>

---

## 📖 Sobre o Projeto

O **Cod3X** é uma solução tecnológica desenvolvida especificamente para a **ONG Turma do Bem**, focada em resolver o problema de dispersão de atendimentos em múltiplos canais de comunicação.

### 🎯 **Problema Identificado**
A Turma do Bem recebe solicitações através de dois canais principais (WhatsApp e Gmail), tornando difícil o controle, priorização e acompanhamento adequado dos atendimentos.

### 💡 **Nossa Solução**
Uma plataforma web inteligente que:
- **Centraliza** todos os atendimentos em um local único
- **Roteia automaticamente** solicitações para voluntários especializados
- **Acompanha** o status de cada caso em tempo real
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

### **Ferramentas**
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)

</div>

---

## 📁 Estrutura de Pastas

```
Challenge_Front/
├── public/
│   ├── img/                    # Imagens e assets estáticos
│   └── favicon.ico             # Ícone do site
├── src/
│   ├── components/             # Componentes reutilizáveis
│   │   ├── Card.tsx            # Card genérico com ícone e link
│   │   ├── Footer.tsx          # Rodapé do site
│   │   ├── Header.tsx          # Cabeçalho com navegação e menu mobile
│   │   └── IntegranteCard.tsx  # Card de membro da equipe
│   ├── pages/                  # Páginas da aplicação
│   │   ├── Contato.tsx         # Formulário de contato (React Hook Form)
│   │   ├── FAQ.tsx             # Perguntas frequentes com busca
│   │   ├── Home.tsx            # Página inicial
│   │   ├── Integrantes.tsx     # Apresentação da equipe
│   │   ├── Sobre.tsx           # Sobre o projeto e Turma do Bem
│   │   ├── Solucao.tsx         # Módulos da solução
│   │   └── SolucaoDetalhe.tsx  # Detalhe do módulo (rota dinâmica)
│   ├── types/
│   │   └── index.ts            # Interfaces TypeScript
│   ├── utils/
│   │   └── masks.ts            # Máscaras de input (telefone)
│   ├── app.css                 # Estilos globais (TailwindCSS)
│   ├── main.tsx                # Ponto de entrada da aplicação
│   ├── root.tsx                # Layout raiz com Outlet
│   └── routes.tsx              # Configuração de rotas (React Router)
├── index.html                  # HTML principal
├── package.json                # Dependências e scripts
├── tsconfig.json               # Configuração TypeScript
├── vite.config.ts              # Configuração Vite
└── README.md                   # Este arquivo
```

---

## 🌐 Páginas do Projeto

| Página | Rota | Descrição |
|--------|------|-----------|
| 🏠 Home | `/` | Página inicial com hero, cards e benefícios |
| 💡 Sobre | `/sobre` | Informações sobre o projeto e Turma do Bem |
| 👥 Integrantes | `/integrantes` | Apresentação da equipe Cod3X |
| ❓ FAQ | `/faq` | Perguntas frequentes com busca interativa |
| 📞 Contato | `/contato` | Formulário validado com React Hook Form |
| ⚙️ Solução | `/solucao` | Visão geral dos módulos da plataforma |
| 🔍 Detalhe | `/solucao/:id` | Detalhes de cada módulo (rota dinâmica) |

---

## 🖼️ Prévia Visual

<div align="center">
  <img src="./public/img/sorriso.jpg" alt="Preview visual da home do projeto Cod3X" width="380" />
  <img src="./public/img/sorrisos.png" alt="Imagem institucional utilizada na página sobre do projeto Cod3X" width="380" />
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

A aplicação é totalmente responsiva, adaptando-se a diferentes tamanhos de tela:

- **📱 Mobile** (até 480px) — Layout empilhado, menu hambúrguer
- **📱 Tablet** (768px) — Grid adaptativo
- **🖥️ Desktop** (992px+) — Layout completo com navegação expandida

---

## 🗓️ Roadmap do Projeto

| Sprint | Status | Título | Progresso |
|:------:|:------:|--------|:---------:|
| **1** | ✅ | **Fundação e Prototipagem** | 100% |
| **2** | ✅ | **Desenvolvimento e Aprofundamento** | 100% |
| **3** | ✅ | **Componentização e SPA com React** | 100% |
| **4** | ⏳ | **Back-end e Integração** | 0% |

---

## 🔧 Como Usar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [npm](https://www.npmjs.com/)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/FIAP-Cod3X/Challenge_Front.git

# Navegue para o diretório
cd Challenge_Front

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build

```bash
npm run build
```

### Type Check

```bash
npm run typecheck
```

---

## 🔗 Links

- **Repositório GitHub:** [https://github.com/FIAP-Cod3X/Challenge_Front](https://github.com/FIAP-Cod3X/Challenge_Front)
- **Organização Cod3X:** [https://github.com/FIAP-Cod3X](https://github.com/FIAP-Cod3X)
- **Vídeo no YouTube:** (https://www.youtube.com/watch?v=hSlJAYR6nno)

---

## 📧 Contato

Para dúvidas, sugestões ou informações sobre o projeto:

- **E-mail:** contato@cod3x.com.br
- **GitHub:** [FIAP-Cod3X](https://github.com/FIAP-Cod3X)

---

## 👥 Equipe

Este projeto foi desenvolvido pela equipe **Cod3X**:

<div align="center">

| Foto | Nome Completo | RM | Turma | GitHub | LinkedIn |
|:----:|:-------------:|:--:|:-----:|:------:|:--------:|
| <img src="./public/img/gabriel.jpg" width="80"> | *Gabriel Stuani* | RM566682 | 1TDSPB | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/Gstuani) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/gabrielstuani/) |
| <img src="./public/img/guilherme.jpeg" width="80"> | *Guilherme Soares* | RM568227 | 1TDSPB | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/Guilherme-Soares00) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/guilherme-soares-alberti/) |
| <img src="./public/img/erick.png" width="80"> | *Erick Ramos Santos* | RM567837 | 1TDSPB | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/erickramossantoser) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/erickrsantos/) |

</div>

---

<div align="center">
  <p>Desenvolvido com ❤️ pela equipe <strong>Cod3X</strong> - 1TDSPB - FIAP 2025</p>
</div>

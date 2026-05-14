# 🌍 Country Explorer

Aplicação web full-stack que permite buscar qualquer país do mundo e visualizar informações detalhadas — população, capital, moeda, área, região e bandeira — com destaque do país pesquisado em um mapa-múndi interativo.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat&logo=ejs&logoColor=black)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)

---

## 📸 Preview

> Busque qualquer país e veja os dados exibidos em uma interface dark minimalista — com o país destacado em um mapa-múndi SVG interativo.

---

## ✨ Funcionalidades

- 🔍 Busca de países pelo nome ou tradução nativa
- 🗺️ Mapa-múndi SVG com destaque do país pesquisado
- 🏳️ Exibe bandeira, nome oficial, capital, população, área, região e moeda
- ⚠️ Tratamento de erros amigável para buscas inválidas
- 📱 Layout responsivo

---

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologia |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Cliente HTTP | Axios |
| Templating | EJS |
| Estilização | CSS3 com variáveis customizadas |
| Fonte de dados | REST Countries API (sem autenticação) |
| Deploy | Render |

---

## 📁 Estrutura do Projeto

```
countryAPI/
│
├── public/
│   └── style.css          # Estilos globais e variáveis CSS
│
├── routes/
│   └── countryRoutes.js   # Rotas Express
│
├── services/
│   └── countryServices.js # Integração com a API (Axios)
│
├── views/
│   └── index.ejs          # Template EJS com mapa SVG
│
├── app.js                 # Ponto de entrada do servidor
├── package.json
└── README.md
```

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js v18+
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/GuilhermeAlves58/CoutryAPI

# Acesse a pasta do projeto
cd country

# Instale as dependências
npm install
```

### Executando localmente

```bash
# Desenvolvimento (com hot reload)
npm run dev

# Produção
node app.js
```

Acesse em **http://localhost:3000**

---

## 🔌 API Utilizada

Este projeto utiliza a [REST Countries API](https://restcountries.com/) — gratuita, aberta e sem necessidade de autenticação.

| Endpoint | Uso |
|---|---|
| `/v3.1/translation/{name}` | Busca país pelo nome ou tradução nativa |

Campos utilizados: `name`, `capital`, `population`, `area`, `region`, `flags`, `currencies`, `cca2`

---

## 💡 Decisões Técnicas

- **Separação em camada de serviço** — as chamadas à API ficam isoladas em `countryServices.js`, mantendo as rotas limpas e o código fácil de manter ou substituir a fonte de dados.
- **EJS como template engine** — permite renderização server-side sem a necessidade de um framework frontend, mantendo a stack leve.
- **Mapa SVG** — utiliza o código ISO (`cca2`) retornado pela API para destacar o país com uma classe CSS, sem nenhuma biblioteca externa de mapas.
- **`process.env.PORT`** — porta configurável via variável de ambiente para deploy em nuvem sem alterações no código.

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor com nodemon (hot reload) |
| `node app.js` | Inicia o servidor em modo produção |

---

## 🌐 Deploy

[country-explorer.onrender.com](https://coutryapi.onrender.com/) ← Deploy

---

## 📝 Licença

Projeto desenvolvido como parte de um curso de desenvolvimento web full-stack. Sinta-se à vontade para usar como referência.

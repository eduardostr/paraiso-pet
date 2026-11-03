# Paraíso Pet

Interface de loja virtual de produtos para pets, desenvolvida com React e Vite. O projeto apresenta um catálogo para cães, gatos e peixes, com navegação por categorias, carrinho e favoritos em um layout adaptado para desktop e dispositivos móveis.

## Funcionalidades implementadas

- Catálogo com 12 produtos, imagens e preços em reais.
- Filtros por categoria: todos, cães, gatos e peixes.
- Carrinho lateral com adição de produtos, incremento de quantidade ao adicionar novamente, remoção de itens e cálculo do total.
- Favoritos com inclusão, remoção, contador e visualização em modal.
- Formulários visuais de login e cadastro, com opção de mostrar ou ocultar a senha.
- Menu mobile, navegação até as seções e banners específicos para desktop e mobile.
- Botão flutuante de contato pelo WhatsApp, com número ainda pendente de configuração.

## Estado atual

O projeto é um protótipo de frontend com dados estáticos em `src/data/products.js`. Não há backend, banco de dados, autenticação real ou integração de pagamentos.

Carrinho e favoritos são mantidos no estado do React e são perdidos ao recarregar a página. Os formulários não criam contas nem autenticam usuários. Os botões de finalizar compra e compartilhar ainda não possuem ações implementadas.

## Tecnologias

- React 19 e JavaScript com JSX.
- Vite 8 para desenvolvimento e build.
- Tailwind CSS 3, PostCSS e CSS personalizado para estilização.
- Lucide React para ícones.

## Executar localmente

É necessário ter Node.js e npm instalados. Para compatibilidade com Vite e ESLint nas versões registradas em `package-lock.json`, utilize Node.js 22.13 ou superior da linha 22, ou Node.js 24 ou superior.

Na pasta do projeto, instale as dependências e inicie o servidor:

```bash
npm ci
npm run dev
```

Acesse o endereço informado pelo Vite no terminal.

### Comandos disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Iniciar o servidor de desenvolvimento. |
| `npm run build` | Gerar os arquivos de produção em `dist/`. |
| `npm run preview` | Visualizar localmente o build gerado. |
| `npm run lint` | Executar o ESLint; requer adicionar a configuração do ESLint, ausente no estado atual do repositório. |

Para visualizar o build, execute `npm run build` antes de `npm run preview`.

## Estrutura do projeto

```text
public/               Banners, favicon e imagens públicas
src/
  assets/             Recursos visuais locais
  components/         Navegação, catálogo, cards, modais e contato
  data/products.js    Produtos e categorias do catálogo
  App.jsx             Composição da interface e estado de carrinho e favoritos
  index.css           Estilos globais e adaptações responsivas
  main.jsx            Inicialização do React
```

## Personalização

- **Catálogo:** edite os produtos e as categorias em `src/data/products.js`.
- **Identidade visual:** ajuste os estilos em `src/index.css`, nos componentes e em `tailwind.config.js`.
- **Banners e imagens:** substitua os arquivos em `public/`, preservando ou atualizando os caminhos utilizados pelos componentes.
- **Contato:** revise os textos de `Footer.jsx` e configure `WhatsAppWidget.jsx` somente com um número comercial autorizado para divulgação.

Parte das imagens utiliza o Unsplash e a fonte Nunito é carregada pelo Google Fonts; esses recursos dependem de acesso à internet.

## Dados e privacidade

A execução atual não exige arquivo `.env`, chaves de API ou credenciais. Este README não inclui dados pessoais, contatos reais ou informações de acesso.

Use dados fictícios ao demonstrar os formulários. Em futuras integrações, mantenha segredos no backend e fora do controle de versão; variáveis expostas pelo frontend, inclusive as prefixadas com `VITE_`, são públicas no build.

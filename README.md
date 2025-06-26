# ListaDeContatos

Uma aplicação de gerenciamento de contatos desenvolvida com React, Redux e Styled Components. A aplicação permite que os usuários cadastrem, editem, removam e filtrem contatos. A interface é estilizada com uma temática cyberpunk.

## Funcionalidades

- Cadastro de novos contatos
- Edição de contatos existentes
- Remoção de contatos
- Filtro de contatos por critérios específicos
- Contador de contatos cadastrados
- Interface estilizada com temática cyberpunk

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Styled Components](https://styled-components.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Estrutura do Projeto
src/ ├── components/ │ ├── Branding/ │ ├── Buscador/ │ ├── CadastrarContatos/ │ └── CardContact/ ├── containers/ │ ├── BarraLateral/ │ ├── Formulario/ │ ├── ListaDeContatos/ │ └── SecaoPrincipal/ ├── globalStyles/ │ ├── index.ts │ └── variaveis.ts ├── pages/ │ ├── Cadastro/ │ └── Home/ ├── store/ │ ├── reducers/ │ └── index.ts ├── App.tsx ├── index.tsx └── styles/
## Instalação

1. Clone o repositório:

```sh
git clone https://github.com/seu-usuario/tarefa-31.git

Abra o navegador e acesse http://localhost:3000.
Estrutura de Arquivos
components
Branding: Componentes relacionados à marca e identidade visual.
Buscador: Componente de busca de contatos.
CadastrarContatos: Componente para cadastrar novos contatos.
CardContact: Componente para exibir informações de um contato.
containers
BarraLateral: Componente da barra lateral que inclui busca e cadastro de contatos.
Formulario: Componente de formulário para cadastro e edição de contatos.
ListaDeContatos: Componente que exibe a lista de contatos.
SecaoPrincipal: Componente principal da seção de contatos.
globalStyles
index.ts: Estilos globais da aplicação.
variaveis.ts: Variáveis de estilo, como cores e fontes.
src/pages
Cadastro: Página de cadastro de contatos.
Home: Página inicial que exibe a lista de contatos.
store
reducers: Reducers do Redux para gerenciar o estado da aplicação.
index.ts: Configuração do store do Redux.
App.tsx
Componente principal da aplicação que configura o Redux e define as rotas.

index.tsx
Ponto de entrada da aplicação React.

Contribuição
Faça um fork do projeto.
Crie uma branch para sua feature (git checkout -b feature/nova-feature).
Commit suas mudanças (git commit -am 'Adiciona nova feature').
Faça um push para a branch (git push origin feature/nova-feature).
Abra um Pull Request.
Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

Similar code found with 3 license types - View matches

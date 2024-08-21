# TagMe Menu Digital

Bem-vindo ao projeto TagMe Menu Digital! Este é um sistema de gerenciamento de itens que permite criar, ler, atualizar e excluir itens utilizando Angular e uma API REST fake criada com `json-server`.

## Requisitos

Antes de começar, certifique-se de ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (recomenda-se a versão LTS)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

## Instalando Dependências

1. Clone o repositório:

   ```bash
   git clone https://github.com/GustavoGFG/Tagme-Challenge.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd tagme-menu-digital
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## Configurando e Iniciando o `json-server`

1. Instale o `json-server` globalmente:

   ```bash
   npm install -g json-server
   ```

2. Crie um arquivo `db.json` na raiz do projeto com o seguinte conteúdo:

   ```json
   {
     "items": [
       {
         "id": 1,
         "title": "Exemplo de Item 1",
         "description": "Descrição do Item 1",
         "imageUrl": "https://via.placeholder.com/150"
       }
     ]
   }
   ```

   O arquivo `db.json` será adicionado ao repositório no GitHub para facilitar o acesso.

3. Inicie o `json-server` para rodar a API fake:

   ```bash
   json-server --watch db.json
   ```

   A API REST estará disponível em `http://localhost:3000/`. Você pode acessar os itens em `http://localhost:3000/items`.

## Rodando a Aplicação Angular

1. Em outro terminal, inicie o servidor de desenvolvimento Angular:

   ```bash
   npm start
   ```

   A aplicação Angular estará disponível em `http://localhost:4200/`.

## Funcionalidades da Aplicação

- **CRUD de Itens**:

  - **Criar**: Adicione novos itens preenchendo o formulário e enviando-o.
  - **Ler**: Visualize a lista de itens existentes.
  - **Atualizar**: Edite itens existentes através da interface de edição.
  - **Excluir**: Remova itens com uma confirmação.

- **Interface de Imagem**:
  - Os itens podem incluir uma imagem. A visualização da imagem é suportada, mas a funcionalidade de recorte de imagem não foi implementada neste teste técnico.

## Notas Adicionais

- **Ordenação e Paginação**: A funcionalidade de ordenação e paginação não foi implementada, mas pode ser adicionada conforme necessário.

- **Feedback ao Usuário**: A aplicação fornece feedback visual ao usuário em ações como criação, edição e exclusão de itens.

## Contribuições

Se você deseja contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

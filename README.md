Cadastro de Usuários com Node.js, Express, Prisma e React
Este projeto consiste em uma aplicação web simples para cadastrar, listar e deletar usuários. O backend é construído com Node.js, utilizando o framework Express para criar a API e o Prisma como ORM (Object-Relational Mapping) para interagir com o banco de dados. O frontend é desenvolvido com React, consumindo a API para exibir e manipular os dados dos usuários.

Backend (Node.js/Express/Prisma)
O diretório raiz do projeto contém os arquivos do backend.

# Tecnologias Utilizadas:
Node.js: Ambiente de execução JavaScript para o servidor.
Express: Framework web minimalista e flexível para Node.js.
Prisma: ORM moderno para Node.js e TypeScript, facilitando a interação com o banco de dados.
CORS: Middleware para habilitar o Cross-Origin Resource Sharing, permitindo que o frontend acesse a API em um domínio diferente.

# Funcionalidades da API:
POST /usuarios: Cria um novo usuário no banco de dados. Espera um corpo de requisição em formato JSON com os campos name (string), email (string) e age (number). Retorna o objeto do usuário criado com status 201 (Created).

GET /usuarios: Lista todos os usuários cadastrados no banco de dados. Se receber query parameters (name, email, age), filtra os usuários com base nesses parâmetros. Retorna um array de objetos de usuário com status 200 (OK).

PUT /usuarios/:id: Atualiza os dados de um usuário específico, identificado pelo id passado como parâmetro na URL. Espera um corpo de requisição em formato JSON com os campos name, email e/ou age a serem atualizados. Retorna o corpo da requisição com status 201 (Created).

DELETE /usuarios/:id: Deleta um usuário específico do banco de dados, identificado pelo id passado como parâmetro na URL. Retorna uma mensagem JSON { message: "Uusario deletado com sucesso!" } com status 201 (Created).

Cadastro de Usuários com Node.js, Express, Prisma e React
Este projeto consiste em uma aplicação web simples para cadastrar, listar e deletar usuários. O backend é construído com Node.js, utilizando o framework Express para criar a API e o Prisma como ORM (Object-Relational Mapping) para interagir com o banco de dados. O frontend é desenvolvido com React, consumindo a API para exibir e manipular os dados dos usuários.

Backend (Node.js/Express/Prisma)
O diretório raiz do projeto contém os arquivos do backend.

Tecnologias Utilizadas:
Node.js: Ambiente de execução JavaScript para o servidor.
Express: Framework web minimalista e flexível para Node.js.
Prisma: ORM moderno para Node.js e TypeScript, facilitando a interação com o banco de dados.
CORS: Middleware para habilitar o Cross-Origin Resource Sharing, permitindo que o frontend acesse a API em um domínio diferente.
Funcionalidades da API:
POST /usuarios: Cria um novo usuário no banco de dados. Espera um corpo de requisição em formato JSON com os campos name (string), email (string) e age (number). Retorna o objeto do usuário criado com status 201 (Created).

GET /usuarios: Lista todos os usuários cadastrados no banco de dados. Se receber query parameters (name, email, age), filtra os usuários com base nesses parâmetros. Retorna um array de objetos de usuário com status 200 (OK).

PUT /usuarios/:id: Atualiza os dados de um usuário específico, identificado pelo id passado como parâmetro na URL. Espera um corpo de requisição em formato JSON com os campos name, email e/ou age a serem atualizados. Retorna o corpo da requisição com status 201 (Created).

DELETE /usuarios/:id: Deleta um usuário específico do banco de dados, identificado pelo id passado como parâmetro na URL. Retorna uma mensagem JSON { message: "Uusario deletado com sucesso!" } com status 201 (Created).

# Tecnologias Utilizadas:
React: Biblioteca JavaScript para construir interfaces de usuário.
lucide-react: Biblioteca de ícones utilizada para o ícone de lixeira.
axios (implícito em ../../services/api): Uma biblioteca popular para fazer requisições HTTP. Assume-se que o arquivo ../../services/api.js configura uma instância do Axios com a URL base da API.

Funcionalidades do Frontend:
Cadastro de Usuários: Um formulário com campos para nome, idade e email permite que o usuário insira os dados de um novo usuário. Ao clicar no botão "Cadastrar", a função createUsers é chamada, enviando uma requisição POST para a rota /usuarios da API com os dados preenchidos. Após a criação bem-sucedida, a lista de usuários é atualizada.

Listagem de Usuários: A função getUsers faz uma requisição GET para a rota /usuarios da API e atualiza o estado users com os dados recebidos. Esta função é chamada quando o componente é montado (useEffect com um array de dependências vazio). Os usuários são renderizados em cards na tela, exibindo nome, idade e email.

Deleção de Usuários: Cada card de usuário possui um botão com um ícone de lixeira. Ao clicar neste botão, a função deleteUsers é chamada com o id do usuário correspondente. Esta função envia uma requisição DELETE para a rota /usuarios/:id da API para remover o usuário. Após a deleção bem-sucedida, a lista de usuários é atualizada.


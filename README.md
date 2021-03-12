## Desafio Navedex

Api desenvolvida em NodeJs, com banco de dados relacional MySQL, para um desafio de uma empresa.

# Tecnologias Utilizadas:
- MySQL 
- Bcrypt
- Dotenv
- Jwt
- POSTMAN(TESTAR AS ROTAS DA api)

# Funcionalidades(Rotas | Métodos):

Método  |  Caminho               |  Descrição                             | 
--------|------------------------|----------------------------------------|
POST    |      /navers           |  Cria um Naver                         |
POST    |     /projects          |  Cria um Project                       |
POST    |    /users              |  Cria um User                          |
GET     | /navers                |  Retorna os navers criados             |
GET     | /navers/:naversId      |  Retorna um naver específico           |
GET     | /projects              |  Retorna os projects criados           |
PUT     | /navers/:naversId      |  Atualiza um naver específico          |
PUT     | /projects/:projectsId  |  Atualiza um project específico        |
DELETE  |  /navers/:naversId     |  Deleta um naver                       |
DELETE  | /projects/:projectsId  |  Deleta um projects                    |

# Entregável
- Cadastros de navers, projects e user;
- Listagem dos navers, projects e user;
- Busca especifíca de navers e projects, pelo identficador;
- Atualização de navers e projects;
- Remoção de navers e projects, pelo identficador;


# Dificuldades (e não finalizadas):
- Implementar o JWT (e não foi possível finalizar).
- Realizar a junção das tabelas(Navers e Projects), para detalhar informações a serem mostradas no postman, conforme descreve no desafio(Show(navers e projects)).
- Sobre a biblioteca Knex. Tentei usá-la, mas por não ter ainda familiaridade(Iniciando os estudos), deixei de usá-la e segui com as consultas SQL puro.
- Dificuldade de como implementar o recebimento do body da request os dados do naver e um array com os identificadores dos projetos.
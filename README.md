# gt-desafio-g1
API Simple usando o express para cadastro e consulta de filmes.
# Docker
docker-compose up -d : Instalar dependências caso não exista e rodar images em background <br />
docker-compose stop : para imagens

# Back end
cd .\backend\ <br />
yarn install

# Rename
.env.development.local.example for .env.development.local
# DB
cd .\backend\ <br />
yarn sql_migration (Executar as migrations) <br />
yarn sql_seed_all (Dump de registros)
# Start
yarn start
# Rotas
GET /test : Apenas testar requisição a API <br />
GET /movies : Retorna todos os filmes cadastrados <br />
GET /movies/:id : Retorna o filme pelo id <br />
POST /movies : Cadastra novos filmes : JSON { "title": "Star Wars 3 ", "description": "Ação", "year": 2005, "time": "6000"}
# Arquivos com as rotas exportado do Insomnia. 
(https://insomnia.rest/) <br />
Caso tenha o programa, é só fazer o importe do .json abaixo.

 - Insomnia_2022-02-09.json



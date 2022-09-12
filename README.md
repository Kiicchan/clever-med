# <p align="center"> <img width="30" src="./frontend/public/clever.svg"> Clever Med
    "O aplicativo web Clever é utilizado para o acompanhamento de parâmetros de saúde através de gráficos."
Esta aplicação foi desenvolvida para o teste técnico do processo seletivo da Hu.


## ⏯️ Demo
    Uma demo está disponível em: https://clever-med.vercel.app/

    🚀 Deploy feito com Railway + Vercel

## 💻 Tecnologias
    Este projeto utiliza as tecnologias:
    - React
    - Vite
    - Typescript
    - Tailwind CSS
    - Express
    - Prisma
    - PostgreSQL
    - Google Charts

## 🏠 Como executar localmente
    Antes de começar, certifique-se de ter um banco de dados PostgreSQL rodando e de possuir as seguintes informações:
        User: Nome do usuário do postgres
        Password: as senha de acesso ao banco de dados
        Host: o IP/domínio onde o banco está rodando
        Port: a porta onde o serviço está sendo executado
        Database name: o nome do banco que quer utilizar

### Clone este repositório
```shell
    git clone https://github.com/Kiicchan/clever-med.git
    cd clever-med
```
### Instale as dependências
```shell
    cd backend
    npm i
```
```shell
    cd ../frontend
    npm i
```
### Configure as variáveis de ambiente
Frontend: Copie o arquivo .env.example e renomeie para .env.local
```
# Preencha com a url onde pretende rodar o backend, por exemplo:

VITE_BASE_URL='http://localhost:3333/'
```
Inicie a aplicação Frontend:
```
npm run dev
```

No diretório backend, copie o arquivo .env.example e renomeie para .env
```
# Preencha as variáveis de acordo:

# Esta é a url de conexão com o banco de dados. Substitua as informações citadas anteriormente, por exemplo: DATABASE_URL="postgresql://JohnDoe:123456@localhost:5432/clevermed"

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# A porta onde o backend escutará (se não informada, o padrão será a porta 3333)

PORT=3333

# Configure o CORS Whitelist. Use a url onde está rodando o frontend (A URL informada no console, sem a '/' final, como no exemplo). Ou use o valor "*" para liberar qualquer endereço.

APP_URL="http://127.0.0.1:5173"
```

### Crie as tabelas do banco de dados
Com outro terminal, volte ao diretório do backend e rode o comando:
```shell
npx prisma migrate dev
```

### Inicie a aplicação no backend
```shell
npm run dev
```

Pronto! O projeto deverá estar rodando em modo dev.
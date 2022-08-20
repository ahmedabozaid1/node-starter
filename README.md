# node-starter

basic node.js starter app with repo design pattern and mysql db

## How to use

### Installation

- `npm i`

### DB installation

- Make sure you have sql server running

### 1. DB configurations

- create .env file simillar to .env.example
- add your mysql configurations in .env

### 2. DB creation

- to create the DB schema with data from prisma
- `npx prisma generate`
- `npx prisma migrate reset`
- `npx prisma db push`

### Start server

- `node server.js`

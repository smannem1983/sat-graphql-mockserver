# sat-graphql-mockserver
Mock server for the graphql layer for SAT for frontend to consume
Getting started:

- Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Install latest LTS Node.js

```shell
nvm install # while in directory

nvm install --lts # otherwise
```

- **Use** the correct LTS Node.js

```shell
nvm use # while in directory
```

- Install [pnpm](https://pnpm.io/installation#using-corepack) using [Corepack](https://nodejs.org/docs/latest-v18.x/api/corepack.html)

```shell
corepack enable

corepack prepare pnpm@latest --activate
```
- Install pnpm dependencies & start. Should be running on http://localhost:4000/graphql

```shell
pnpm install
pnpm start
```
![image](https://github.com/smannem1983/sat-graphql-mockserver/assets/117308845/58c15641-5a47-46a9-90f9-445ba10f1a19)

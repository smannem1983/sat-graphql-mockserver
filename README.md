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
- Install pnpm dependencies & start

```shell
pnpm install
pnpm start
```

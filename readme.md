instalar cliente de nestjs

```sh
npm install -g @nestjs/cli
```

generar proyecto de nestjs
```sh
  
  nest new nestjs-prisma-posgresql
  cd nestjs-prisma-posgresql
  npm run start
```

instalamos el cliente del ORM Prisma

```sh

npm install @prisma @prisma/client

# generar archivo schema.prisma
npx prisma init
 
```

abrimos archivo `schema.prisma`, y agregamos lo siguiente:
`
```ts
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String
  pass      String?  
}
```

Generar archivo sql en la carpeta prisma/migrations

```sh
  npx prisma migrate dev --name user-migration
  npx prisma migrate deploy
```
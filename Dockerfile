FROM node:22-alpine AS develop-stage
# faz da pasta 'app' o diretório atual de trabalho
WORKDIR /app
# copia os arquivos 'package.json' e 'package-lock.json' (se disponível)
COPY package*.json ./
# copia arquivos e pastas para o diretório atual de trabalho (pasta 'app')
COPY . .
# instala dependências do projeto
RUN npm install && npm cache clean --force

#build stage
FROM develop-stage AS build-stage
RUN npm i -g @quasar/cli && quasar build

# production stage
FROM nginx:1.27.0-alpine AS production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;","node"]
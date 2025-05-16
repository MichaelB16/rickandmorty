# Makefile para o projeto Rick and Morty

# Variáveis
DOCKER_COMPOSE = docker-compose

# Comandos principais
.PHONY: up down build restart logs help

# Inicia os containers
up:
	$(DOCKER_COMPOSE) up -d

# Para os containers
down:
	$(DOCKER_COMPOSE) down

# Constrói os containers
build:
	$(DOCKER_COMPOSE) build

# Reconstrói e inicia os containers
rebuild:
	$(DOCKER_COMPOSE) down
	$(DOCKER_COMPOSE) build
	$(DOCKER_COMPOSE) up -d

# Reinicia os containers
restart:
	$(DOCKER_COMPOSE) restart

# Mostra os logs
logs:
	$(DOCKER_COMPOSE) logs -f

# Mostra ajuda
help:
	@echo "Comandos disponíveis:"
	@echo "  make up        - Inicia os containers em modo detached"
	@echo "  make down      - Para os containers"
	@echo "  make build     - Constrói os containers"
	@echo "  make rebuild   - Reconstrói e inicia os containers"
	@echo "  make restart   - Reinicia os containers"
	@echo "  make logs      - Mostra os logs"
	@echo "  make help      - Mostra esta ajuda"
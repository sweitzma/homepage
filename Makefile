# Yarn/esbuild/postcss
.PHONY: watch clean

watch:
	yarn run dev

clean:
	find dist ! -name index.html -type f -delete

# NGINX Webserver
.PHONY: build start stop
build:
	docker-compose build

start:
	docker-compose up --no-recreate -d nginx
	open -a firefox 'http://localhost:8080'

stop:
	docker-compose down

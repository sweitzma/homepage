### self-documenting
.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

### yarn/esbuild/postcss
.PHONY: watch clean compile

watch: ## watch files and build js/css/html to serve in dev
	yarn run dev

compile: ## build js/css/html to serve in prod
	@yarn run prod
	@gzip -9kf dist/bundle.js
	@gzip -9kf dist/style.css

clean-dev: ## remove all non-source-code compiled files in dev-dist/
	@find dev-dist ! -name index.html -type f -delete

clean-prod: ## remove all non-source-code compiled files in dist/
	@find dist ! -name index.html -type f -delete

### NGINX Webserver
.PHONY: build start stop
build: ## build nginx image
	docker-compose build

start: ## start up nginx container
	docker-compose up --no-recreate -d nginx
	open -a firefox 'http://localhost:8080'

stop: ## bring down nginx container
	docker-compose down

### deployment
.PHONY: deploy
deploy: clean-prod compile ## compile and copy results to S3
	@./deploy/deploy

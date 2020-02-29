.PHONY = build run destroy

build:
	@docker-compose build

run:
	@docker-compose up

destroy:
	@docker-compose down

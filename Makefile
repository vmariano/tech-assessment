build:
	docker-compose -f docker-compose.yml up -d db redis backend frontend

bundle.update:
	docker-compose run --rm --no-deps backend bundle update

start:
	docker-compose up

stop:
	docker-compose down

rails.c:
	docker-compose run backend rails c

sh-backend:
	docker-compose run backend sh

sh-frontend:
	docker-compose run frontend sh

db.init:
	docker-compose run backend bundle exec rake db:create db:migrate db:seed

db.migrate:
	docker-compose run backend bundle exec rake db:migrate
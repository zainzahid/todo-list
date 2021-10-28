# todo-list

## Technologies:
- [Angular 12](https://angular.io/) as Front End
- [Node.js](https://nodejs.org/en/) + [Express](https://expressjs.com/) for Backend/API
- [Jest](https://jestjs.io/) as testing library for both front-end and backend

## Repository Structure and Guide to Run
### todo-list-back
- **src** folder have source files:
  - `app.js` for node/express, mongodb setup
  - `todo.js` for todo api endpoints
  - `todo.test.js` for todo api endpoint tests
- **Models** folder have `Todo.js` schema files for Mongoose
- **Dockerfile** for creating back end image by the Dockercompose
### todo-list-front
- **src/app** folder have source files:
  - `app.component.html` have the html/ui elements of a todo appliction
  - `app.component.ts` have the todo application business logic 
  - `app.component.spec.ts` have unit tests for the todo application business logic and ui
  - `todo.service.ts` have the functions for connecting to the api service endpoints
  - `todo.service.spec.ts` have the unit test for todo service
- **Dockerfile** for creating front end image by the Dockercompose
- **docker-compose.yml**
run `docker-compose up --build -d` to build docker images and fire up the docker container for running apps

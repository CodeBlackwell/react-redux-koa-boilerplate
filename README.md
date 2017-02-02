# This project is available live @ http://reactkoaboilerplate.herokuapp.com

### This project features an exciting tech stack of modern favorites in JavaScript Development

## The tech stack is described below

- ReactJS - integrated with an implementation of flux
- Redux - managing state
- ES6/babel - because ES6 is awesome
- react-router - allow use of `Route` `Router` and `Link` to change pages
- react-router-redux - allows 'router state' to be tracked in the application. reconstruct user stories etc
- koa2 - Serving our bundle to the client
- koa-router - RESTful routing, provides my profile @GET '/data'
- koa-convert - allows you to use old koa middleware without getting `remove generators` error
- Webpack - Bundler
- webpack-dev-server - hot module reloading
- redux-dev-tools (browser extension) - really handy tools to track actions, props, and state - https://github.com/zalmoxisus/redux-devtools-extension


## For development

- clone/download the repo
- run `npm install`
- run `npm run dev`
- then in another terminal tab/window run `nodemon server.js`
- open up your browser and navigate to `localhost:8080`

## For testing/ "Production" launch

- clone/download the repo
- run `npm install`
- run `npm run start`
- open your browser and navigate to `localhost:3000`

## To only test the RESTful GET endpoint
- run `curl reactkoaboilerplate.herokuapp.com/data`

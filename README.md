Internship API

## Description

Api for internship bot to save internships offers

## Endpoints

* Post https://internshipbot-api.up.railway.app/internships
* Post Body
```bash
author: name,
offer: description,
source: telegram/getonboard,
pass: pass
```
* Get https://internshipbot-api.up.railway.app/internships
* Get https://internshipbot-api.up.railway.app/internships/:id
* Delete https://internshipbot-api.up.railway.app/internships
* Delete https://internshipbot-api.up.railway.app/internships/logic
* Delete Body
```bash
pass: pass
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

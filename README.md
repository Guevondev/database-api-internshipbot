# Internship API

## Description

Api for internship bot to save internships offers

## Endpoints

* **Post:** /internships
* **Get:** /internships
* **Get:** /internships/:id
* **Delete:** /internships
* **Delete:** /internships/logic

### Bodies for endpoints

* Post Body
```bash
author: name,
offer: description,
source: telegram/getonboard,
pass: pass
```

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

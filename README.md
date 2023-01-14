<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

Api for internship bot to save internships offers

## Endpoints

* Post https://api-internship.up.railway.app/internships
* Post Body
```bash
author: name,
offer: description,
source: telegram/getonboard,
pass: pass
```
* Get https://api-internship.up.railway.app/internships
* Get https://api-internship.up.railway.app/internships/:id
* Delete https://api-internship.up.railway.app/internships
* Delete https://api-internship.up.railway.app/internships/logic
* Delete Body
```bash
pass: pass
```

## Installation

```bash
$ npm install
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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Guevonsito dev](https://github.com/Guevondev)

## License

Nest is [MIT licensed](LICENSE).

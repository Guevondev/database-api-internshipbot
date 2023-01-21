# Internship API

## Description

Api for internship bot to save internships offers

## Endpoints

| Method | Path                 | Description  | Parameters
| ------ | -------------------- | ------------ | ----------
|  Get   | `/internships`       | Return all the internships paginated | `?page=1&page_size=10`
|  Get   | `/internships/:id`   | Return an internship by id
|  Post  | `/internships`       | Save an internship on DB
|  Put   | `/internships/:id`   | Update an internship
| Delete | `/internships`       | Delete physically internships 2 month old
| Delete | `/internships/logic` | Delete logically internships 1 month old

### Bodies for endpoints

**Post Body**
```bash
{
  author: name,
  offer: description,
  source: telegram/getonboard,
  pass: pass
}
```

**Delete Body**
```bash
{
  pass: pass
}
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

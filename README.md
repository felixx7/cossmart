## Requerement
- mnimum node.js v14
- POSTMAN (https://api.postman.com/collections/9508354-d7159a23-8208-4819-ba5e-a36677616129?access_key=PMAT-01GMCT6RT3XRJSRMTFTM577MEW)
- VSCODE
- BROWSER


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm i -g @nestjs/cli
```

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

# production mode
$ http://localhost:3000
```
## Postman 
for download POSTMAN COLLECTION: (https://api.postman.com/collections/9508354-d7159a23-8208-4819-ba5e-a36677616129?access_key=PMAT-01GMCT6RT3XRJSRMTFTM577MEW)

-http://localhost:3000 method GET
```javascript
    [
        {
            "authors": "Emily Brontë",
            "title": "Wuthering Heights",
            "edition_count": 1608
        },
        {
            "authors": "William Shakespeare",
            "title": "Romeo and Juliet",
            "edition_count": 969
        },
    ...  
    ...
```

- http://localhost:3000 method POST
edition_count is mandatory, authors and title not mandatory
example body (raw json):
```javascript
{
    "pick_books": [
        {
            "authors": "Emily Brontë",
            "title": "Wuthering Heights",
            "edition_count": 1608
        },
        {
            "authors": "William Shakespeare",
            "title": "Romeo and Juliet",
            "edition_count": 969
        }
    ],
    "name": "Aditya",
    "pick_up_schedule": "2022-12-15T14:06:40.208Z"
}
```

//If input this body it will be show response "Your Book (Edition Count) is Duplicate" because edition_count is same
example body (raw json):
```javascript
{
    "pick_books": [
        {
            "edition_count": 969
        },
        {
            "edition_count": 969
        }
    ],
    "name": "Aditya",
    "pick_up_schedule": "2022-12-15T14:06:40.208Z"
}
```

//If input this body it will be show response "Your Book (Edition Count) is Not Exist" because edition_count is not_exist
example body (raw json):

```javascript
{
    "pick_books": [
        {
            "edition_count": 999999
        },
        {
            "edition_count": 9999
        }
    ],
    "name": "Aditya",
    "pick_up_schedule": "2022-12-15T14:06:40.208Z"
}
```

Example Response after success POST
response :

```javascript
{
    "pick_books": [
        {
            "key": "/works/OL21177W",
            "title": "Wuthering Heights",
            "edition_count": 1608,
            "cover_id": 12818862,
            "cover_edition_key": "OL38586477M",
            "subject": [
              ...
            ...
            ...  
    ],
    "pick_up_schedule": "2022-12-15T14:06:40.208Z",
    "name": "Aditya"
}
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

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

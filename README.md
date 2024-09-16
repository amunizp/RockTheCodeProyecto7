# RockTheCodeProyecto7

AUTH API RESTful CRUD learning

<img src="./files/Learning.png" width=50% height=50%>

## Objective

Location is the key point. Each location can have several issues.

At some point it would be interesting to list all the issues that happen in the same location.
We should be able to list all the issues tied to a particular Court. (populate)
I should be able to see the list of issues that a particular User has done. (getIssuesByUser)

## Using the project

First a user must be created.

```
POST http://localhost:3000/api/v1/reporters/register
```

With the following in the body as an example, the only required fields are reporter name and password

```
  {
    reporterName: "Andres",
    publicContact: "barra americana de 7 a 3",
    password: "doloresSeLlamabaL0la",
    admin: true
  }
```

Note that you can not register yourself as an admin. It will default to false. Currently in order become admin you need ot make the change in Mongo Atlas.

## ADMIN

As an admin you can do the following as long as you have logged in:

```
POST http://localhost:3000/api/v1/reporters/login
//body:
{
    "reporterName": "Andres",
    "password": "doloresSeLlamabaL0la"
}
```

This will generate a token. which is returned:

```
{
  "reporter": {
    "_id": "66e48c8467ef8be60553aa51",
    "reporterName": "Andres",
    "publicContact": "barra americana de 7 a 3",
    "password": "$2b$10$qqj1D19/Ya.IiqG3gfNKpegVhDvIbNBtNh7Cy8PFVVuuOleM3wvli",
    "admin": false,
    "createdAt": "2024-09-13T19:03:32.834Z",
    "updatedAt": "2024-09-13T19:03:32.834Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZTQ4Yzg0NjdlZjhiZTYwNTUzYWE1MSIsImlhdCI6MTcyNjQ4MTcyMCwiZXhwIjoxNzI5MDczNzIwfQ.HCAzV10D459_imKA3YIvfKqOqZzpVo14BdWrN2zDbls"
}
```

The following CRUD can be done only if Auth Bearer Token contains the token mentioned above

```
GET http://localhost:3000/api/v1/reporters/
```

This will give you a list of all the reporters be them admin or not.

```
DELETE http://localhost:3000/api/v1/reporters/66e4335f0a12df2d4ec6bf3c
```

As a user you can do the following as long as you are logged in.

## Non ADMIN

Register

```
POST http://localhost:3000/api/v1/reporters/register
\\body
{
    "reporterName": "Dolores",
    "publicContact": "barra americana de 7 a 3",
    "password": "doloresSeLlamabaL0la",
    "admin": false
}
```

Returns:

```
{
  "reporterName": "Dolores",
  "publicContact": "barra americana de 7 a 3",
  "password": "$2b$10$0uqvJNurhHBRtnlaN2XCc.C4a9UoMrIzaTxYJQIm8XdQ1qigfYxK.",
  "admin": false,
  "_id": "66e8077fe2879faf6bc07e2d",
  "createdAt": "2024-09-16T10:25:03.515Z",
  "updatedAt": "2024-09-16T10:25:03.515Z",
  "__v": 0
}
```

Then they have to login

```
POST http://localhost:3000/api/v1/reporters/login
//body:
{
    "reporterName": "Dolores",
    "password": "doloresSeLlamabaL0la"
}
```

Which returns the token, note that the password is always Hashed.

```
{
  "reporter": {
    "_id": "66e8077fe2879faf6bc07e2d",
    "reporterName": "Dolores",
    "publicContact": "barra americana de 7 a 3",
    "password": "$2b$10$0uqvJNurhHBRtnlaN2XCc.C4a9UoMrIzaTxYJQIm8XdQ1qigfYxK.",
    "admin": false,
    "createdAt": "2024-09-16T10:25:03.515Z",
    "updatedAt": "2024-09-16T10:25:03.515Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZTgwNzdmZTI4NzlmYWY2YmMwN2UyZCIsImlhdCI6MTcyNjQ4MjQ3MiwiZXhwIjoxNzI5MDc0NDcyfQ.P-CG3oSpRrTt-O-GtgDEcVkU5od9zJ1EPA8-mtj4urQ"
}
```

If anybody attempts to do anything else other than register they will not be allowed:

```
GET http://localhost:3000/api/v1/issues/user/Carlos
```

returns: "you are not authorised to do this"
But if you use the token in the Auth>bearer it will return:

```
[
  {
    "_id": "66e40481ba6df7172632c860",
    "description": "my door is broken",
    "user": "Carlos",
    "createdAt": "2024-09-13T09:23:13.445Z",
    "updatedAt": "2024-09-13T10:14:02.292Z",
    "__v": 0,
    "resolved": false
  },
  {
    "_id": "66e40493ba6df7172632c862",
    "description": "my window is broken",
    "user": "Carlos",
    "createdAt": "2024-09-13T09:23:31.836Z",
    "updatedAt": "2024-09-13T09:23:31.836Z",
    "__v": 0
  },
  {
    "_id": "66e4049cba6df7172632c864",
    "description": "my floor is broken",
    "user": "Carlos",
    "createdAt": "2024-09-13T09:23:41.000Z",
    "updatedAt": "2024-09-13T09:23:41.000Z",
    "__v": 0
  },
  {
    "_id": "66e404a5ba6df7172632c866",
    "description": "my ceiling is broken",
    "user": "Carlos",
    "createdAt": "2024-09-13T09:23:49.705Z",
    "updatedAt": "2024-09-13T09:23:49.705Z",
    "__v": 0
  }
]
```

The reporter can also create a new location whose fields are all optional on purpose.
Make sure you add the token to auth>bearer

```
POST http://localhost:3000/api/v1/locations/
\\body
{"court": "Pope",
"courtNumber": 9

}
```

returns

```
{
  "geo": {
    "coordinates": []
  },
  "court": "Pope",
  "courtNumber": 9,
  "issues": [],
  "_id": "66e814006a8ab4da660dcc1e",
  "createdAt": "2024-09-16T11:18:24.354Z",
  "updatedAt": "2024-09-16T11:18:24.354Z",
  "__v": 0
}
```

# Seed

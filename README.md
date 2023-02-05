## user

### register user

**`POST`** /api/register

#### Body

- require: username ,password ,email

  ```json
  {
    "username": "admin",
    "password": "admin123",
    "email": "admin@admin.com",
    "firstName": "admin",
    "lastName": "admin"
  }
  ```

- #### Response

  ```json
  {
    "username": "admin",
    "password": "$2b$10$hnqxNMFGPQ7w/b99NUk0/unfBBfdRvIk28aas8UDs.ToyIyJPL2Qi",
    "email": "admin@admin.com",
    "isActive": true,
    "_id": "63d3cf0fdee6b116c8549f0e",
    "createdAt": "2023-01-27T13:18:07.771Z",
    "updatedAt": "2023-01-27T13:18:07.771Z",
    "__v": 0
  }
  ```

### /login user

**`POST`** /api/login

#### Body

- require: username ,password

  ```json
  {
    "username": "admin",
    "password": "admin123"
  }
  ```

#### Response

- Response will get id user and token for returning when invoking api

  ```json
  {
    "id": "63d3cf0fdee6b116c8549f0e",
    "isActive": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDNjZjBmZGVlNmIxMTZjODU0OWYwZSIsImlhdCI6MTY3NDgyNjM1NCwiZXhwIjoxNjc3NDE4MzU0fQ.UKtcOsx8Qs4c82jmNoqHjodThvRUbmfvfHp0vaD0upc"
  }
  ```

## upload

### upload image

**`POST`** /api/upload

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "VALUE"
  }
  ```

#### Body

- require: name ,path
  form-data
  KEY: photo
  VALUE: 'image file'

#### Response

- Response will get id image

  - Used for adding product, send id image as well

  ```json
  {
    "id": "63da31f3e1cde7e22a87c855"
  }
  ```

## product

### create product

**`POST`** /api/product/create

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "VALUE"
  }
  ```

#### Body

- require: name ,price ,brand ,identifier ,org
- org : organiztion ID
- image : ID file

  ```json
  {
    "name": "product4",
    "price": 4500,
    "brand": "brand1",
    "model": "product model1",
    "image": "63da76aed003d603cbf622f0",
    "description": "Easy to break",
    "identifier": "P0004",
    "org": "63d3d5d0d0496e806a162caa",
    "category": "category1"
  }
  ```

#### Response

- Response will get data

  ```json
  {
    "name": "product4",
    "price": 4500,
    "brand": "brand1",
    "model": "product model1",
    "image": "63da76aed003d603cbf622f0",
    "identifier": "P0004",
    "org": "63d3d5d0d0496e806a162caa",
    "_id": "63db5ca6b4eed176afc6f3dd",
    "createdAt": "2023-02-02T06:48:06.084Z",
    "updatedAt": "2023-02-02T06:48:06.084Z",
    "__v": 0
  }
  ```

### update product

**`PUT`** /api/product/update/'ID product'

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "VALUE"
  }
  ```

#### Body

- require: name ,price ,brand ,identifier ,org
- org : organiztion ID ()

  ```json
  {
    "name": "product2",
    "price": "4000",
    "brand": "brand2",
    "model": "product model2",
    "colors": ["black"],
    "description": "Easy to break",
    "identifier": "admin",
    "org": "63c7eb8b2a959fca90cd28dc"
  }
  ```

#### Response

- Response will get data

  ```json
  {
    "_id": "63d3d5f0d0496e806a162cad",
    "name": "product1",
    "price": 3000,
    "brand": "brand2",
    "model": "product model2",
    "colors": ["red"],
    "identifier": "admin",
    "org": "63c7eb8b2a959fca90cd28dc",
    "createdAt": "2023-01-27T13:47:28.492Z",
    "updatedAt": "2023-01-27T13:47:28.492Z",
    "__v": 0
  }
  ```

### delete product

**`DELETE`** /api/product/delete/'ID product'

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "VALUE"
  }
  ```

#### Response

- Response Status:200

  ```json
  {
    "_id": "63d3d5f0d0496e806a162cad",
    "name": "product2",
    "price": 4000,
    "brand": "brand2",
    "model": "product model2",
    "colors": ["black"],
    "identifier": "admin",
    "org": "63c7eb8b2a959fca90cd28dc",
    "createdAt": "2023-01-27T13:47:28.492Z",
    "updatedAt": "2023-01-27T13:54:36.301Z",
    "__v": 0,
    "description": "Easy to break"
  }
  ```

### find Id

**`GET`** /api/product/findById/'ID product'

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "VALUE"
  }
  ```

#### Response

- Response Status:200
  ```json
  {
    "_id": "63db5b6d348d6425020c4df5",
    "name": "product2",
    "price": 3000,
    "brand": "brand2",
    "model": "product model2",
    "identifier": "admin",
    "org": "63d3d5d0d0496e806a162caa",
    "createdAt": "2023-02-02T06:42:53.630Z",
    "updatedAt": "2023-02-02T06:42:53.630Z",
    "__v": 0
  }
  ```

### find all

**`GET`** /api/product/find

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "VALUE"
  }
  ```

#### Response

- Response Status:200

```json
[
  {
    "_id": "63d3d929d0496e806a162cb5",
    "name": "product1",
    "price": 3000,
    "brand": "brand2",
    "model": "product model2",
    "colors": ["red"],
    "identifier": "admin",
    "org": "63c7eb8b2a959fca90cd28dc",
    "createdAt": "2023-01-27T14:01:13.811Z",
    "updatedAt": "2023-01-27T14:01:13.811Z",
    "__v": 0
  }
]
```

## organiztion

### create organiztion

- **`POST`** /api/organiztion/create

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "VALUE"
  }
  ```

#### Body

- require: name ,user
- user : ID user for my organiztion

  ```json
  {
    "name": "organiztion",
    "user": "ID user"
  }
  ```

#### Response

- Response Status:200

  ```json
  {
    "name": "organiztion",
    "user": "ID user",
    "_id": "63df54476028603b06a1add4",
    "createdAt": "2023-02-05T07:01:27.384Z",
    "updatedAt": "2023-02-05T07:01:27.384Z",
    "__v": 0
  }
  ```

### update organiztion

- **`PUT`** /api/organiztion/update/'ID organiztion'

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "VALUE"
  }
  ```

#### Body

- require: name ,user
- user : ID user for my organiztion

  ```json
  {
    "name": "organiztion2",
    "user": "ID user"
  }
  ```

#### Response

- Response Status:200
  ```json
  {
    "_id": "63df54476028603b06a1add4",
    "name": "johnGGG88",
    "user": "63c7eb8b2a959fca90cd28dc",
    "createdAt": "2023-02-05T07:01:27.384Z",
    "updatedAt": "2023-02-05T07:01:27.384Z",
    "__v": 0
  }
  ```

### delete organiztion

- **`DELETE`** /api/organiztion/delete/'ID organiztion'

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "VALUE"
  }
  ```

#### Response

- Response Status:200
  ```json
  {
    "_id": "63df54476028603b06a1add4",
    "name": "johnGGG88",
    "user": "63c7eb8b2a959fca90cd28dc",
    "createdAt": "2023-02-05T07:01:27.384Z",
    "updatedAt": "2023-02-05T07:01:27.384Z",
    "__v": 0
  }
  ```

### find Id

- **`GET`** /api/organiztion/findById/'ID organiztion'

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "VALUE"
  }
  ```

#### Response

- Response Status:200
  ```json
  {
    "_id": "63df54476028603b06a1add4",
    "name": "johnGGG44",
    "user": "63c7eb8b2a959fca90cd28dc",
    "createdAt": "2023-02-05T07:01:27.384Z",
    "updatedAt": "2023-02-05T07:05:00.143Z",
    "__v": 0
  }
  ```

### find all

- **`GET`** /api/organiztion/find

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "VALUE"
  }
  ```

#### Response

- Response Status:200
  ```json
  [
    {
      "_id": "63d3d5d0d0496e806a162caa",
      "name": "johnGGG31",
      "user": "63c7eb8b2a959fca90cd28dc",
      "createdAt": "2023-01-27T13:46:56.604Z",
      "updatedAt": "2023-01-27T13:46:56.604Z",
      "__v": 0
    },
    {
      "_id": "63df54476028603b06a1add4",
      "name": "johnGGG44",
      "user": "63c7eb8b2a959fca90cd28dc",
      "createdAt": "2023-02-05T07:01:27.384Z",
      "updatedAt": "2023-02-05T07:05:00.143Z",
      "__v": 0
    }
  ]
  ```

## category

### create category

**`POST`** /api/category/create

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "VALUE"
  }
  ```

#### Body

- require: name ,org ,categoryCode
- name : name category
- org : organiztion ID
- categoryCode : category code

  ```json
  {
    "name": "perfume2",
    "org": "63d3d5d0d0496e806a162caa",
    "categoryCode": "C001"
  }
  ```

#### Response

- Response Status:200

  ```json
  {
    "name": "perfume2",
    "org": "63d3d5d0d0496e806a162caa",
    "categoryCode": "C001",
    "_id": "63df3d2b71775881061f5c14",
    "createdAt": "2023-02-05T05:22:51.549Z",
    "updatedAt": "2023-02-05T05:22:51.549Z",
    "__v": 0
  }
  ```

### update category

**`PUT`** /api/category/category/'ID category'

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "VALUE"
  }
  ```

#### Body

- require: name ,org ,categoryCode
- name : name category
- org : organiztion ID
- categoryCode : category code

  ```json
  {
    "name": "perfume2",
    "org": "63d3d5d0d0496e806a162caa",
    "categoryCode": "C004"
  }
  ```

#### Response

- Response Status:200

  ```json
  {
    "name": "perfume2",
    "org": "63d3d5d0d0496e806a162caa",
    "categoryCode": "C004",
    "_id": "63df3d2b71775881061f5c14",
    "createdAt": "2023-02-05T05:22:51.549Z",
    "updatedAt": "2023-02-05T05:22:51.549Z",
    "__v": 0
  }
  ```

### delete category

**`DELETE`** /api/category/delete/'ID category'

- 'ID category' to delete

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "VALUE"
  }
  ```

#### Response

- Response Status:200

  ```json
  {
    "_id": "63de255317a146285a924d7b",
    "name": "perfume",
    "org": "63d3d5d0d0496e806a162caa",
    "createdAt": "2023-02-04T09:28:51.544Z",
    "updatedAt": "2023-02-05T05:28:18.115Z",
    "__v": 0,
    "categoryCode": "C004"
  }
  ```

### find Id

- **`GET`** /api/category/findById/'ID category'

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "VALUE"
  }
  ```

#### Response

- Response Status:200

  ```json
  {
    "_id": "63df3d2b71775881061f5c14",
    "name": "perfume2",
    "org": "63d3d5d0d0496e806a162caa",
    "categoryCode": "C001",
    "createdAt": "2023-02-05T05:22:51.549Z",
    "updatedAt": "2023-02-05T05:22:51.549Z",
    "__v": 0
  }
  ```

### find all

- **`GET`** /api/category/find

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "VALUE"
  }
  ```

#### Response

- Response Status:200 and get data all

```json
[
  {
    "_id": "63df3d2b71775881061f5c14",
    "name": "perfume2",
    "org": "63d3d5d0d0496e806a162caa",
    "categoryCode": "C001",
    "createdAt": "2023-02-05T05:22:51.549Z",
    "updatedAt": "2023-02-05T05:22:51.549Z",
    "__v": 0
  }
]
```

## Status Codes

returns the following status codes in its API:

| Status Code | Description             |
| :---------- | :---------------------- |
| 200         | `OK`                    |
| 201         | `CREATED`               |
| 400         | `BAD REQUEST`           |
| 404         | `NOT FOUND`             |
| 500         | `INTERNAL SERVER ERROR` |

## user

### register user

**`POST`** /api/register

#### Body

- require: username ,password ,email

  ```json
  {
    "username": "String",
    "password": "String",
    "email": "String",
    "firstName": "String",
    "lastName": "String"
  }
  ```

- #### Response

  ```json
  {
    "username": "String",
    "password": "String",
    "email": "String",
    "isActive": true,
    "_id": "String",
    "createdAt": "DateTime",
    "updatedAt": "DateTime",
    "__v": 0
  }
  ```

### /login user

**`POST`** /api/login

#### Body

- require: username ,password

  ```json
  {
    "username": "String",
    "password": "String"
  }
  ```

#### Response

- Response will get id user and token for returning when invoking api

  ```json
  {
    "id": "String",
    "isActive": true,
    "token": "String"
  }
  ```

## upload

### upload image

**`POST`** /api/upload

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "String"
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
    "id": "String"
  }
  ```

## product

### create product

**`POST`** /api/product/create

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "String"
  }
  ```

#### Body

- require: name ,price ,brand ,identifier ,org
- org : organization ID
- image : ID file

  ```json
  {
    "name": "String",
    "price": Number,
    "brand": "String",
    "model": "String",
    "description": "String",
    "identifier": "String",
    "org": "String",
    "category": "String",
    "image": "String"
  }
  ```

#### Response

- Response will get data

  ```json
  {
    "name": "String",
    "price": Number,
    "brand": "String",
    "model": "String",
    "image": "String",
    "identifier": "String",
    "org": "String",
    "category": "String",
    "_id": "String",
    "createdAt": "DateTime",
    "updatedAt": "DateTime",
    "__v": 0
  }
  ```

### update product

**`PUT`** /api/product/update/'ID product'

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "String"
  }
  ```

#### Body

- require: name ,price ,brand ,identifier ,org
- org : organization ID ()

  ```json
  {
    "name": "String",
    "price": Number,
    "brand": "String",
    "model": "String",
    "image": "String",
    "description": "String",
    "identifier": "admin",
    "org": "String",
    "category": "String"
  }
  ```

#### Response

- Response will get data

  ```json
  {
    "_id": "String",
    "name": "String",
    "price": Number,
    "brand": "String",
    "model": "String",
    "category": "String",
    "image": "String",
    "identifier": "String",
    "org": "String",
    "createdAt": "DateTime",
    "updatedAt": "DateTime",
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
    "_id": "String",
    "name": "String",
    "price": Number,
    "brand": "String",
    "model": "String",
    "category": "String",
    "image": "String",
    "identifier": "String",
    "org": "String",
    "createdAt": "DateTime",
    "updatedAt": "DateTime",
    "__v": 0,
    "description": "String"
  }
  ```

### find Id

**`GET`** /api/product/findById/'ID product'

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "String"
  }
  ```

#### Response

- Response Status:200
  ```json
  {
    "_id": "String",
    "name": "String",
    "price": 3000,
    "brand": "String",
    "model": "String",
    "category": "String",
    "image": "String",
    "identifier": "String",
    "org": "String",
    "createdAt": "DateTime",
    "updatedAt": "DateTime",
    "__v": 0
  }
  ```

### find all

**`GET`** /api/product/find

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "String"
  }
  ```

#### Response

- Response Status:200

```json
[
  {
    "_id": "String",
    "name": "String",
    "price": Number,
    "brand": "String",
    "model": "String",
    "category": "String",
    "image": "String",
    "identifier": "String",
    "org": "String",
    "createdAt": "DateTime",
    "updatedAt": "DateTime",
    "__v": 0
  }
]
```

## organization

### create organization

- **`POST`** /api/organization/create

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "String"
  }
  ```

#### Body

- require: name ,user
- user : ID user for my organization

  ```json
  {
    "name": "String",
    "user": "String"
  }
  ```

#### Response

- Response Status:200

  ```json
  {
    "name": "String",
    "user": "String",
    "_id": "String",
    "createdAt": "DateTime",
    "updatedAt": "DateTime",
    "__v": 0
  }
  ```

### update organization

- **`PUT`** /api/organization/update/'ID organization'

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "String"
  }
  ```

#### Body

- require: name ,user
- user : ID user for my organization

  ```json
  {
    "name": "String",
    "user": "String "
  }
  ```

#### Response

- Response Status:200
  ```json
  {
    "_id": "String",
    "name": "String",
    "user": "String",
    "createdAt": "DateTime",
    "updatedAt": "DateTime",
    "__v": 0
  }
  ```

### delete organization

- **`DELETE`** /api/organization/delete/'ID organization'

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "String"
  }
  ```

#### Response

- Response Status:200
  ```json
  {
    "_id": "String",
    "name": "String",
    "user": "String",
    "createdAt": "DateTime",
    "updatedAt": "DateTime",
    "__v": 0
  }
  ```

### find Id

- **`GET`** /api/organization/findById/'ID organization'

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "String"
  }
  ```

#### Response

- Response Status:200
  ```json
  {
    "_id": "String",
    "name": "String",
    "user": "String",
    "createdAt": "DateTime",
    "updatedAt": "DateTime",
    "__v": 0
  }
  ```

### find all

- **`GET`** /api/organization/find

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "String"
  }
  ```

#### Response

- Response Status:200
  ```json
  [
    {
      "_id": "String",
      "name": "String",
      "user": "String",
      "createdAt": "DateTime",
      "updatedAt": "DateTime",
      "__v": 0
    },
    {
      "_id": "String",
      "name": "String",
      "user": "String",
      "createdAt": "DateTime",
      "updatedAt": "DateTime",
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
    "token": "String"
  }
  ```

#### Body

- require: name ,org ,categoryCode
- name : name category
- org : organization ID
- categoryCode : category code

  ```json
  {
    "name": "String",
    "org": "String",
    "categoryCode": "String"
  }
  ```

#### Response

- Response Status:200

  ```json
  {
    "name": "String",
    "org": "String",
    "categoryCode": "String",
    "_id": "String",
    "createdAt": "DateTime",
    "updatedAt": "DateTime",
    "__v": 0
  }
  ```

### update category

**`PUT`** /api/category/category/'ID category'

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "String"
  }
  ```

#### Body

- require: name ,org ,categoryCode
- name : name category
- org : organization ID
- categoryCode : category code

  ```json
  {
    "name": "String",
    "org": "String",
    "categoryCode": "String"
  }
  ```

#### Response

- Response Status:200

  ```json
  {
    "name": "String",
    "org": "String",
    "categoryCode": "String",
    "_id": "String",
    "createdAt": "DateTime",
    "updatedAt": "DateTime",
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
    "token": "String"
  }
  ```

#### Response

- Response Status:200

  ```json
  {
    "_id": "String",
    "name": "String",
    "org": "String",
    "createdAt": "DateTime",
    "updatedAt": "DateTime",
    "__v": 0,
    "categoryCode": "String"
  }
  ```

### find Id

- **`GET`** /api/category/findById/'ID category'

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "String"
  }
  ```

#### Response

- Response Status:200

  ```json
  {
    "_id": "String",
    "name": "String",
    "org": "String",
    "categoryCode": "String",
    "createdAt": "DateTime",
    "updatedAt": "DateTime",
    "__v": 0
  }
  ```

### find all

- **`GET`** /api/category/find

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "String"
  }
  ```

#### Response

- Response Status:200 and get data all

```json
[
  {
    "_id": "String",
    "name": "String",
    "org": "String",
    "categoryCode": "String",
    "createdAt": "DateTime",
    "updatedAt": "DateTime",
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

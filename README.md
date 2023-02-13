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

### Verify Email

- Upon successful registration, user account will be verified.
- The code will be sent to your email.
- Bring the code to verify email.

**`POST`** /api/email/verifyEmail/`ID User`

- ID User : User ID to be verify email

#### Body

```json
{
  "verifyCode": "String"
}
```

#### Response

- Response Status:200

```json
{
  "message": "verify Email succeed"
}
```

### Verify Email Again

- Used when you want the verification code to be sent to your email again.

**`POST`** /api/email/verifyEmailAgain/`ID User`

- ID User : User ID to be verify email

#### Response

- Response Status:200

```json
{
  "message": "Email send success"
}
```

### login user

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

- Response Status:200

  ```json
  {
    "id": "String",
    "isActive": true,
    "token": "String"
  }
  ```

- If email is not verified
  -Response Status:400
  ```json
  {
    "message": "Please verify Email.",
    "user": "String",
    "verifyEmail": false
  }
  ```

### Profile

- It's the user's profile.

#### get profile

**`GET`** /api/profile/find

- Browse profile information.


#### Response

- Response Status:200

```json
{
  "_id": "String",
  "username": "String",
  "firstName": "String",
  "lastName": "String",
  "email": "String",
  "isActive": true,
  "verifyEmail": true,
  "createdAt": "String",
  "updatedAt": "String"
}
```

#### update profile

**`PUT`** /api/profile/update

- use profile update profile.

#### Body

```json
{
  "username": "String",
  "firstName": "String",
  "lastName": "String",
  "email": "String",
  "isActive": true
}
```

#### Response

- Response Status:200

```json
{
  "_id": "String",
  "username": "String",
  "firstName": "String",
  "lastName": "String",
  "email": "String",
  "isActive": true,
  "verifyEmail": true,
  "createdAt": "String",
  "updatedAt": "String"
}
```

#### Reset Password

**`PUT`** /api/profile/resetPassword

- use reset Password.

#### Body

```json
{
    "password":"String",
    "newPassword":"String"
}
```

#### Response

- Response Status:200

```json
{
    "message": " reset Password succeed"
}
```

### login user

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

- Response Status:200

  ```json
  {
    "id": "String",
    "isActive": true,
    "token": "String"
  }
  ```

- If email is not verified
  -Response Status:400
  ```json
  {
    "message": "Please verify Email.",
    "user": "String",
    "verifyEmail": false
  }
  ```

## upload

### upload image

- Used to add a picture of the product.
- file Type jpeg,jpg,png only

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

- Response Status:200

  - Used for adding product, send id image as well

  ```json
  {
    "id": "String"
  }
  ```

## organization

### create organization

- Used to add a user's organization.
- One user can only add one organization.

- **`POST`** /api/organization/create

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "String"
  }
  ```

#### Body

- name : name organization

  ```json
  {
    "name": "String"
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
    "updatedAt": "DateTime"
  }
  ```

### update organization

- Use to update the name of organization.

- **`PUT`** /api/organization/update/'ID organization'

#### Headers

- Requires a token in Headers for invocation api

  ```json
  {
    "token": "String"
  }
  ```

#### Body

- name : name organization

  ```json
  {
    "name": "String"
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
    "updatedAt": "DateTime"
  }
  ```

### delete organization

- use delete organization

- **`DELETE`** /api/organization/delete

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
    "updatedAt": "DateTime"
  }
  ```

### find Id

- **`GET`** /api/organization/findById

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
    "updatedAt": "DateTime"
  }
  ```

## product

### create product

- Used to add new products
- Do not add products with duplicate names.

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

- Response Status:200

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

- Used to update information of existing products.
- Do not update products with duplicate names.

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
    "updatedAt": "DateTime"
  }
  ```

### delete product

- Used to delete existing product information.
- Only the user's products can be deleted.

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
    "description": "String"
  }
  ```

### find Id

- Search for products, ask for ID.

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
    "updatedAt": "DateTime"
  }
  ```

### find all

- Search all products

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
    "updatedAt": "DateTime"
  }
]
```

## category

### create category

- used to create
- There can't be duplicate category names in one organization.

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

- Used to update category information.
- There can't be duplicate category names in one organization.

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

- Used to delete category information.

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

### find Id category

- Used to search for category information by ID.

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

### find all category

- Used to search for all category information.

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

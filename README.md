## /user
### register user
* `POST` /api/register
 #### Body     
* require: username ,password ,email

    ```json
    {
      
    "username" :"admin",
    "password" :"admin123",
    "email" :"admin@admin.com",
    "firstName":"admin",
    "lastName":"admin"

    }
    ```
 * #### Response 

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
    
### login user
 `POST` /api/login
 #### Body 
* require: username ,password 

    ```json
    {
      
    "username" :"admin",
    "password" :"admin123",
    
    }
    ```
 #### Response

    ```json
    {
    "id": "63d3cf0fdee6b116c8549f0e",
    "isActive": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDNjZjBmZGVlNmIxMTZjODU0OWYwZSIsImlhdCI6MTY3NDgyNjM1NCwiZXhwIjoxNjc3NDE4MzU0fQ.UKtcOsx8Qs4c82jmNoqHjodThvRUbmfvfHp0vaD0upc"
    }
    ```

## /product
### create product
 `POST` /api/product/create
#### Headers

    ```json
    {
    "token" :"VALUE"
    }
    ```  

#### Body 
* require: name ,price ,brand ,identifier ,org
* org : organiztion ID
* file : ID file

    ```json
    {
      
    "name" :"product1",
    "price" :"3000",
    "brand" :"brand2",
    "model" :"product model2",
    "colors" :"red",
    "description" :"Easy to break",
    "identifier" :"admin",
    "org" :"63c7eb8b2a959fca90cd28dc",
    "file" :"ID file"
    
    }
    ```
#### Response

    ```json
    {
    "name": "product1",
    "price": 3000,
    "brand": "brand2",
    "model": "product model2",
    "colors": [
        "red"
    ],
    "identifier": "admin",
    "org": "63c7eb8b2a959fca90cd28dc",
    "_id": "63d3d5f0d0496e806a162cad",
    "createdAt": "2023-01-27T13:47:28.492Z",
    "updatedAt": "2023-01-27T13:47:28.492Z",
    "__v": 0
    }
    ```

### update product
 `POST` /api/product/update/'ID product'
 #### Headers

    ```json
    {
    "token" :"VALUE"
    }
    ``` 
#### Body   
* require: name ,price ,brand ,identifier ,org
* org : organiztion ID

    ```json
    {
      
    {
      
    "name" :"product2",
    "price" :"4000",
    "brand" :"brand2",
    "model" :"product model2",
    "colors" :["black"],
    "description" :"Easy to break",
    "identifier" :"admin",
    "org" :"63c7eb8b2a959fca90cd28dc"
    
    }

    }
    ```
#### Response
    ```json
    {
    "_id": "63d3d5f0d0496e806a162cad",
    "name": "product1",
    "price": 3000,
    "brand": "brand2",
    "model": "product model2",
    "colors": [
        "red"
    ],
    "identifier": "admin",
    "org": "63c7eb8b2a959fca90cd28dc",
    "createdAt": "2023-01-27T13:47:28.492Z",
    "updatedAt": "2023-01-27T13:47:28.492Z",
    "__v": 0
    }
    ```
### delete product
 `POST` /api/product/delete/'ID product'
 #### Headers

    ```json
    {
    "token" :"VALUE"
    }
    ``` 
#### Response
    ```json
    {
    "_id": "63d3d5f0d0496e806a162cad",
    "name": "product2",
    "price": 4000,
    "brand": "brand2",
    "model": "product model2",
    "colors": [
        "black"
    ],
    "identifier": "admin",
    "org": "63c7eb8b2a959fca90cd28dc",
    "createdAt": "2023-01-27T13:47:28.492Z",
    "updatedAt": "2023-01-27T13:54:36.301Z",
    "__v": 0,
    "description": "Easy to break"
    }
    ```

### find Id
* `GET` /api/product/findById/'ID product'
#### Headers

    ```json
    {
    "token" :"VALUE"
    }
    ``` 
#### Response

### find all
* `GET` /api/product/find
#### Headers

    ```json
    {
    "token" :"VALUE"
    }
    ``` 
#### Response
```json
    {
    "_id": "63d3d929d0496e806a162cb5",
    "name": "product1",
    "price": 3000,
    "brand": "brand2",
    "model": "product model2",
    "colors": [
        "red"
    ],
    "identifier": "admin",
    "org": "63c7eb8b2a959fca90cd28dc",
    "createdAt": "2023-01-27T14:01:13.811Z",
    "updatedAt": "2023-01-27T14:01:13.811Z",
    "__v": 0
    }
```


## /organiztion
### create organiztion
* `POST` /api/organiztion/create
#### Headers

    ```json
    {
    "token" :"VALUE"
    }
    ``` 
* body  
* require: name ,user
* user : ID user for my organiztion

    ```json
    {
      
     "name" :"organiztion",
     "user" :"ID user"
    
    }
    ```
### create organiztion
* `POST` /api/organiztion/update/'ID organiztion'
#### Headers

    ```json
    {
    "token" :"VALUE"
    }
    ``` 
* body  
* require: name ,user
* user : ID user for my organiztion

    ```json
    {
      
     "name" :"organiztion2",
     "user" :"ID user"
    
    }
    ```
### delete organiztion
* `POST` /api/organiztion/delete/'ID organiztion'
#### Headers

    ```json
    {
    "token" :"VALUE"
    }
    ``` 

### find Id
* `GET` /api/organiztion/findById/'ID organiztion'
#### Headers

    ```json
    {
    "token" :"VALUE"
    }
    ``` 

### find all
* `GET` /api/organiztion/find
#### Headers

    ```json
    {
    "token" :"VALUE"
    }
    ``` 






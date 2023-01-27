
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
 #### Response 
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
* `POST` /api/login
* body  
* require: username ,password 

    ```json
    {
      
    "username" :"admin",
    "password" :"admin123",
    
    }
    ```

## /product
### create product
* `POST` /api/product/create
* body  
* require: name ,price ,brand ,identifier ,org
* org : organiztion ID

    ```json
    {
      
    "name" :"product1",
    "price" :"3000",
    "brand" :"brand2",
    "model" :"product model2",
    "colors" :"red",
    "description" :"Easy to break",
    "identifier" :"admin",
    "org" :"123456"
    
    }
    ```
### update product
* `POST` /api/product/update/'ID product'
* body  
* require: name ,price ,brand ,identifier ,org
* org : organiztion ID

    ```json
    {
      
    "name" :"product1",
    "price" :"3000",
    "brand" :"brand2",
    "model" :"product model2",
    "colors" :"red",
    "description" :"Easy to break",
    "identifier" :"admin",
    "org" :"123456"
    
    }
    ```
### delete product
* `POST` /api/product/delete/'ID product'

### find Id
* `GET` /api/product/findById/'ID product'

### find all
* `GET` /api/product/find



## /organiztion
### create organiztion
* `POST` /api/organiztion/create
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

### find Id
* `GET` /api/organiztion/findById/'ID organiztion'

### find all
* `GET` /api/organiztion/find






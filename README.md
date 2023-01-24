
## /user
### register user
* `POST` /register
* body  
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
### login user
* `POST` /login
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
* `POST` /product/create
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
* `POST` /product/update/'ID product'
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
* `POST` /product/delete/'ID product'

### find Id
* `GET` /product/findById/'ID product'

### find all
* `GET` /product/find



## /organiztion
### create organiztion
* `POST` /organiztion/create
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
* `POST` /organiztion/update/'ID organiztion'
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
* `POST` /organiztion/delete/'ID organiztion'

### find Id
* `GET` /organiztion/findById/'ID organiztion'

### find all
* `GET` /organiztion/find






Web Design & User Experience Assignment 8

Name: Priyal Vimal Gudhka
NU ID No.: 002747680
Email Id: gudhka.p@northeastern.edu


About the Assignment : -

As a part of this assignment, I have created various API's for fetching the list of existing to-do items, add a new to-do item, fetch a signle to-do item by passing the id, modify a to-do item by passing the id and remove the to-do item by passing the id using Mongoose library, Express, Nodejs, REST API and MongoDB is used for storing the data.

A to-do item can have a title (Mandatory field), description (Mandatory field), createdDate (Default value is the current Date and Time) and lastModifiedDate (Default value is the current Date and Time)

To fetch/modify the data stored in MongoDB, postman is used. Below are the API's and HTTP methods used to perform various operations: -

1. "POST" method is used for adding a new to-do item 
API: http://localhost:8080/todos. Then Add title, description, createdDate and lastModifiedDate which will store a new to-do in MongoDB.

2. "GET" method is used for fetching a list of existing to-do items
API: http://localhost:8080/todos. In the repsone, a list of to-do item will be displayed.

3. "GET" method is used for fetching a single to-do item by passing id
API: http://localhost:8080/todos/:id (Add Id of the to-do item to fetch its details). In the repsone, a to-do item will be displayed based on id.

4. "PUT" method is used for modifying a to-do item by passing id
API: http://localhost:8080/todos/:id (Add Id of the to-do item to modify its details). Details will be updated and stored in the MongoDB of that particular to-do item.

5. "DELETE" method is used for removing a to-do item by passing id
API: http://localhost:8080/todos/:id (Add Id of the to-do item to delete). To-do item will be deleted based on the Id passed.

Created a database in MongoDB with name "tododb" having a collection named "todos" which will store all the to-do items

Following is the folder strcuture of the project:

1. controller folder contains the todo.controller.js file having methods such as index, post, get, update and remove which invokes the methods defined in the service class

2. models folder contains index.js file and todo.js file which defines fields used for performing various operations on a to-do item

3. routes folder contains index.js file and todo-routers.js which invokes the various methods defined in controller for performing different operations

4. services folder contains the todo-service.js file which consists of methods such as save, search, get, update, remove which performs operations like fetching, modifying, removibg a to-do item

5. server.js which is used for defining the port number to be used

6. node_modules, package.json & package-lock.json is generated using commands

Steps for generating the various folders: -

1. Open terminal

2. Type "npm init" to generate package.json

3. Then enter "npm i express cors debug mongoose --save" to generate the package-lock.json and node_modules folder

4. To run enter "npm start"

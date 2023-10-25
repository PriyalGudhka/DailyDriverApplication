import express from 'express';
/* Imports todo-controller.js for calling the different methods defined in it */
import * as todoController from '../controllers/todo-controller.js';

const Router = express.Router();

Router.route('/')
    .post(todoController.post) //Adds a new to-do item by using the POST method (Internally calls the post method defined in todo-controller.js file)
    .get(todoController.index); //Fetches all the extsiting to-do items using the GET method (Internally calls the index method defined in todo-controller.js file)

/* To fetch a repsonse a unique Id must be passed as result is returned based on it */
Router.route('/:id')
    .get(todoController.get) //Fetches a to-do item by using the GET method based on the ID passed (Internally calls the get method defined in todo-controller.js file)
    .put(todoController.update) //Updates a to-do item by using the PUT method based on the ID passed (Internally calls the update method defined in todo-controller.js file)
    .delete(todoController.remove); //Removes a to-do item by using the DELETE method based on the ID passed (Internally calls the remove method defined in todo-controller.js file)

export default Router;
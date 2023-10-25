import TodoRouter from './todo-routers.js';

export default (app) => {
    app.use('/todos',TodoRouter); //Used for setting the url to fetch the response

}
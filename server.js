import app from './api/app.js';

const port = 8080; //Defines the port number to be used for querying

app.listen(port,()=>{
    console.log(`Server running on port: ${port}`);
});
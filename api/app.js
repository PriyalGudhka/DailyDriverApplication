import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/index.js';
import model from './models/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
routes(app); //Used for invoking the methods defined in controllers and services to perform various operations

//Used for creating a connection by adding the connection name along with the Database name
mongoose.connect('mongodb://localhost:27017/tododb');

export default app;
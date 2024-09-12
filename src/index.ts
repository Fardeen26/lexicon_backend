import dotenv from 'dotenv';
dotenv.config();

import './db';
import express, { Application } from 'express';
import cors, { CorsOptions } from 'cors';
import bookRouter from './routes/route';

const port = process.env.PORT || 5513;

const app: Application = express();

const corsOptions: CorsOptions = {
    origin: process.env.FRONT_END_URL || '*', 
};

app.use(express.json());
app.use(cors(corsOptions));

app.use('/api/books', bookRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

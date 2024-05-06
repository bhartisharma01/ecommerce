import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import db from './db/connect.js';

const __dirname = path.resolve();
let envPath=path.join(__dirname,'../','.env');
dotenv.config({ path: envPath });

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})
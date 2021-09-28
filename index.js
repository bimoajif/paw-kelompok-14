import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import usersRoutes from './routes/bakery.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/bakery', usersRoutes);

app.get('/', (req,res) => res.send('Hello from Homepage'));

app.listen(PORT, () => console.log(`Server Running on PORT: http://localhost:${PORT}`));

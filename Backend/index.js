import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/reportRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
connectDB();


//routes 

app.use('/api/v1/', router)


const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

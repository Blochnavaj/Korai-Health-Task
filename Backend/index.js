import express from 'express';
import cors from 'cors';
import router from './routes/reportRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
 


//routes 

app.use('/api/v1/', router)


const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

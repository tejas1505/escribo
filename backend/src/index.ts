import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


import api from './routes/routes.js'


dotenv.config();



const app = express();
const originsWhiteList = [process.env.FRONTEND_URL]


app.use(express.json())

app.use(cors({
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin || originsWhiteList.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}))

app.get('/', (req,res) => res.send('Welcome to Excribo'))

app.use('/api', api)

export default app;
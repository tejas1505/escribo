import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';

import api from './routes/routes.js'


dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();
const originsWhiteList = [process.env.FRONTEND_URL]
const server = http.createServer(app)

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

app.use('/api', api)

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
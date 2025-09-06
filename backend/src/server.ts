import http from 'http';
import app from './index.js';
const PORT = process.env.PORT || 8000;
const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
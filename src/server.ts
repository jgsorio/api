import 'dotenv/config';
import express, { Application } from 'express';
import cors from 'cors';
import https from 'https';
import http from 'http';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const runServer = (port: number, server: http.Server) => {
  server.listen(port, () => console.log(`Server running on port ${port}`));
}

let port = process.env.PORT ? parseInt(process.env.PORT) : 3333
let server = http.createServer(app);

if (process.env.NODE_ENV === 'production') {

}

runServer(port, server);
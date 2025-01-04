import 'dotenv/config';
import express, { Application } from 'express';
import cors from 'cors';
import https from 'https';
import http from 'http';
import siteRoutes from './routes/site';
import { requestInterceptor } from './utils/requestInterceptor';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all('*', requestInterceptor);
app.use('/', siteRoutes);

const runServer = (port: number, server: http.Server) => {
  server.listen(port, () => console.log(`Server running on port ${port}`));
}

let port = process.env.PORT ? parseInt(process.env.PORT) : 3333
let server = http.createServer(app);

if (process.env.NODE_ENV === 'production') {

}

runServer(port, server);

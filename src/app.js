import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
// import ParseService from './parseService';
import passport from 'passport';
import initPassport from './passport';
import dbConnect from './dbStartup';

import config from './config';
import routes from './routes';

const app = express();
dbConnect();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/client/dist/`));
app.use(cors());

initPassport(passport);

routes(app);

app.get('/', (req, res) => {
  fs.createReadStream(`${__dirname}/client/dist/index.html`).pipe(res);
});

const server = app.listen(config.port);

process.on('exit', () => {
  server.close();
});
process.on('uncaughtException', () => {
  server.close();
});
process.on('SIGTERM', () => {
  server.close();
});


console.log(`http://localhost:${config.port}`);

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
// import ParseService from './parseService';
import matchweek from './src/rotures/matchweek';
import teams from './src/rotures/teams';
import bet from './src/rotures/bet';
import dbConnect from './src/dbStartup';


const PORT = 7113;
const app = express();
dbConnect();
app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: false,
}));
app.use(express.static(`${__dirname}/client/dist/`));
app.use(cors());
app.use('/matchweek', matchweek);
app.use('/teams', teams);
app.use('/bet', bet);
app.get('/', (req, res) => {
  fs.createReadStream(`${__dirname}/client/dist/index.html`).pipe(res);
});
const server = app.listen(PORT);
process.on('exit', () => {
  server.close();
});
process.on('uncaughtException', () => {
  server.close();
});
process.on('SIGTERM', () => {
  server.close();
});
const SERVER_URL = 'http://localhost:3771';
console.log(SERVER_URL);

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
// import ParseService from './parseService';
import matchweek from './rotures/matchweek';
import teams from './rotures/teams';
import bet from './rotures/bet';
import dbConnect from './dbStartup';
import register from './controllers/register';
import login from './controllers/login';

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
app.post('/register', register);
app.post('/login', login);
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

const SERVER_URL = `http://localhost:${PORT}`;

console.log(SERVER_URL);

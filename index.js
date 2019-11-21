import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
// import ParseService from './parseService';
import matchweek from './src/rotures/matchweek';
import teams from './src/rotures/teams';
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
app.get('/', (req, res) => {
  fs.createReadStream(`${__dirname}/client/dist/index.html`).pipe(res);
});
app.listen(PORT);
console.log(`http://localhost:${PORT}`);

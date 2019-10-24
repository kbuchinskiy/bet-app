import express from "express"
import ParseService from "./parseService";
import fs from "fs";

const PORT = 7112;
const URL = "https://www.parimatch.com/en/sport/futbol/anglija-premer-liga";

const parseService = new ParseService(URL);

const app = express();
app.use('/static', express.static(__dirname + '/static'));

app.get("/", (req, res) => {
    fs.createReadStream(__dirname + "/client/dist/index.html").pipe(res);
});

app.get("/odds", (req, res) => {
    parseService.getData().then((data) => {
        res.send(data);
    });
});

app.listen(PORT);
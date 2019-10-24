import express from "express"
import ParseService from "./parseService";

const PORT = 7112;
const URL = "https://www.parimatch.com/en/sport/futbol/anglija-premer-liga";

const parseService = new ParseService(URL);

const app = express();

app.get("/", (req, res) => {
    parseService.getData().then((data) => {
        res.send(data);
    });
});

app.listen(PORT);

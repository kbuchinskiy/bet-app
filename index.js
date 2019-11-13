import express from "express"
import ParseService from "./parseService";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = 7112;
// const URL = "https://www.parimatch.com/en/sport/futbol/anglija-premer-liga";

// const parseService = new ParseService(URL);
import matchday from "./rotures/createMatchday" 
const app = express();
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/client/dist/'));
app.use(cors());

app.use("/matchday", matchday);

// app.get("/", (req, res) => {
//     // fs.createReadStream(__dirname + "/client/dist/index.html").pipe(res);
// });



app.listen(PORT);
console.log(`http://localhost:${PORT}`)

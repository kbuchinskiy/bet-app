import express from "express"
import ParseService from "./parseService";
import cors from "cors";
import bodyParser from "body-parser";
import matchweek from "./rotures/matchweek"
import dbConnect from "./dbStartup";
const PORT = 7112;


const app = express();

dbConnect();
app.use(bodyParser.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static(__dirname + '/client/dist/'));
app.use(cors());
app.use("/matchweek", matchweek);

app.get("/", (req, res) => {
    fs.createReadStream(__dirname + "/client/dist/index.html").pipe(res);
});

app.listen(PORT);
console.log(`http://localhost:${PORT}`)
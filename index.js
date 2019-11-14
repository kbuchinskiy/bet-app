import express from "express"
import ParseService from "./parseService";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://bet-app:G@dqe2vk8uND6Mx@cluster0-97zcj.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;


const PORT = 7112;
import matchday from "./rotures/createMatchday"
const app = express();
app.use(bodyParser.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static(__dirname + '/client/dist/'));
app.use(cors());

app.use("/matchday", matchday);

// app.get("/", (req, res) => {
//     // fs.createReadStream(__dirname + "/client/dist/index.html").pipe(res);
// });



app.listen(PORT);
console.log(`http://localhost:${PORT}`)
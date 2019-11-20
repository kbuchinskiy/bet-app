import express from "express";
import Match from "../models/matchweek"
const router = express.Router();

router.post("/create", (req, res) => {

  const matchweek = req.body.matchweek;

  let matches = req.body;
  matches = matches.map((match, index) => {
    match.id = `${matchweek}_${index + 1}`;
    match.matchweek = matchweek;
    return match;
  });

  console.log(matches);
  return;
  Match.insertMany(matches).then(() => {
    res.end("added")
  }).catch(e => {
    res.end(e)
  })
});

router.get("/", (req, res) => {
  Match.find().then((matches) => {
    res.end(JSON.stringify(matches))
  }).catch(e => {
    console.log(e);
  })
});

router.get("/last", (req, res) => {
  Match.find().sort({
    $natural: -1
  }).limit(1).then(matches => {
    res.end(JSON.stringify(matches[0].matchweek))
  }).catch(e => {
    console.log(e);
  })
});


export default router;
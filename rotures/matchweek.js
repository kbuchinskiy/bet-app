import express from "express";
import Matchweek from "../models/matchweek"
const router = express.Router();

router.post("/create", (req, res) => {
    const matchweek = new Matchweek({
        matchweekId: req.body.matchweekId,
        matches: req.body.matches
    })

    Matchweek.findOne({
        matchweekId: req.body.matchweekId
    }).then(matchweekItem => {
        if (matchweekItem) {
            res.end("matchweek exists")
        } else {
            matchweek.save(err => {
                if (err) {
                    console.log(err);
                } else {
                    res.end("matchweek created")
                }
            })
        }
    })
});


export default router;
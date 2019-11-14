import express from "express";
import Matchday from "../models/matchday"
const router = express.Router();

router.post("/create", (req, res) => {
    const matchday = new Matchday({
        matchday: req.body.matchday,
        matches: req.body.matches
    })
    matchday.save(err => {
        if(err) {
            console.log(err);
        }
        res.end("matchday created")
    })
});

export default router;
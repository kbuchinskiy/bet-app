import express from "express";

const router = express.Router();

router.post("/create", (req, res) => {
    const matchdayData = req.body;
    res.send("matchday created")
});

export default router;
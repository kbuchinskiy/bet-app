import mongoose from "mongoose";

export const matchweekSchema = new mongoose.Schema({
    matchweekId: Number,
    matches: Array
},)
export default mongoose.model("Matchweek", matchweekSchema, "matchweeks");
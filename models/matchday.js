import mongoose from "mongoose";

export const matchdaySchema = new mongoose.Schema({
    matchday: Number,
    matches: Array
},)
export default mongoose.model("Matchday", matchdaySchema);
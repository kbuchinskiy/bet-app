import mongoose from 'mongoose';

const matchweekSchema = new mongoose.Schema({
  id: Number,
  matches: [
    {
      id: String,
      teams: Array,
      odds: Array,
      score: Array,
    },
  ],
});

export default mongoose.model('Matchweek', matchweekSchema, 'matchweeks');

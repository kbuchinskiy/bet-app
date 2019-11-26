import mongoose from 'mongoose';

export const matchweekSchema = new mongoose.Schema({
  id: Number,
  matches: [
    {
      teams: Array,
      odds: Array,
    },
  ],
});

export default mongoose.model('Matchweek', matchweekSchema, 'matchweeks');

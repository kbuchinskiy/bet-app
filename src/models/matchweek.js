import mongoose from 'mongoose';

export const matchSchema = new mongoose.Schema({
  id: String,
  matchweek: Number,
  teams: Array,
  odds: Array,
}, {
  retainKeyOrder: true,
});

export default mongoose.model('Match', matchSchema, 'matches');

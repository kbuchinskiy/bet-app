import mongoose from 'mongoose';

const betSchema = new mongoose.Schema({
  id: Number,
  matchId: String,
  outcome: Number,
});

export default mongoose.model('Bet', betSchema, 'bets');

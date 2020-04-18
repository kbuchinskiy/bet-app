import mongoose from 'mongoose';

const betSchema = new mongoose.Schema({
  userId: String,
  matchId: String,
  outcomeBet: Number,
  success: Boolean,
});

export default mongoose.model('Bet', betSchema, 'bets');

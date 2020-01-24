import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(['Liverpool',
    'Leicester City',
    'Chelsea',
    'Man City',
    'Sheff Utd',
    'Arsenal',
    'Man United',
    'Wolves',
    'Bournemouth',
    'Burnley',
    'Brighton',
    'Crystal Palace',
    'New Castle',
    'Tottenham',
    'Everton',
    'West Ham',
    'Aston Villa',
    'Watford',
    'Southampton',
    'Norwich City']);
});

export default router;

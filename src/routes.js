
import {
  add, get, clean,
} from './controllers/bet';
import {
  post, getMatchweekById, getAmount, put,
} from './controllers/matchweek';

import { register, login } from './controllers/authentication';
import authenticationPolicy from './policies/authenticationPolicy';
import isAuthenticated from './policies/isAuthenticated';

export default (app) => {
  app.post('/api/register', authenticationPolicy, register);
  app.post('/api/login', login);

  app.post('/api/matchweek', post);
  app.put('/api/matchweek/:id', put);
  app.get('/api/matchweek/:id', getMatchweekById);
  app.get('/api/matchweek/amount', getAmount);


  app.get('/api/bet/clean', clean);
  app.post('/api/bet', add);
  app.get('/api/bets', isAuthenticated, get);

  app.get('/api/teams', (req, res) => {
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
};

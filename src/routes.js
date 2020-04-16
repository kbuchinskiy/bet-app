
import {
  add, get, clean,
} from './controllers/bet';
import {
  post, getMatchweekById, getAmount, put,
} from './controllers/matchweek';

import { register, login } from './controllers/authentication';
import authenticationPolicy from './policies/authenticationPolicy';

export default (app) => {
  app.post('/register', authenticationPolicy, register);
  app.post('/login', login);

  app.post('/matchweek', post);
  app.put('/matchweek/:id', put);
  app.get('/matchweek/:id', getMatchweekById);
  app.get('/matchweek/amount', getAmount);


  app.get('/bet/clean', clean);
  app.post('/bet/add', add);
  app.get('/bet/get', get);

  app.get('/teams', (req, res) => {
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

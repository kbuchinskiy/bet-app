
import {
  add, get, clean,
} from './controllers/bet';
import {
  create, read, getAmount, update,
} from './controllers/matchweek';

import { register } from './controllers/authentication';
import authenticationPolicy from './policies/authenticationPolicy';
import login from './controllers/login';

export default (app) => {
  app.post('/register', authenticationPolicy, register);
  app.post('/login', login);

  app.post('/matchweek/create', create);
  app.post('/matchweek/update', update);
  app.get('/matchweek/read', read);
  app.get('/matchweek/amount', getAmount);


  app.get('/bet/clean', clean);
  app.post('/bet/add', add);
  app.get('/bet/get', get);

  app.get('/', (req, res) => {
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

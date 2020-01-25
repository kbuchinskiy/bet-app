import express from 'express';
import {
  create, read, getAmount, update,
} from '../controllers/matchweek';

const router = express.Router();

router.post('/create', create);
router.post('/update', update);
router.get('/read', read);
router.get('/amount', getAmount);

export default router;

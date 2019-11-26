import express from 'express';
import { create, read, getAmount } from '../controllers/matchweek';

const router = express.Router();

router.post('/create', create);
router.get('/read', read);
router.get('/amount', getAmount);

export default router;

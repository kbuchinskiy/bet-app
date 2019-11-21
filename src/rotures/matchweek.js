import express from 'express';
import { create, read, getLast } from '../controllers/matchweek';

const router = express.Router();

router.post('/create', create);
router.get('/', read);
router.get('/last', getLast);


export default router;

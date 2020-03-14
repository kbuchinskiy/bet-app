import express from 'express';
import { add, get, clean } from '../controllers/bet';

const router = express.Router();

router.get('/clean', clean);
router.post('/add', add);
router.get('/get', get);

export default router;

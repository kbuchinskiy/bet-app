import express from 'express';
import { add, get, clean } from '../controllers/bet';

const router = express.Router();

router.post('/add', add);
router.get('/get', get);
router.get('/clean', clean);

export default router;

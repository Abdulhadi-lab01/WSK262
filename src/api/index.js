import catRouter from './routes/cat-router.js';
import express from 'express';
import userRouter from './routes/user-router.js';

const router = express.Router();

// bind base url for all cat routes to catRouter
router.use('/cat', catRouter);
router.use('/user', userRouter);

export default router;
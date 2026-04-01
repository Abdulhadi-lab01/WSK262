import {
    deleteUser,
    getUser,
    getUserById,
    postUser,
    putUser,
} from '../controllers/user-controller.js';

import express from 'express';

const userRouter = express.Router();

// /api/v1/users
userRouter.route('/').get(getUser).post(postUser);

userRouter.route('/:id').get(getUserById).put(putUser).delete(deleteUser);

export default userRouter;
import {
    deleteUser,
    getUser,
    getUserById,
    postUser,
    putUser,
} from '../controllers/user-controller.js';

import { body, param } from 'express-validator';
import { validationErrors } from '../../middlewares/error-handlers.js';
import express from 'express';

const userRouter = express.Router();

// /api/v1/users
userRouter
    .route('/')
    .get(getUser)
    .post(
        body('email')
            .trim()
            .isEmail()
            .withMessage('Invalid email')
            .normalizeEmail(),

        body('username')
            .trim()
            .isLength({ min: 3, max: 20 })
            .withMessage('Username must be 3-20 characters')
            .isAlphanumeric()
            .withMessage('Username must contain only letters and numbers')
            .escape(),

        body('password')
            .trim()
            .isLength({ min: 8 })
            .withMessage('Password must be at least 8 characters'),

        validationErrors,
        postUser
    );

// GET / PUT / DELETE by id
userRouter
    .route('/:id')
    .get(
        param('id').isInt().withMessage('ID must be integer'),
        validationErrors,
        getUserById
    )
    .put(
        param('id').isInt(),

        body('email').optional().isEmail().normalizeEmail(),
        body('username')
            .optional()
            .isLength({ min: 3, max: 20 })
            .isAlphanumeric()
            .escape(),
        body('password').optional().isLength({ min: 8 }),

        validationErrors,
        putUser
    )
    .delete(
        param('id').isInt().withMessage('ID must be integer'),
        validationErrors,
        deleteUser
    );

export default userRouter;
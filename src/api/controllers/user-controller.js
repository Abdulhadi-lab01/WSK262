import bcrypt from 'bcrypt';
import {
    addUser,
    findUserById,
    listAllUsers,
    modifyUser,
    removeUser,
} from '../models/user-model.js';

// GET ALL
const getUser = async (req, res, next) => {
    try {
        const users = await listAllUsers();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

// GET BY ID
const getUserById = async (req, res, next) => {
    try {
        const user = await findUserById(req.params.id);

        if (user) {
            res.json(user);
        } else {
            const error = new Error('User not found');
            error.status = 404;
            next(error);
        }
    } catch (err) {
        next(err);
    }
};

// POST
const postUser = async (req, res, next) => {
    try {
        // hash password
        req.body.password = await bcrypt.hash(req.body.password, 10);

        const result = await addUser(req.body);

        if (result.user_id) {
            res.status(201).json({
                message: 'New user added.',
                result,
            });
        } else {
            const error = new Error('User not created');
            error.status = 400;
            next(error);
        }
    } catch (err) {
        next(err);
    }
};

// PUT
const putUser = async (req, res, next) => {
    try {
        const result = await modifyUser(req.body, req.params.id);

        if (result.message === 'success') {
            res.json({ message: 'user item updated.' });
        } else {
            const error = new Error('User not found');
            error.status = 404;
            next(error);
        }
    } catch (err) {
        next(err);
    }
};

// DELETE
const deleteUser = async (req, res, next) => {
    try {
        const result = await removeUser(req.params.id);

        if (result.message === 'success') {
            res.json({ message: 'user item deleted.' });
        } else {
            const error = new Error('User not found');
            error.status = 404;
            next(error);
        }
    } catch (err) {
        next(err);
    }
};

export { getUser, getUserById, postUser, putUser, deleteUser };
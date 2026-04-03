import {validationResult} from 'express-validator';


const validationErrors = async (req, res, next) => {
    // validation errors can be retrieved from the request object (added by express-validator middleware)
    const errors = validationResult(req);
    // check if any validation errors
    if (!errors.isEmpty()) {
        const messages = errors
            .array()
            .map((error) => `${error.path}: ${error.msg}`)
            .join(', ');
        const error = new Error(messages);
        error.status = 400;
        next(error);
        return;
    }
    next();
};
export const errorHandler = (err, req, res, next) => {
    console.error(err.message);

    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
    });
};

export {validationErrors};
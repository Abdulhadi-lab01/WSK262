import {
    deleteCat,
    getCat,
    getCatById,
    postCat,
    putCat,
} from '../controllers/cat-controller.js';

import { createThumbnail } from '../../middlewares/upload.js';

import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

import express from 'express';

const catRouter = express.Router();

// /api/v1/cats
catRouter
    .route('/')
    .get(getCat)
    .post(upload.single('cat'), createThumbnail, postCat);

// ❌ DUPLICATE ROUTES (commented out to avoid conflicts)

// catRouter.get('/', getCat);

// catRouter.post('/', upload.single('cat'), postCat);
// ⚠️ This one skips createThumbnail → not correct for assignment 4

// catRouter.get('/', (req, res) => {
//    return getCat(req, res);
// });

catRouter
    .route('/:id')
    .get(getCatById)
    .put(putCat)
    .delete(deleteCat);

export default catRouter;
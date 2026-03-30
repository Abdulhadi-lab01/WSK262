import express from 'express';
import {
    getCat,
    getCatById,
    postCat,
    putCat,
    deleteCat,
} from '../controllers/cat-controller.js';
const catRouter = express.Router();


// /api/v1/cats

catRouter.route('/').get(getCat).post(postCat);


import multer from 'multer';
const upload = multer({ dest: 'uploads/' })

catRouter.post('/', upload.single('cat'), postCat);






catRouter.route('/').get(getCat).post(postCat).post(upload.single('cat'), postCat);

catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);

export default catRouter;
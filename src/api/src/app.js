import express from 'express';
import {getCat,getCatById,postCat,putCat,deleteCat} from '../controllers/cat-controller.js'
import {getUser, getUserById, postUser, putUser, deleteUser} from '../controllers/user-controller.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.listen(3000, '127.0.0.1', () => {
    console.log('Server running on port 3000');
});
app.get('/api/v1/cat', (req, res) => {
    getCat(req, res)
});

app.get('/api/v1/cat/:id', (req, res) => {
    getCatById(req, res)
})
app.post('/api/v1/cat', (req, res) => {
    postCat(req, res)
})
app.put('/api/v1/cat/:id', (req, res) => {
    putCat(req, res)
})
app.delete('/api/v1/cat/:id', (req, res) => {
    deleteCat(req, res)
})
app.get('/api/v1/user', (req, res) => {
    getUser(req, res);
});

// GET user by id
app.get('/api/v1/user/:id', (req, res) => {
    getUserById(req, res);
});

// POST new user
app.post('/api/v1/user', (req, res) => {
    postUser(req, res);
});

// PUT update user
app.put('/api/v1/user/:id', (req, res) => {
    putUser(req, res);
});

// DELETE user
app.delete('/api/v1/user/:id', (req, res) => {
    deleteUser(req, res);
});
app.use('/public', express.static('public'));
export default app;
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
app.get('/api/v1/cat', (req, res) => {
    const cat = {
        cat_id: 1,
        name: "Milo",
        birthdate: "2020-05-10",
        weight: 4.5,
        owner: "Abdu",
        image: "https://loremflickr.com/320/240/cat"
    };

    res.json(cat);
});
app.use('/public', express.static('public'));
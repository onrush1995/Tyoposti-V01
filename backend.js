import express from 'express';
import unknownMiddleware from './tyopsotimiddleware/unknown.js';
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(unknownMiddleware);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

import express from 'express';
import errorHandling from './tyopsotimiddleware/express-error-handler.js';
import unknownMiddleware from './tyopsotimiddleware/unknown.js';
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    throw new Error('BROKEN');
    res.send('Hello World!');
});

app.use(unknownMiddleware);
app.use(errorHandling);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

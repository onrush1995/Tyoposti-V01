import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import errorHandling from './tyopsotimiddleware/express-error-handler.js';
import unknownMiddleware from './tyopsotimiddleware/unknown.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(unknownMiddleware);
app.use(errorHandling);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

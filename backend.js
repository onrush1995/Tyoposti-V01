// express library setup
import express from 'express';
import cors from 'cors';
const app = express();

// For the .ENV File setup
import dotenv from 'dotenv';
dotenv.config();

// Bringing error code
import 'express-async-errors';

// Middleware setup
import unknownMiddleware from './tyopsotimiddleware/unknown.js';
import errorHandling from './tyopsotimiddleware/express-error-handler.js';

// Mongo DB connection file
import { connectDataBase } from './mongoDB/mongooseConnection.js';

// Routers
import authRoutes from './routes/authRoutes.js';
import tyoRouter from './routes/tyoRouter.js';

//cors pacage import
app.use(cors());
// This will represent our data in a json format
app.use(express.json());

let notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2022-05-30T17:30:31.098Z',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only Javascript',
        date: '2022-05-30T18:39:34.091Z',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2022-05-30T19:20:14.298Z',
        important: true
    }
];

app.get('/', (request, response) => {
    response.json({ msg: 'Moniruzzaman' });
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/jobs', tyoRouter);
app.use(unknownMiddleware);
app.use(errorHandling);

const PORT = process.env.PORT || 3001;

const dbStart = async () => {
    try {
        await connectDataBase(process.env.MONGOOSE_URL);
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

dbStart();

import mongoose from 'mongoose';

export const connectDataBase = (url) => {
    return mongoose.connect(url);
};

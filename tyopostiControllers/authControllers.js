import User from '../models/ClientModels.js';

const register = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ user });
    } catch (error) {
        next(error);
    }
};

const login = (req, res) => {
    res.send('login client');
};

const updateUser = (req, res) => {
    res.send('Update client');
};

export { login, register, updateUser };

import User from '../models/ClientModels.js';
import { StatusCodes } from 'http-status-codes';

class APIErrorCode extends Error {
    constructor(message) {
        super(message);
        this.httpStatusCodes = StatusCodes.BAD_REQUEST;
    }
}
const register = async (request, response, next) => {
    const { name, email, password } = request.body;
    // Logic for any of them is missing,it will throw error in the controller
    if (!name || !email || !password) {
        throw new APIErrorCode('All values are required');
    }

    const user = await User.create({ name, email, password });
    response.status(StatusCodes.CREATED).json({ user });
};

const login = (req, res) => {
    res.send('login client');
};

const updateUser = (req, res) => {
    res.send('Update client');
};

export { login, register, updateUser };

import User from '../models/ClientModels.js';
import { StatusCodes } from 'http-status-codes';
import { Bad_request_err_code } from '../errors/index.js';

const register = async (request, response, next) => {
    const { name, email, password } = request.body;
    // Logic for any of them is missing,it will throw error in the controller
    if (!name || !email || !password) {
        throw new Bad_request_err_code('All values are required');
    }

    const clientAlreadyExists = await User.findOne({ email });
    if (clientAlreadyExists) {
        throw new Bad_request_err_code('It is a registered email, hence can not use again');
    }

    const user = await User.create({ name, email, password });
    user.createJSToken();
    response.status(StatusCodes.CREATED).json({ user });
};

const login = (req, res) => {
    res.send('login client');
};

const updateUser = (req, res) => {
    res.send('Update client');
};

export { login, register, updateUser };

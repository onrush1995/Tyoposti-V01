import { StatusCodes } from 'http-status-codes';
const errorHandling = (err, req, res, next) => {
    // It will display error message to the console along with postman with the help of Quokka.js extention
    console.log(err.message);
    const errorValue = {
        httpStatusCodes: StatusCodes.INTERNAL_SERVER_ERROR,
        msg: 'Please check and try again!'
    };
    if (err.name === 'ValidationError') {
        errorValue.httpStatusCodes = StatusCodes.BAD_REQUEST;
        //errorValue.msg = err.message;
        errorValue.msg = Object.values(err.errors).map((item) => item.message).join(' | ');
    }

    if (err.code && err.code === 11000) {
        errorValue.httpStatusCodes = StatusCodes.BAD_REQUEST;
        errorValue.msg = `${Object.keys(err.keyValue)} must be distinct `;
    }
    //res.status(errorValue.httpStatusCodes).json({ msg: err });
    res.status(errorValue.httpStatusCodes).json({ msg: errorValue.msg });
};
export default errorHandling;

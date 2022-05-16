import { StatusCodes } from 'http-status-codes';
const errorHandling = (err, req, res, next) => {
    console.log(err);
    const errorValue = {
        httpStatusCodes: StatusCodes.INTERNAL_SERVER_ERROR,
        msg: 'Please check and try again!'
    };
    if (err.name === 'ValidationError') {
        errorValue.httpStatusCodes = StatusCodes.BAD_REQUEST;
        //errorValue.msg = err.message;
        errorValue.msg = Object.values(err.errors).map((item) => item.message).join(' | ');
    }
    //res.status(errorValue.httpStatusCodes).json({ msg: err });
    res.status(errorValue.httpStatusCodes).json({ msg: errorValue.msg });
};

export default errorHandling;

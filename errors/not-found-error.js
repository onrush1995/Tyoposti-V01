import { StatusCodes } from 'http-status-codes';
import APIErrorCode from './APIErrorCode.js';

class Not_found_err_code extends APIErrorCode {
    constructor(message) {
        super(message);
        this.httpStatusCodes = StatusCodes.NOT_FOUND;
    }
}

export default Not_found_err_code;

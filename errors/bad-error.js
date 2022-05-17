import { StatusCodes } from 'http-status-codes';
import APIErrorCode from './APIErrorCode.js';

class Bad_request_err_code extends APIErrorCode {
    constructor(message) {
        super(message);
        this.httpStatusCodes = StatusCodes.BAD_REQUEST;
    }
}

export default Bad_request_err_code;

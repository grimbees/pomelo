import {NextFunction, Request, Response} from 'express';
import HttpException from '../exceptions/HttpException';
import HttpStatus from "http-status-codes";

function errorMiddleware(exception: HttpException, request: Request, response: Response, next: NextFunction) {
    const status = exception.status || HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception.message || 'Something went wrong';
    response
        .status(status)
        .send({
            status,
            message
        })
}

function notFoundMiddleware(request: Request, response: Response) {
    response.status(HttpStatus.NOT_FOUND).send({
        message: "not found"
    });
}

export {errorMiddleware, notFoundMiddleware};

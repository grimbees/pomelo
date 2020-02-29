import {NextFunction, Request, Response} from 'express';
import {check, ValidationError, validationResult} from 'express-validator'

const validate = (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors: { [key: string]: string; }[] = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
    return response.status(422).json({
        message: "Validation error",
        errors: extractedErrors,
    })
};

export default validate;

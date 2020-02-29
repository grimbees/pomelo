import express from "express";
import TransactionService from "../service/transaction";
import {check} from "express-validator";


const service = new TransactionService();

export const  createTransactionRules = () => {
    return [
        check('date', 'Date is invalid').isISO8601(),
        check('currency', 'Currency is mandatory').isString(),
        check('amount', 'Amount must be numeric').isNumeric(),
        check('counterParty', 'Counter party is mandatory').isString()
    ]
};

export const createTransaction = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        service.create(req.body);
        res.send({message: "Successfully created"})
    } catch (err) {
        return next(err)
    }
};

export const findAll = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.json(service.findAll())
};

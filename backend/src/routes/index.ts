import * as core from 'express';
import {createTransaction, createTransactionRules, findAll} from "../controllers/transaction";
import validate from "../middleware/validate";

// routes
const routes = (app: core.Express) => {
    // define a route handler for transactions
    app.post('/transactions', createTransactionRules(), validate, createTransaction);
    app.get('/transactions', findAll);

};

export default routes;

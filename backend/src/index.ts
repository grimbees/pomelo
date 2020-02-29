import express from "express";
import routes from "./routes"
import dotenv from "dotenv";
import cors from "cors"
import * as bodyParser from 'body-parser';
import {errorMiddleware, notFoundMiddleware} from "./middleware/error";

// initialize configuration from .env
dotenv.config();
const app = express();

// set current server port from .env
const port = process.env.SERVER_PORT;

// initialize middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(errorMiddleware);

// initialize routes
routes(app);

app.use(notFoundMiddleware);

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.info(`server started at http://localhost:${port}`);
});

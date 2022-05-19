import express, { Express } from "express";
import cors from "cors";
import routes from "./routes";
import { errorHandler, requestHandler } from "./middlewares";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.use(errorHandler);
app.use(requestHandler);

export default app;

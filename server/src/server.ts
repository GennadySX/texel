/**
 * Project texel
 * @author GennadySX on 17/07/2020
 */

import express, {Request, Response, NextFunction, Router} from "express";
import {Cors} from "@config/Cors";
import routes from "./routes/index"
import {DB} from '@config/db';
import bodyParser from 'body-parser'

//
const app = express();
const router = Router();
//DB.connect();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', router)
router.use("/", Cors);
router.use('/', routes)



export default app;
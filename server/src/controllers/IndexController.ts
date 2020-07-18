/**
 * Project texel
 * @author GennadySX on 17/07/2020
 */
import Controller from "@controllers/Controller";
import RequestModel from '@models/RequestModel';
import {NextFunction, Request, Response} from 'express';
import {Error} from 'mongoose';
import {paramsJson} from '@const/params';
import {exec} from "shelljs"

export default class IndexController extends Controller{
    constructor() {
        super(new RequestModel());
    }



    public async clientRequest(req: Request, res: Response, nextFunction: NextFunction) {
        super.create(req.body, (err: Error, data: object | any) =>
            err ? res.json({status: true, err}) : res.json({status: true, data})
         )
    }


    public async params(req: Request, res: Response, nextFunction: NextFunction) {
        res.json({params: paramsJson.parameters.input})
    }


    public async run(req: Request, res: Response, nextFunction: NextFunction) {
        const version = exec(`sh start.sh ${req.body.input_num} "${req.body.input_text}"`, {silent:true}).stdout;
        console.log('is', version)
        res.json({text: version})
    }

}
/**
 * Project texel
 * @author GennadySX on 17/07/2020
 */
import {NextFunction, Request, Response, Router} from 'express';
const router = Router();

const get = (url:string, controller:any) => router.get(url, (req: Request, res: Response, next: NextFunction) => controller(req, res, next));

const post = (url:string, controller:any) => router.post(url, (req: Request, res: Response, next: NextFunction) => controller(req, res, next));


const put = (url:string, controller:any) => router.put(url, (req: Request, res: Response, next: NextFunction) => controller(req, res, next));

const del = (url:string, controller:any) => router.delete(url, (req: Request, res: Response, next: NextFunction) => controller(req, res, next));


export {
    router,
    get,
    post,
    put,
    del
}

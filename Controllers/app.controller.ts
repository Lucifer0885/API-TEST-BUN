import type { Request, Response } from "express"

export default class AppController {
    static async index(req: Request, res: Response){

        return res.status(200).json({
            response: "200 - OK",
            message: "Check if this works"
        })
    }

    static async notDefinedRoute(req: Request, res: Response) {
        return res.status(400).json({
            response: "400 - Bad Request",
            message: "not defined route"
        })
    }
}
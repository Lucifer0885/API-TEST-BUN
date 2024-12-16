import type { Request, Response } from "express";

export default class ProductController {
    static async displayAll(req: Request, res: Response):Promise<void> {}
    static async create(req: Request, res: Response):Promise<void> {}
    static async show(req: Request, res: Response):Promise<void> {}
    static async update(req: Request, res: Response):Promise<void> {}
    static async delete(req: Request, res: Response):Promise<void> {}
}
import type { Request, Response } from "express";
import Product from "../Database/Schemas/product.schema";

export default class ProductController {
    static async displayAll(req: Request, res: Response) {
        const product = await Product.find()

        return res.json({
            message: "okay",
            product
        })
    }

    static async create(req: Request, res: Response){
        const generatedSlug = req.body.title.toLowerCase().replace(/ /g,"-")

        const product = new Product({
            title: req.body.title,
            description: req.body.description,
            slug: generatedSlug,
            price: req.body.price,
            imageUrl: req.body.imageUrl
        })

        await product.save()

        return res.json({
            message: `The product with name ${req.body.title} was successfully saved`,
            productInfo: product
        })
    }

    static async show(req: Request, res: Response) {
        const slug = req.params.slug
        const product = await Product.find({slug: slug})
        
        return res.status(200).json({
            message: "okay",
            product
        })
    }

    static async update(req: Request, res: Response) {
        try {
            const slug = req.params.slug;
            const product = await Product.findOne({ slug: slug });
    
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
    
            product.title = req.body.title || product.title;
            product.description = req.body.description || product.description;
            product.price = req.body.price || product.price;
            product.imageUrl = req.body.imageUrl || product.imageUrl;
    
            await product.save();
    
            return res.status(200).json({
                message: `The product with slug ${slug} was successfully updated`,
                productInfo: product
            });
        } catch (error) {
            return res.status(500).json({ message: "An error occurred", error });
        }
    }
    
    static async delete(req: Request, res: Response) {
        try {
            const slug = req.params.slug;
            const product = await Product.findOneAndDelete({ slug: slug });
    
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
    
            return res.status(200).json({
                message: `The product with slug ${slug} was successfully deleted`,
                productInfo: product
            });
        } catch (error) {
            return res.status(500).json({ message: "An error occurred", error });
        }
    }
}
import express from "express";
import bodyParser from "body-parser";
import AppController from "../Controllers/app.controller";
import ProductController from "../Controllers/product.controller";

const initRoutes = () => {
    const app = express()
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: false
    }))

    app.listen(3001)
    
    app.get('/', AppController.index)

    app.get('/products', ProductController.displayAll)
    app.post('/products', ProductController.create)
    app.get('/products/:slug', ProductController.show)
    app.put('/products/:id', ProductController.update)
    app.delete('/products/:id', ProductController.delete)

    app.all("*", AppController.notDefinedRoute)

}

export default initRoutes

import express from "express";
import bodyParser from "body-parser";
import AppController from "../Controllers/app.controller";

const initRoutes = () => {
    const app = express()
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: false
    }))

    app.listen(3001)
    
    app.get('/', AppController.index)
    app.all("*", AppController.notDefinedRoute)

}

export default initRoutes

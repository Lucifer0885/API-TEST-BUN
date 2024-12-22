import connectToDB from "./Database/connect.database"
import initRoutes from "./Routes/router"

const init = async () => {
    connectToDB()
    initRoutes()
}


init()
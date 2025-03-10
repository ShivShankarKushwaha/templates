const NotFoundController = require('./NotFound')
const HomeController = require('./HomeController')
module.exports={
    ...NotFoundController,
    ...HomeController
}
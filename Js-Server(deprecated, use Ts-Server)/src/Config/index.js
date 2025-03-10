require('dotenv').config();



module.exports = {
    PORT: process.env.PORT || 5500,
    MONGO_LINK: process.env.MONGO_LINK,
    APP_SECRET: process.env.APP_SECRET,
    
/**
 * @type {'production' | 'development'} NODE_ENV
*/
    NODE_ENV: process.env.NODE_ENV
}
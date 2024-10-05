const express = require('express');
const { NotFoundController, HomeController } = require('../Controllers');
const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get('/',HomeController)

router.get('*',NotFoundController)

module.exports = {MainRoute:router};
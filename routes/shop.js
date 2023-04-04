const path = require('path');

const express = require("express");

const router = express.Router();

const rootDir = require('../util/path');

router.get("/", (req, res, next) => {
    //__dirname contains the path to the current folder of the project
    //here path.join() joins the given strigns to create the path of the html file needed
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));   //path.join() detects the OS and builds path accordingly, like using the correct slash (\ or / ) for windows and unix
});

module.exports = router;
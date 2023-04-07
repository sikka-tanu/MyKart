const path = require('path');

const express = require("express");
const bodyParser = require('body-parser');

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const errorController = require('./controllers/ErrorController');
const app = express();

// 'ejs' is set as templating engine
app.set('view engine', 'ejs');

//pug templating engine will compile our template code to normal html
// app.set('view engine', 'pug');
// Need to set path to views/templates if it's not the default /views folder
app.set('views', 'views');

//This is used to parse the incoming request body
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile( path.join(rootDir, 'views', 'add-product.html'));
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    // products.push({ title: req.body.title });
    res.redirect('/');
    // res.sendFile( path.join(rootDir, 'views', 'shop.html'))
}

exports.getProducts = (req, res, next) => {
    //__dirname contains the path to the current folder of the project
    //here path.join() joins the given strigns to create the path of the html file needed
    
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));   //path.join() detects the OS and builds path accordingly, like using the correct slash (\ or / ) for windows and unix

    const products = Product.fetchAll();

    res.render('shop/product-list', {
        prods: products, 
        pageTitle: 'Shop',
        path: '/'
    });
}
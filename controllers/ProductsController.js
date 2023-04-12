const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile( path.join(rootDir, 'views', 'add-product.html'));
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title, req.body.imageUrl, req.body.description, req.body.price);


    product.save()
    .then( () => {
        res.redirect('/');
    })
    .catch(err => console.log(err));
    // products.push({ title: req.body.title });
    // res.redirect('/');

    // res.sendFile( path.join(rootDir, 'views', 'shop.html'))
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll()
    .then(([rows, fieldData]) => {
        res.render('shop/index', {
            prods: rows, 
            pageTitle: 'Shop',
            path: '/'
        });
    })
    .catch(err => console.log(err));

   
}

exports.getProducts = (req, res, next) => {
    //__dirname contains the path to the current folder of the project
    //here path.join() joins the given strigns to create the path of the html file needed
    
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));   //path.join() detects the OS and builds path accordingly, like using the correct slash (\ or / ) for windows and unix

    Product.fetchAll()
    .then( ([rows]) => {
        res.render('shop/product-list', {
            prods: rows, 
            pageTitle: 'Products',
            path: '/products'
        });
    })
    .catch(err => console.log(err));
   
}

exports.getAdminProducts = (req, res, next) => {
    const products = Product.fetchAll();

    res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
    })
}


exports.getProductById = (req, res, next) => {
    Product.findById(req.params.id)
    .then(([product]) => {
        res.render('shop/product-detail', {
            pageTitle: 'Product Detail',
            path: '/product',
            product: product[0]
        })
    })
    .catch(err => console.log(err));
}
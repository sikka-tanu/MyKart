const db = require('../util/database');

const products = [];

class Product {
    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;

    }

    save(){
        return db.execute('INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)' , [this.title, this.price, this.description, this.imageUrl]);
    }

    static fetchAll(){
        return db.execute('SELECT * FROM products');
    }

    static findById(id){
        return db.execute('SELECT * FROM products WHERE id = ?', [id]);
    }
}

module.exports = Product;
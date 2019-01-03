const Models = require('../models/index');

module.exports = {
    index: function(req, res) {
        Models.product.findAll().then(function(products) {
            console.log("product", products);
            res.render('index', { data: products, title: 'ShopEasy - ECommerce Solution' });

        });
    },

    contact: function(req, res) {
        //const ss = req.body;
        //Models.user(ss).then()
        res.render('contact', { title: 'ShopEasy - Contact Us' });
    },

    faq: function(req, res) {
        res.render('faq', { faq: 'FREQUENTLY ASKED QUESTIONS' });
    },
    addcategory: function(req, res) {
        const cat = req.body;
        console.log(req.body, cat.name);
        Models.categories.findOne({ where: { category_name: cat.name } }).then(function(category) {
            // console.log(category);
            if (category) return done(null, false, req.flash('AddCategoryMessage', 'That Category Already Exist'));
            // console.log(category, req.body);

            console.log("user data request body", cat);
            Models.categories.create({
                category_name: cat.name
            }).then(function(result) {
                console.log("Category Added");
                return done(null, category);
            })
            // .catch(function(errors) {
            //     return done(null, false, req.flash('AddCategoryMessage', errors));
            // });
        })
        res.render('addcategory', { title: 'Add category' });
    },
    products: function(req, res) {
        Models.product.findAll().then(function(products) {
            console.log("product", products);
            res.render('products', { data: products, title: 'Admin Product List' });

        });
    },

    product: function(req, res) {
        // Models.product.findAll({ limit: 1 }).then(function(products) {
        // console.log("product", products);
        res.render('product', { title: 'ShopEasy Product' });
    },
    cart: function(req, res){
        res.render('cart', {title: 'ShopEasy Cart' });
    }

    // addproduct: function(req, res) {
    //     res.render('addproduct', { title: 'Product' });
    // }

}
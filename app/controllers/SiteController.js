const Models = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = {
    index: function(req, res) {
        Models.product.findAll().then(function(products) {
            console.log("product", products);
            res.render('index', { data: products, title: 'ShopEasy - ECommerce Solution' });

        });
    },
    editproduct: function(req, res) {
        // Models.categories.findOne() // getting dynamic data object

        const id = req.params.id;
        const pro = req.body;

        console.log(req.params.id);
        Models.product.update({
             
             title: pro.title,
               number: pro.number,
               category_id: pro.category_id,
               unit_price: pro.price,
               size: pro.size,
               color: pro.color,
               weight: pro.weight


        }, { where: { id: id } }).then(function() {
            console.log("updated product");

            Models.product.findByPk(id).then(function(category) {
                console.log(category);
                res.redirect("/products");
            })


        })
        // res.render('addcategory', { title: 'Add category' });
    },
    getproduct: function(req, res) {
        const id = req.params.id;
        console.log(req.params);
        Models.product.findByPk(id).then(function(category) {
            console.log(category);
            res.render('editProduct', { title: 'Category added !!', product: category });

        })
        // res.render('addcategory', { title: 'Add category' });
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
            if (category) return res.render('addcategory', { title: 'That Category Already Exist' });
            // console.log(category, req.body);
            console.log("user data request body", cat);
            Models.categories.create({
                category_name: cat.name,
                parent: cat.parent
            }).then(function(result) {
                console.log("Category Added");
                console.log(cat.parent);
                res.render('addcategory', { title: 'Category added !!' });
            })
            // .catch(function(errors) {
            //     return done(null, false, req.flash('AddCategoryMessage', errors));
            // });
        })
        // res.render('addcategory', { title: 'Add category' });
    },
    editcategory: function(req, res) {
        // Models.categories.findOne() // getting dynamic data object

        const id = req.params.id;
        const cat = req.body;

        console.log(req.params.id);
        Models.categories.update({
            category_name: cat.name
        }, { where: { id: id } }).then(function() {
            console.log("updated category");

            Models.categories.findByPk(id).then(function(category) {
                console.log(category);
                res.redirect("/categories");
            })

              Models.categories.findByPk(id).then(function(category) {
                console.log(category);
                res.redirect("/categories", {result: category});
            })


        })
        // res.render('addcategory', { title: 'Add category' });
    },
    delcategory: function(req, res) {
        const id = req.params.id;
        Models.categories.destroy({ where: { id: id } }).then(function() {
            console.log("deleted category");
            res.redirect("/categories");
        })
    },
    delproduct: function(req, res) {
        const id = req.params.id;
        Models.product.destroy({ where: { id: id } }).then(function() {
            console.log("deleted category");
            res.redirect("/products");
        })
    },
    search: function(req, res) {
      

        const keyword = req.query.searchQuery; //req.query.nameattribute
        // console.log("query string", keyword);
        Models.product.findAll({ //Select * from product
            where: { //where
                title: {// title
                    [Op.like]: '%' + keyword + '%'//like '%' + keyword 
                }
            }
        }).then(function(result) {
            console.log("search", result);
            res.render('search', { title: 'Search', result: result });
        })
    },
    addcart: function(req, res) {
        req.session.cart = req.body;
        res.render('cart', { title: 'Category deleted !!', cart: req.session.cart })
    },
    getcart: function(req, res) {
        res.render('cart', { title: 'Category deleted !!', cart: req.session.cart })
    },
    getcategory: function(req, res) {
        const id = req.query.id;
        console.log(req.query);
        Models.categories.findOne(id).then(function(category) {
            console.log(category);
            res.render('editCategory', { title: 'Category added !!', category: category });

        })
        // res.render('addcategory', { title: 'Add category' });
    },
    products: function(req, res) {
        Models.product.findAll().then(function(products) {
            console.log("product", products);
            res.render('products', { data: products, title: 'Admin Product List' });

        });
    },

    categories: function(req, res) {
        Models.categories.findAll().then(function(categories) {
            
            res.render('categories', { data: categories, title: 'Admin categories List' });

        });
    },    

    product: function(req, res) {
        // Models.product.findAll({ limit: 1 }).then(function(products) {
        // console.log("product", products);
        res.render('product', { title: 'ShopEasy Product' });
    },
    cart: function(req, res) {
        res.render('cart', { title: 'ShopEasy Cart' });
    }

    // addproduct: function(req, res) {
    //     res.render('addproduct', { title: 'Product' });
    // }

}
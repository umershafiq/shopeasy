const Models = require('../models/index');
var Sequelize = require('sequelize');
// const sequelize = Sequelize.Op;
module.exports = {
    hello: function(req, res) {
        res.render('index', { title: 'Quick MVC' });
    },
    login: function(req, res) {
        res.render('login', { title: 'Login Page' });
    },
    dashboard: function(req, res) {
        // Models.product.findAll({
        //     attributes: [
        //         sequelize.fn('COUNT')
        //     ]

        // }).then(function(products) {
        //     console.log("product", products);
        res.render('dashboard', { title: 'ShopEasy - Admin Dashboard' });

        // });
    },
    signup: function(req, res) {
        res.render('signup', { title: 'ShopEasy - User Registration' });
    },
    addproduct: function(req, res) {
        const pro = req.body;
        // console.log(req.body, pro.title);
        Models.product.findOne({ where: { title: pro.title } }).then(function(product) {
            // console.log(category);
            if (product) return res.render('addproduct', { title: 'That Category Already Exist' });
            // console.log(category, req.body);
            console.log("user data request body", pro);
            Models.product.create({
               title: pro.title,
               number: pro.number,
               category_id: pro.category_id,
               unit_price: pro.price,
               size: pro.size,
               color: pro.color,
               weight: pro.weight
            }).then(function(result) {
                console.log("Category Added");
                // console.log(cat.parent);
                res.render('addproduct', { title: 'Category added !!' });
            })
            // .catch(function(errors) {
            //     return done(null, false, req.flash('AddCategoryMessage', errors));
            // });
        })
        // res.render('addcategory', { title: 'Add category' });
    },
    orders_in_process: function(req, res) {
        Models.orders.findAll({ where: { status: 'in process' } }).then(function(products) {
            // console.log("product", products);
            res.render('orders_in_process', { data: products, title: 'Orders In process' });

        });
    },
    orders_completed: function(req, res) {
        Models.orders.findAll({ where: { status: 'completed' } }).then(function(products) {
            // console.log("product", products);
            res.render('orders_completed', { data: products, title: 'Orders Completed' });

        });
    },
    customerlogin: function(req, res) {
        res.render('customerlogin', { title: ' customer login' });
    }

}
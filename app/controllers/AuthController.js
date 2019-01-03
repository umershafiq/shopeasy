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
        res.render('addproduct', { title: 'Product' });
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
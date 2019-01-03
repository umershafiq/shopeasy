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
            res.render('dashboard', {title: 'ShopEasy - Admin Dashboard' });

        // });
    },
    signup: function(req, res) {
        res.render('signup', { title: 'ShopEasy - User Registration' });
    },
    addproduct: function(req, res) {
        res.render('addproduct', { title: 'Product' });
    }

}
const AuthController = require('./controllers/AuthController');
const SiteConroller = require('./controllers/SiteController');
module.exports = function (app, passport) {
	app.get('/login', AuthController.login);
	app.get('/dashboard', _authenticationMiddleware , AuthController.dashboard);
	app.post('/login', passport.authenticate('local', {
		successRedirect : '/dashboard', // redirect to the secure dashboard section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : 	true // allow flash messages
	}));		//views		//source control
	app.get('/signup', AuthController.signup);
	app.post('/signup',passport.authenticate('local-signup', {
        successRedirect : '/dashboard', // redirect to the secure dashboard section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));//implement passport signup strategy
	app.get('/', SiteConroller.index);
	app.get('/contact', SiteConroller.contact);
	app.post('/contact', SiteConroller.contact);
	app.get('/faq', SiteConroller.faq);
	// Endpoint to logout
	app.get('/logout', function (req, res) {
		req.logout();
		//res.send(null);
		return res.redirect('/login');
	});
	app.get('/addcategory', SiteConroller.addcategory);
	app.post('/addcategory', SiteConroller.addcategory);
	app.get('/products', SiteConroller.products);
	// app.get('/addproduct', SiteConroller.addproduct);
	app.get('/addproduct', _authenticationMiddleware , AuthController.addproduct);
	app.post('/addproduct', _authenticationMiddleware , AuthController.addproduct);

	app.get('/product', SiteConroller.product);
	app.get('/categories', SiteConroller.categories);
	app.get('/orders_in_process',  _authenticationMiddleware , AuthController.orders_in_process);
	app.get('/orders_completed',  _authenticationMiddleware , AuthController.orders_completed);
	app.get('/cart', SiteConroller.cart);
	app.get('/edit/category/:id', SiteConroller.getcategory);
	app.get('/delete/category/:id', SiteConroller.delcategory);
	app.post('/edit/category/:id', SiteConroller.editcategory);
	app.get('/edit/product/:id', SiteConroller.getproduct);
	app.post('/edit/product/:id', SiteConroller.editproduct);
	app.get('/delete/product/:id', SiteConroller.delproduct);
	app.post('/add/cart', SiteConroller.addcart);
	
	app.get('/search', SiteConroller.search);


	
}

function _authenticationMiddleware(req, res, next) {
			console.log('done', req.user);	
			if (req.isAuthenticated()) {
				return next()
			}
			res.redirect('/login')
}
// function _authenticationMiddleware(req, res, next) {
// 			console.log('done', req.user);
			
// 			// console.log(req);
// 			if (req.isAuthenticated()) {
// 				if(req.user ===1 && req.path === '/dashboard'  || ) return next()
// 				// else if(req.user !==1 && req.path === '/home') return next();
// 			}
// 			res.redirect('/login')
// }


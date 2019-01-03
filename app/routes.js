const AuthController = require('./controllers/AuthController');
const SiteConroller = require('./controllers/SiteController');
module.exports = function (app, passport) {
	app.get('/login', AuthController.login);
	app.get('/dashboard', _authenticationMiddleware , AuthController.dashboard);
	app.post('/login', passport.authenticate('local', {
		successRedirect : '/dashboard', // redirect to the secure dashboard section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	app.get('/customerlogin', AuthController.customerlogin);
	app.get('/dashboard', _authenticationmiddleware , AuthController.dashboard);
	app.post('/customerlogin', passport.authenticate('local', {
		successRedirect : '/dashboard', // redirect to the secure dashboard section
		failureRedirect : '/customerlogin', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// app.get('/customerlogin', AuthController.customerlogin);
	// app.get('/dashboard', _authenticationMiddleware , AuthController.dashboard);
	// app.post('/customerlogin', passport.authenticate('local', {
	// 	successRedirect : '/dashboard', // redirect to the secure dashboard section
	// 	failureRedirect : '/customerlogin', // redirect back to the signup page if there is an error
	// 	failureFlash : true // allow flash messages
	// }));

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
	app.get('/product', SiteConroller.product);
	app.get('/orders_in_process',  _authenticationMiddleware , AuthController.orders_in_process);
	app.get('/orders_completed',  _authenticationMiddleware , AuthController.orders_completed);
	app.get('/cart', SiteConroller.cart);
	
}

function _authenticationMiddleware(req, res, next) {
	
			if (req.isAuthenticated()) {
				return next()
			}
			res.redirect('/login')

}
function _authenticationmiddleware(req, res, next) {
	
			if (req.isAuthenticated()) {
				return next()
			}
			res.redirect('/customerlogin')

}



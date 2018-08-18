/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	login: function (req, res) {
		var db = sails.getDatastore().manager;

		var email = req.param('email');
		var password = req.param('password');
		var user = User.count();
		console.log(user);
		
		res.redirect('/welcome');
	},
	register: function (req, res) {
		var db = sails.getDatastore().manager;

		var email = req.param('email');
		var password = req.param('password');
		var password_confirm = req.param('password_confirm');
		db.collection('users').insertOne({email,password});
		res.redirect('/');	
	}
};


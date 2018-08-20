/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


	login: async function (req, res) {
		var email = req.param('email');
		var password = req.param('password');

		User.findOne({email: email})
		.exec(function(err, user) {
			if (err) return res.end('404', 'error');
			
			if (user) {
				if (password == user.password) {
					return res.redirect('/');
				} else {
					return res.end('404', 'error');
				}
				
			} 
		});
	},

	register: async function (req, res) {
		var email = req.param('email');
		var password = req.param('password');
		var password_confirm = req.param('password_confirm');

		User.findOrCreate({email: email}, {email: email, password: password})
		.exec(function(err, user, wasCreated) {
			if (err) {
				var json = {
					'status': 400,
					'error': 'field empty'
				};
				return res.view('/pages/register', json);
			}
			// if (err) return res.serverError(err);
		});

		return res.redirect('/');
		// var user = await User.find({email: email});
		// console.log(user);
		// if (user) {
		// 	res.status(406).send('User exist');
		// } else {
			
		// }
	}
		
	

	// 	Users.create({email, password}).exec((err, user)=>{
	// 	  if (err) {
	// 	    return res.serverError(err);
	// 	  }

	// 	  // would you look at all those zookeepers?
	// 	  console.log(user);
	// 	  return res.json(user);
	// 	});
		
	// },
	// register: function (req, res) {
		
	// 	// var db = sails.getDatastore().manager;

	// 	// var email = req.param('email');
	// 	// var password = req.param('password');
	// 	// var password_confirm = req.param('password_confirm');
	// 	// db.collection('users').insertOne({email,password});

	// 	res.redirect('/');	
	// }
};


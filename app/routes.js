//login code was referenced from
//https://scotch.io/tutorials/easy-node-authentication-setup-and-local

	//required to transform
	var xslt_transform = require('../engine/xslt_transform.js'),
	            tryxml = require('../engine/xml_save.js'),
	            fs = require('fs');

module.exports = function(app, passport) {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // get the xml sheet for the rss feed

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var xslt_transform = require('../engine/xslt_transform.js');//script to apply transformations to the xml file
    		//XSLT return to the user ON REQUEST
	app.get('/rss', isLogged, function(req, res) {
	var paths = './rss/rss.xml';
	var transform = './rss/highScore.xsl';
	res.send(xslt_transform(transform,paths));
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        app.get('/', isLogged, function(req, res, next){
        res.render('main.ejs',{
			user : req.user // get the user out of session and pass to template
		});
    });
    
    // =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
//MAIN CENTER DIV LOADS
    			//RETURNS cardGame1
	app.get('/card_game1', isLogged, function(req, res) {

		res.render('cardGame1.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});
    app.get('/game-list', isLogged, function(req, res){
        res.render('Game-list.ejs');
    });
    //gets chat div from views
    app.get('/messages', isLogged, function(req, res){
        res.render('messages.ejs');
    });
    //gets form from views
    app.get('/form' , isLogged, function(req, res){
        res.render('form.ejs');
    });
    

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    //STARTING TO GENERATE CODE FOR ONE PAGE CONCEPT
    app.get('/one', isLogged, function(req, res) {
                   res.render('testLogin.ejs', {
                messagelog: req.flash('loginMessage'),
                messagesign: req.flash('signupMessage'),
            condition : 'logged' // get the user out of session and pass to template, in his case the main index page for the app
        });
    });
    //HANDLING LOGIN
    
    app.post('/login_one', passport.authenticate('local-login', {
        successRedirect : '/logged', // redirect to the secure profile section
        failureRedirect : '/login_one', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    
    
        app.get('/login_one', function(req, res) {
           res.render('testLogin.ejs', {
                messagelog: req.flash('loginMessage'),
                messagesign: req.flash('signupMessage'),
            condition : 'login' // get the user out of session and pass to template, in his case the main index page for the app
        });
    });
    //HANDLING SINGUP
        app.post('/signup_one', passport.authenticate('local-signup',{
        successRedirect : '/logged',
        failureRedirect : '/signup_one',
        failureFlash : true
    }));
    
    app.get('/signup_one', function(req, res) {
           res.render('testLogin.ejs', {
                messagelog: req.flash('loginMessage'),
                messagesign: req.flash('signupMessage'),
            condition : 'signup' // get the user out of session and pass to template, in his case the main index page for the app
        });
        
        
    });
    
    app.get('/logged',isLogged, function(req,res){
        res.render('main.ejs',{
			user : req.user // get the user out of session and pass to template
		});
    });
    




		
			//XML HANDLING 
	
	app.post('/sendMessageToUser', function(req, res) {

    var message = req.body.message;
    console.log(message);
    var paths_sender = './xmlStorage/'+req.user.local.email+'.xml';
    var paths_reciever = './xmlStorage/'+message.user+'.xml';

    console.log(paths_sender);
    console.log(paths_reciever);

        fs.exists(paths_reciever, function(exists){
        if (exists) {
		
    tryxml('sent',        paths_sender,     message.to_user,            message.message);
    tryxml('recieved',    paths_reciever,   req.user.local.email,       message.message);
    res.send('success');
         }
          else{
		res.send('noFile');

}

}); 
});
			//XSLT return to the user ON REQUEST
		app.get('/sent', isLogged, function(req, res) {
		var paths = './xmlStorage/'+req.user.local.email+'.xml';
		var transform = './xsltStorage/sent.xsl';
		res.send(xslt_transform(transform,paths));

	});
	
			app.get('/recieved', isLogged, function(req, res) {
		var paths = './xmlStorage/'+req.user.local.email+'.xml';
		var transform = './xsltStorage/recieved.xsl';
		res.send(xslt_transform(transform,paths));

		
	});
			//RETURNING SENDING FORM
			
	app.get('/sendMessage', isLogged, function(req, res) {
		res.render('sendMessage.ejs');
	});


 
};










function isLogged(req, res, next){
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
           res.render('testLogin.ejs', {
                messagelog: req.flash('loginMessage'),
                messagesign: req.flash('signupMessage'),
            condition : 'login' // get the user out of session and pass to template, in his case the main index page for the app
        });
}


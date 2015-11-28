//login code was referenced from
//https://scotch.io/tutorials/easy-node-authentication-setup-and-local
module.exports = function(app, passport) {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // get the xml sheet for the rss feed
    app.get('/rss', isLogged, function(req, res){
        res.render('rss.ejs');
    });
        app.get('/', isLogged, function(req, res, next){
        res.render('main.ejs');
    });
    
    // =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
//MAIN CENTER DIV LOADS
    app.get('/game-list', isLogged, function(req, res){
        res.render('Game-list.ejs');
    });
    //gets chat div from views
    app.get('/chat', isLogged, function(req, res){
        res.render('chat.ejs');
    });
    
    //gets form from views
    app.get('/form' , isLogged, function(req, res){
        res.render('form.ejs');
    })

    
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
        res.render('main.ejs');
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


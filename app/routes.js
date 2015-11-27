//login code was referenced from
//https://scotch.io/tutorials/easy-node-authentication-setup-and-local
module.exports = function(app, passport) {

        //ADDING ROOT FOR PROFILE TEST LOAD
        app.get('/profile', isLoggedIn, function(req, res) {
            res.render('profile.ejs');
            });

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
        });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
        });

    // process the login form
    // app.post('/login', do all our passport stuff here);

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });
    app.get('/Chat', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('Welcome.ejs', { message: req.flash('signupMessage') });
    });


    // process the signup form
    app.post('/signup', passport.authenticate('local-signup',{
        successRedirect : '/index',
        failureRedirect : '/signup',
        failureFlash : true
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/index', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/index', isLoggedIn, function(req, res) {
        res.render('index.ejs', {
            user : req.user // get the user out of session and pass to template, in his case the main index page for the app
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    
    //game page
    app.get('/chat', function(req,res){
        res.render('index.ejs');
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // get the xml sheet for the rss feed
    app.get('/rss/rss.xml', function(req, res, next){
        res.render('rss.xml')
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
        res.send('Logged');
    });
    
    
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
           res.render('index.ejs', {
            conditio : req.user // get the user out of session and pass to template, in his case the main index page for the app
        });
}



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


/*jslint node: true */
'use strict';

//dependencies
var config = require('./config'),
    express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    mongoStore = require('connect-mongo')(session),
    http = require('http'),
    path = require('path'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    helmet = require('helmet'),
    csrf = require('csurf'),
    qt   = require('quickthumb'),
    fs = require('fs-extra'),
    moment = require('moment'),
    url1,
    date;

//create express app
var app = express();



var filog = '/home/jlr/logOG';


  function actu(date){
	  var now =moment(date).add(0, 'hours').format('DD-MM-YYYY à HH:mm');///// remettre 6 dans le serveur
     return ('le'+' '+now);
  }

//keep reference to config
app.config = config;

//setup the web server
app.server = http.createServer(app);



//setup socket.io

app.io = require('socket.io').listen(app.server);

//setup mongoose
app.db = mongoose.createConnection(config.mongodb.uri);
app.db.on('error', console.error.bind(console, 'mongoose connection error: '));
app.db.once('open', function () {
   console.log('Connecté à :'+config.mongodb.uri);
});



//////////////////login
 
 passport.serializeUser(function(user, done) {
     done(null, user._id);
     console.log('objet user de passport au login:');
     console.log(user);
     
     date=new Date();
 	 console.log("passport usernamme  login ="+ user.username+" "+actu(date)); 
     var login = "Login de :"+ user.username+" "+actu(date)+"\n";
     
 	 fs.appendFileSync(filog,'_________________________________'+'\n');
 	 fs.appendFileSync(filog,login);
 	 
  });

///////////jardin js


  app.get('/account/jardin1/', function(req, res){
	res.sendFile(__dirname + '/views/account/jardin1/index1.html');	
});

  app.get('/account/jardin2/', function(req, res){
	res.sendFile(__dirname + '/views/account/jardin2/index2.html');	
});
////////// GEOLOCALISATION
  app.get('/account/map/', function(req, res){
	res.sendFile(__dirname + '/views/account/map/index.html');	
});

////////////prepa socket io


 function   pageWeb(url){  
        url = url.split('/'); 
        var url1= url[url.length - 2];     
        return url1;           
        }   


    
app.io.sockets.on('connection', function(socket){
   

/////////////////////////////////////////////////////	
//////////////////////// jardin   ////////////////////
///////////////////////////////////////////////////////

   var dirJardata = '/home/jlr/jardata/';
   var jardispo =[];
   
      jardin = require('./views/account/index').jaruser();
     if(jardin)
     {
	 var filuser1,filuser2,jardin,jaruser,mailuser,jardinweb,jarcon;	 
      jaruser = jardin.pseudo;
      mailuser = jardin.mailuser;
      jardinweb = jardin.jardinweb;
      date= new Date();
       jardispo.push({'user':jaruser,'jardin':jardinweb[0]});

      
    console.log("jardinier :"+jaruser + "jardinweb :"+jardinweb+"e-mail :"+mailuser);
     jarcon= jaruser+" " + "s'est connecté  à :"+jardinweb+" "+" à :"+actu(date)+" " +" son e-mail :"+mailuser+" "+"avec l'id :"+socket.id+"\n"
     fs.appendFileSync(filog,jarcon);
    
     if(jardinweb)
       {
     /////// envoi d'un fichier init s'il y a un jardin dispo
	var fijarinit = dirJardata+'fijarinit';
	var jardinit = JSON.parse(fs.readFileSync(fijarinit, 'utf8'));
	socket.emit('fijar', jardinit,"envoi de fijarinit par le serveur à :"+new Date());
      }
  /////////////reservation des fichiers jardins 
      socket.on('jardin', function(data, err) {
			if (err) {
				console.log(err);
		} else {				
				var num_jardin = data;
				console.log("jardin de socket :"+num_jardin);
				
         if(num_jardin=="jardin1")
			{
				 filuser1 =dirJardata+'gardenuser/jardin_'+jaruser;
				 console.log("jardin :"+filuser1);
			   fs.exists(filuser1, function(exists) {
				   if (exists) {
				   console.log("OK");
				   console.log("Il y a un fichier jardin pour :"+jaruser);
					} else {    
					console.log("Il n'y a pas de fichier jardin pour :"+jaruser);
					////// copier jardinit filuser1
					fs.writeFile( filuser1, JSON.stringify(jardinit), "utf8" ); 
					}
				});		
			}
			
         if(num_jardin=="jardin2")
			{
				 filuser2 =dirJardata+'gardenuser/jardin_'+jaruser;
				 console.log("jardin :"+filuser2);
			   fs.exists(filuser2, function(exists) {
				   if (exists) {
				   console.log("OK");
				   console.log("Il y a un fichier jardin pour :"+jaruser);
					} else {    
					console.log("Il n'y a pas de fichier jardin pour :"+jaruser);
					////// copier jardinit filuser1
					fs.writeFile( filuser2, JSON.stringify(jardinit), "utf8" ); 
					}
				});		
			}			
		  	
		}
	  });
    }

	  //////////// sur demande envoi du dernier fichier temp de user
      	socket.on('rappel1', function(data, err) {
		 var tempobj1 = JSON.parse(fs.readFileSync(filuser1, 'utf8'));
		 socket.emit('temp1', tempobj1,"envoi de  filuser1 par le serveur à :"+new Date());
	    });
   
     	socket.on('rappel2', function(data, err) {
		 var tempobj2 = JSON.parse(fs.readFileSync(filuser2, 'utf8'));
		 socket.emit('temp2', tempobj2,"envoi de  filuser2 par le serveur à :"+new Date());
	    });
    
    //////////// enregistrement des modifs dans un fichier temp
    //var fijartemp = __dirname +'/jardata/fijartemp.json'
    
	socket.on('modifijar1', function(data, err) {
		fs.writeFile(filuser1, JSON.stringify(data), function(err) {
			if (err) {
				console.log(err);
			} else {
				console.log("filuser1 sauvegardé sur le serveur à :"+new Date());
			}
		});
	});
 
	socket.on('modifijar2', function(data, err) {
		fs.writeFile(filuser2, JSON.stringify(data), function(err) {
			if (err) {
				console.log(err);
			} else {
				console.log("filuser2 sauvegardé sur le serveur à :"+new Date());
			}
		});
	});

      
////////// fin jardins

  ////////////  DECONNECTIONS  /////////////////////
  ///////////////////////////////////////////////
  
	socket.on('disconnect', function(){

//////////// remise du jardin libéré dans jarweb de garden/index.js
    
         var jarsoc = pageWeb(socket.handshake.headers.referer);
         console.log("deconnexion de quelle page ??? :"+jarsoc);
        
         /////// si jarnum est un chiffre c'est un jardin
        var jarnum = parseInt(jarsoc.slice(-1));
        console.log("jarnum dans app :"+jarnum);
        console.log("jardispo :"+JSON.stringify(jardispo)+jarsoc);
       var found = jardispo.filter(function(item) { return item.jardin === jarsoc;});
        console.log('found', found[0]);
         if(jarnum) 
             {
			 var tab = require('./views/account/index');
			 tab.jarwebinit(jarnum,found[0].user);
			 }

	  
       /////////// enregistrement des deconnections 
       console.log("Déconnexion de quelqu'un :"+socket.handshake.headers.referer+' '+"id   :"+socket.handshake.time);
       var date = new Date();
       var decon = "Déconnection de :"+found[0].user+" "+"de :"+socket.handshake.headers.referer+' '+"id :"+socket.id+" "+actu(date)+'\n'; 

       fs.appendFileSync(filog,decon);
       fs.appendFileSync(filog,"--------------------"+'\n');
		   
	});
		
});


/////////// fin socket io
//////////////////

//config data models
require('./models')(app, mongoose);

//settings
app.disable('x-powered-by');
app.set('port', config.port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//middleware
app.use(require('morgan')('dev'));
app.use(require('compression')());
app.use(require('serve-static')(path.join(__dirname, 'public')));
app.use(require('method-override')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(config.cryptoKey));
app.use(session({	
  resave: true,
  saveUninitialized: true,
  secret: config.cryptoKey,
  //secret:'secret',
  key: 'connect.sid',
  //store: new mongoStore({ url: config.mongodb.uri })
}));

app.sessionStore = new mongoStore({ url: config.mongodb.uri });
app.use(passport.initialize());
app.use(passport.session());
app.use(csrf({ cookie: { signed: true } }));
helmet(app);

 var localUser={};
//response locals
app.use(function(req, res, next) { 
  res.cookie('_csrfToken', req.csrfToken());
  res.locals.user = {};
  res.locals.user.defaultReturnUrl = req.user && req.user.defaultReturnUrl();
  res.locals.user.username = req.user && req.user.username; //// ???? réutilisation
  localUser = res.locals.user.username;
  //console.log("User venant de app.use ??? :"+localUser);
  //peut-on récupérer aussi account??? lat et lng du jardin
  localUser = res.locals.user;
  next();
});


//global locals
app.locals.projectName = app.config.projectName;
app.locals.copyrightYear = new Date().getFullYear();
app.locals.copyrightName = app.config.companyName;
app.locals.cacheBreaker = 'br34k-01';

//setup passport
require('./passport')(app, passport, express,config);

//setup routes
require('./routes')(app, passport);

//custom (friendly) error handler
app.use(require('./views/http/index').http500);

//setup utilities
app.utility = {};
app.utility.sendmail = require('./util/sendmail');
app.utility.slugify = require('./util/slugify');
app.utility.workflow = require('./util/workflow');

//var host = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

app.server.listen(app.config.port,  function(){
  console.log(new Date() + 'Server is running on port ' + config.port);
  
});


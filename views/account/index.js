'use strict';
 var outcome = {},
      jarweb =['jardin1','jardin2'],
      jardinuser,
      num=0,
      jarwebuser,
      transferapp={},
      pseudo,
      tabuser=[]; ///////TODO le tableau tabuser ne se vide pas !!!!!!!
 
 
var renderSettings = function(req, res, next) {
   
  var getUserData = function(callback) {
    req.app.db.models.User.findById(req.user.id, 'username email').exec(function(err, user) {
      if (err) {
        callback(err, null);
      }     
      outcome.user = user;
      pseudo =  outcome.user.username
      
    //////////////// special garden
     transferapp.mailuser=outcome.user.email;
     transferapp.pseudo = pseudo;
     
     if(tabuser.indexOf(pseudo)==-1)
     {tabuser.push(pseudo); 

              if(jarweb.length>0 )
              {
		      jarwebuser ='/account/'+jarweb.slice(0,1)+'/'; //// à vérifier
		      transferapp.jardinweb=jarweb.slice(0,1);
		       jarweb.splice(0,1); //// à vérifier
		         }else{
					num=1; 
				 }          
	}                     
     console.log("transferapp après log :"+JSON.stringify(transferapp))
     console.log("jarweb après log :"+JSON.stringify(jarweb))
     console.log("num :"+num);
     
         res.render('account/index',{ alert : num, jaruser : "Jardin web de"+" "+pseudo+'.',
		 jardinuser : jarwebuser ,user : pseudo});

	 
      ////////////////////////////
        
      return callback(null, 'done');
    });
  };
 
         
  var asyncFinally = function(err, results) {
    if (err) {
      return next(err);
    }
  };
 

  require('async').parallel([getUserData], asyncFinally);
  
};



exports.init = function(req, res, next){
  renderSettings(req, res, next);
};

/////////////// special garden
exports.jaruser=function(){
	if(transferapp.jardinweb)
   return(transferapp);
   transferapp={};
};

       

exports.jarwebinit= function(jarnum,user) {
console.log("Avant de remettre le jardin dans index.js de /views/account "+JSON.stringify(jarweb)+"jarnum ="+jarnum);
 var jarad = "jardin"+jarnum;
 console.log("jarad :"+jarad);
 console.log("tableau des jardins disponibles avant decon:"+JSON.stringify(jarweb)+"index jarad :"+jarweb.indexOf(jarad));
 
  if(jarnum && jarweb.indexOf(jarad)==-1)
  {
  jarweb.push(jarad);
  console.log("tableau des jardins disponibles après decon:"+JSON.stringify(jarweb));
  
  ///////// TODO oter l'user de tabuser ici
  console.log(user,"oté de tabuser");
  tabuser.splice(tabuser.indexOf(user),1);
  console.log("tabuser après decon :"+JSON.stringify(tabuser)); 
  }
};

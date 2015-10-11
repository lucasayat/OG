'use strict';


exports.init = function(req, res){
  /////////
  //var del = require('../account/garden/index')
  //del.remjar();
  ///////////
 
  
  req.logout();
  res.redirect('/');
  
};

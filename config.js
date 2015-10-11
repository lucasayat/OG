'use strict';
///////

//////////
exports.port = process.env.PORT || 8080;
exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/ogust'
};
exports.companyName = 'OpenGarden';
exports.projectName = 'OpenGarden';
exports.systemEmail = 'jlr@reuillon.org';
exports.cryptoKey = 'k3yb0ardc4t';
exports.loginAttempts = {
  forIp: 50,
  forIpAndUser: 7,
  logExpiration: '20m'
};
exports.requireAccountVerification = false;
exports.smtp = {
  from: {
    name: process.env.SMTP_FROM_NAME || exports.projectName +'_website',
    address: process.env.SMTP_FROM_ADDRESS || 'jl@reuillon.org'
  },
  credentials: {
    user: process.env.SMTP_USERNAME || 'jl',
    password: process.env.SMTP_PASSWORD || 'stq=4voi',
    host: process.env.SMTP_HOST || 'smtp.reuillon.org',
    tls: true
  }
};

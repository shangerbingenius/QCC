
/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  ,util = require('util');

var app = module.exports = express.createServer();

/**
 * Configuration
 */
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

/**
 * middlewares
 */
function checkLogin (req, res, next) {
  //chech if user has already login
  if (req.session.user) {
    next();
  } else {
    res.redirect('/');//否则，页面重定位，不执行下面路由
  }
} 

/**
 * view helpers
 * static and dynamic
 */
app.helpers({
  inspect: function(obj){
    console.log("obj is ",obj);
    return util.inspect(obj,true);
  }
});

app.dynamicHelpers({
  headers:function(req,res){
    console.log("headers is ",req.headers);
    return req.headers;
  }
});

/**
 * Routes
 */
app.get('/', routes.index);
app.get('/user/*',checkLogin);
app.get('/user/:username',function(req, res){
  console.log("/user/:username");
  res.send('user:'+ req.params.username);
});


/**
 *  Start the server
 */
app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

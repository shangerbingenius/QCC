var http = require('http');
var querystring = require('querystring');
var url=require('url');
var util=require('util');
/**
 * httpserver
 */
http.createServer(function(req, res){
    var post ="";
    req.on('data',function(chunck){
        post += chunck;
        console.log(JSON.parse(chunck));
        console.log(JSON.parse(chunck).name);
    });
    req.on('end',function(){
        post=querystring.parse(post);
        res.end(util.inspect(post, true));
    });
}).listen(8080);



var http = require('http');
var querystring = require('querystring');
var url=require('url');
var util=require('util');

/**
 * httpclient
 */
var contents=JSON.stringify({
    name:"shangerbin",
    age:34
});

var options={
    host:'127.0.0.1'
    ,port:8080
    ,method:'POST'
    ,path:'/'
    ,headers:{
        'Content-Type':'application/json'
    }
};

var req= http.request(options,function(res){
    res.setEncoding('utf-8');
    res.on('data',function(data){
        console.log('send data:');
        console.log(data);
    });
});

req.write(contents);

req.end();
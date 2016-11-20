/**
 * __filename
 *__dirname
 */
console.log("__filename is "+__filename)
console.log("__dirname is "+__dirname)

/**
 * console
 */
console.info("console info");
console.error("console error")
console.time("get some data")
console.timeEnd("get some data");

/**
 * process
 */
console.info(process.argv);
console.info(process.platform);


//加入两个setImmediate()回调函数
setImmediate(function(){
    console.log("setImmediate延迟执行1");
    process.nextTick(function(){
        console.log("强势插入1");
    });
//nextTick will be set function to an array
    process.nextTick(function(){
        console.log("强势插入2");
        process.nextTick(function(){
            console.log("强势插入3");
        });
    });
});
//加入2个nextTick()的回调函数
process.nextTick(function(){
    console.log("nextTick延迟执行1");
});
process.nextTick(function(){
    console.log("nextTick延迟执行2");
});
setImmediate(function(){
    console.log("setImmediate延迟执行2");
});
console.log("正常执行");

/**
 * util
 */
var util=require("util")
function baseClass(name, age){
    this.name = name;
    this.age=age;
    this.instanceMethod=function(){
        console.log("name is"+name+" age is "+age);
    }
}
baseClass.prototype={
    protoMethod:function(){
        console.log("protoMethod");
    }
}

function subClass(){
    this.name ="sub";
}
util.inherits(subClass, baseClass);

subInstance = new subClass();
subInstance.protoMethod()

console.log(util.inspect(subInstance));
console.log(util.inspect(subClass));

/**
 * events
 */
var events=require('events');
var emitter = new events.EventEmitter();

var listener1 = function(arg1,arg2){
    console.log('listener1',arg1,arg2)
};

var listener2 = function(arg1,arg2){
    console.log('listener2',arg1,arg2)
};

emitter.on("someevent",listener1);

emitter.on("someevent",listener2);



emitter.emit("someevent",'shangerbin','hejuan');

emitter.removeListener('someevent',listener1)

emitter.emit('someevent',"hejuan","again")
var Stack = (function(){

    var stack = [],
        allowed = [ "push", "pop", "length" ];
    
    var target = {};
    var handler = {
           get (receiver, name){
            if (allowed.indexOf(name) > -1){
                if(typeof stack[name] == "function"){
                    return stack[name].bind(stack);
                } else {
                    return stack[name];
                }
            } else {
                return undefined;
            }
        }
    };

  return new Proxy(target, handler);

});

var mystack = new Stack();

mystack.push("Test");
mystack.push("Data 2");

console.log(mystack.length);    //1

console.log(mystack[0]);        //undefined
console.log(mystack.pop()); //"Data 2"

// Second version Stack Implementation using Proxy
// Use Arrow Functions
// Second version to develop Stack 
// using arrow functions
var Stack = (() => {
    let stack = [],
        target = {},
        allowed = [ "push", "pop", "length" ];
    
    const invariant = (key, action) => {
        if (key[0] === '_') {
            throw new Error(`Invalid attempt to ${action} private "${key}" property`);
        }
    };

    // This check is introduced to return length 
    const checkTypeFnNum = (key) => {
        return (typeof stack[key] === "function") ? stack[key].bind(stack) : stack[key];
    };

    const handler = {
           get: (receiver, key) => {
               invariant(key, 'get');
               return (allowed.indexOf(key) > -1) ? checkTypeFnNum(key) : undefined;
            },
            set: (receiver, key, value) => {
                console.log('[key] - [value] ', key, value);
                return true;
            }
        }

  return new Proxy(target, handler);
});


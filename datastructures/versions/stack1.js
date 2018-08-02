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

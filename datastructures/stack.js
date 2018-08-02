// Third version to develop Stack 
// using arrow functions with Custom Stack Implemetation using Array
var Stack = ((data = [], t = 0) => {
    let dataStore = data,
        top = t,
        stackProto = {
            push (element) {
                dataStore[top++] = element
            },
            pop: () => dataStore.splice(--top, 1),
            peek: () => dataStore[top - 1],
            length: () => top,
            isEmpty: () => top === 0,
            getStack: () => dataStore,
            getStackElems: () => console.log(...Array.from(dataStore))
        },
        target = Object.create(stackProto),
        allowed = [ "push", "pop", "peek", "length", "isEmpty", "getStack" ];
    
    const invariant = (key, action) => {
        const errMsg = `Invalid attempt to ${action} private "${key}" property`;
        if(action == "get") {
            if (key[0] === '_') {
                throw new Error(errMsg);
            }
        }

        if (action == "delete") {
            if (key[0] === '_' || (allowed.indexOf(key) > -1)) {
               throw new Error(errMsg);
            }   
        }
    };

    const handler = {
        get: (receiver, key) => {
            invariant(key, 'get');
            return (allowed.indexOf(key) > -1) ? receiver[key] : undefined;
         },
         set: (receiver, key, value) => {
             console.log('[key] - [value] ', key, value);
             return true;
         },
         deleteProperty: (target, key) => {
             invariant(key, 'delete')
             return true
         }
    }

  return new Proxy(target, handler);
});



var mystack = Stack();

mystack.push("Test");
mystack.push("Data 2");

console.log(mystack.length);    //1

console.log(mystack[0]);        //undefined
console.log(mystack.pop()); //"Data 2"

delete mystack.pop
// Error: Invalid attempt to delete private "pop" property

mystack.__proto__
// Error: Invalid attempt to get private "__proto__" property


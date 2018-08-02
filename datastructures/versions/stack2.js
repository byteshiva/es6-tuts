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

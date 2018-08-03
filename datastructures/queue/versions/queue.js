// First Version Queue Implementation
var Queue = ((data = []) => {
    let dataStore = data,
        queueProto = {
            enqueue: (element) => dataStore.push(element),
            dequeue: () => dataStore.shift(),
            front: () => dataStore[0],
            back: () => dataStore[dataStore.length - 1],
            isEmpty: () => dataStore.length === 0,
            length: () => dataStore.length,
            getQueue: () => dataStore,
            setQueue: (data) => {
                dataStore = data
            },
            toString: () => JSON.stringify(dataStore, null, 2)
        },
        target = Object.create(queueProto),
        allowed = [ "enqueue", "dequeue", "length", "front", "back", "isEmpty", "getQueue", "toString" ];

    const invariant = (key, action) => {
        const errMsg = `Invalid attempt to ${action} private "${key}" property`;
        if(action == "get") {
            if (key[0] === '_' || !(allowed.indexOf(key) > -1)) {
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

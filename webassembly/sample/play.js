
function main(wasm) {
    const memory = wasm.exports.memory;
    const length = wasm.exports.length;
    const position = wasm.exports.position;

    const bytes = new Uint8Array(memory.buffer, position, length);
    const s = new TextDecoder('utf8').decode(bytes);

    console.log(s);
}

const request = async () => {
    const response = await fetch("main.wasm");
    const bytes = response.arrayBuffer();
    const result = WebAssembly.instantiate(bytes, {});
    const main = result.instance;
    return main;
}

fetch("main.wasm").then( response => 
    response.arrayBuffer()
).then( bytes => 
    WebAssembly.instantiate(bytes, {})
).then(result => 
    result.instance
).then(main);
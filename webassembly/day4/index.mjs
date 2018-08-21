import fs from 'fs';

(async () => {
  const binary = new Uint8Array(fs.readFileSync(`./wasm/fibo.wasm`));
  const module = await WebAssembly.instantiate(binary);
  const program = module.instance.exports;
  console.log(program.f(45));
})();
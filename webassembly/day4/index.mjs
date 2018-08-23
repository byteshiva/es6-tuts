import fs from 'fs';

(async () => {
  const binary = new Uint8Array(fs.readFileSync(`./wasm/add.wasm`));
  const module = await WebAssembly.instantiate(binary);
  console.log("modules");
  const program = module.instance.exports;
  console.log(program);
  console.log(program._add(45, 12));
})();
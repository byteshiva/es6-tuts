const moduleFns = {
    load(url, propName) {
      loadWasm(url).then(returnVal => {
        Object.assign(this, returnVal);
      });
    }
  };
  moduleFns.load('../wasm/sqrt.wasm'); // sqrt.wasm compiled with https://wasdk.github.io/WasmFiddle/
  
  const form = document.forms.calcSqrt;
  
  // Manage form submit
  form.addEventListener('submit', function sqrtFormSubmit(e) {
    e.preventDefault();
  
    const val = this.sqrtInput.value;
    const result = moduleFns.getSqrt(val);
    const resultEl = this.querySelector('[data-sqrt-result]');
  
    resultEl.removeAttribute('hidden');
    resultEl.textContent = `Square root of ${val} is ${result}`;
  });
  
  /**
   * Load WASM modules.
   *
   * @param {string} url of the wasm module
   * @param {object} [imports={}]
   * @returns
   */
  async function loadWasm(url, imports = {}) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Error while fetching WASM.`);
    }
    const bytes = await res.arrayBuffer();
    const module = await WebAssembly.compile(bytes);
    const instance = await WebAssembly.instantiate(module, imports);
  
    return instance.exports;
  }
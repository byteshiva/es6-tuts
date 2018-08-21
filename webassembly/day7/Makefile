default:
	wat2wasm fibo.wat -v -o wasm/fibo.wasm
compile:
	wat2wasm fibo.wat -v -o wasm/fibo.wasm
serve:
	python -m http.server
ecompile:
	emcc c/dice-roll.c -s WASM=1 -O3 -o js/index.js
clean:
	rm *.wasm
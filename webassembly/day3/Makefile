default:
	wat2wasm fibo.wat -v -o wasm/fibo.wasm
compile:
	wat2wasm fibo.wat -v -o wasm/fibo.wasm
serve:
	python -m http.server
clean:
	rm *.wasm
default:
	wat2wam sqrt.wat -v -o wasm/sqrt.wasm
compile:
	wat2wasm sqrt.wat -v -o wasm/sqrt.wasm
serve:
	python -m http.server
clean:
	rm *.wasm
cpp:
	emcc c/sqrt.c -o wasm/sqrt.wasm
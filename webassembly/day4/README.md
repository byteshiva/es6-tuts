

```
	emcc c/add.c -Os -s BINARYEN_ASYNC_COMPILATION=1,WASM=1 -s SIDE_MODULE=1 -o wasm/add.wasm

```
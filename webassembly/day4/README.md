https://wasdk.github.io/WasmFiddle/?16nvro

```
https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/
```

```
emcc -s WASM=1 \
     -s EXPORTED_FUNCTIONS="['_jpg_transcode']" \
     -o jpgsquash.js jpgtranscode.c
```
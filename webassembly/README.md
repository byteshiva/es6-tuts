```
compilers: gcc, clang, gcc-i686, gcc-fuzz
build types: debug, release
configurations: empty, asan, msan, lsan, ubsan, no-re2c, no-tests
```

```
sudo apt install cmake

$ git clone --recursive https://github.com/WebAssembly/wabt
$ cd wabt
$ make 
$ make clang-Release
```

```
# https://github.com/kripken/emscripten
$ git clone git@github.com:kripken/emscripten.git

# Fetch the latest registry of available tools.
./emsdk update

# Download and install the latest SDK tools.
./emsdk install latest

# Set up the compiler configuration to point to the "latest" SDK.
./emsdk activate latest

# Activate PATH and other environment variables in the current terminal
source ./emsdk_env.sh

```

```
$ emcc -O3 file.cpp 

```

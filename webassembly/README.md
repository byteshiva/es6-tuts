compilers: gcc, clang, gcc-i686, gcc-fuzz
build types: debug, release
configurations: empty, asan, msan, lsan, ubsan, no-re2c, no-tests


sudo apt install cmake
$ git clone --recursive https://github.com/WebAssembly/wabt
$ cd wabt
$ make 
$ make clang-Release

```
To understand LLVM more, I suggest the following simple exercise, assuming you are on a GNU/Linux based OS:

1. Install the LLVM toolchain from your OS repository. (On ubuntu, that would be "sudo apt-get install llvm").

2. Take a small C program "hello.c" for experimentation.

3. Compile it through the different stages as follows:
   clang -emit-llvm -S hello.c -o hello.ll
   
   This will generate the LLVM IR for your C hello file. Now optimize it using "opt".
   
   opt -O3 -S hello.ll -o hello.opt.ll
   
   Now you can generate x86 assembly (assuming you are on a PC) for your hello using "llc"

   llc -O3 hello.opt.ll -o hello.s
  
  You can have a look at the machine assembly hello.s. Finally you can assemble this assembly into an executable as:

   gcc hello.s
   clang hello.s -o hello

(I don't know if LLVM has its own assembler yet. You can just use the gnu assembler "as" or use gcc to invoke it for you as above).

```
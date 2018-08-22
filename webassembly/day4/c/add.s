	.text
	.file	"add.c"
	.section	.text.add,"",@
	.hidden	add                     # -- Begin function add
	.globl	add
	.type	add,@function
add:                                    # @add
	.param  	i32, i32
	.result 	i32
	.local  	i32
# %bb.0:                                # %entry
	get_global	$push3=, __stack_pointer@GLOBAL
	i32.const	$push4=, 16
	i32.sub 	$push6=, $pop3, $pop4
	tee_local	$push5=, 2, $pop6
	get_local	$push7=, 0
	i32.store	12($pop5), $pop7
	get_local	$push9=, 2
	get_local	$push8=, 1
	i32.store	8($pop9), $pop8
	get_local	$push10=, 2
	i32.load	$push2=, 12($pop10)
	get_local	$push11=, 2
	i32.load	$push1=, 8($pop11)
	i32.add 	$push0=, $pop2, $pop1
                                        # fallthrough-return: $pop0
	end_function
.Lfunc_end0:
	.size	add, .Lfunc_end0-add
                                        # -- End function

	.ident	"clang version 8.0.0 (http://llvm.org/git/clang.git 446ad5873657e07917ecf631dd778863d27eb122) (http://llvm.org/git/llvm.git 20dd1fbe93f4585cf285915b2e47df199e43960b)"

(module
 (table 0 anyfunc)
 (memory $0 1)
 (export "memory" (memory $0))
 (export "f" (func $f))
 (func $f (; 0 ;) (param $0 i32) (result i32)
  (block $label$0
   (br_if $label$0
    (i32.ne
     (i32.or
      (get_local $0)
      (i32.const 1)
     )
     (i32.const 1)
    )
   )
   (return
    (get_local $0)
   )
  )
  (i32.add
   (call $f
    (i32.add
     (get_local $0)
     (i32.const -1)
    )
   )
   (call $f
    (i32.add
     (get_local $0)
     (i32.const -2)
    )
   )
  )
 )
)

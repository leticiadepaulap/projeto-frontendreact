const array1 = ['1','3','4']
const array2 = ['caneca','garrafa','relogio']
const array3 = ['1','3','4','caneca','garrafa','relogio',true,false]

console.log(array1)

const copiaarray1 = array1.slice()
copiaarray1.pop()
console.log (copiaarray1)


const copiaarray2 = array2.slice()
copiaarray2.splice1(1, 1) 
console.log(copiaarray2)
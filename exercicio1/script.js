const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
//========== EX1 =============
const meuObjeto = (objeto) =>{
    //para percorrer um objeto se usa "for"
    for(let propriedade in objeto){
        console.log(objeto[propriedade].toUpperCase())
    }
}
meuObjeto(objeto)

//========== EX2 =============
const meuObjeto2 = (objeto2) =>{
    const arrayDoObjeto = []
    for (let propriedade in objeto){
        arrayDoObjeto.push(objeto[propriedade])
    }
    return arrayDoObjeto.join(", ")
}
console.log(meuObjeto2(objeto))

//=========== EX3 ==============
const meuObjeto3 = (meuObjeto, meuObjeto2) =>{
    for(let propriedade in objeto){
        console.log(objeto[propriedade].toUpperCase())
    }
    let resultadoFinal = meuObjeto2(meuObjeto)
    return resultadoFinal
}
console.log(meuObjeto3(meuObjeto,meuObjeto2))



















// //Exercicio 1
// const func1 = () => {
//     for(let propriedade in objeto){
//         console.log(objeto[propriedade].toUpperCase())
//     }
// }
// func1(objeto)
// //----------
// //Exercicio 2
// const func2 = (teste) => {
//     const arrayDoObjeto = []
//     for(let propriedade in objeto){
//         arrayDoObjeto.push(objeto[propriedade])
//     }
//   return arrayDoObjeto.join()
// }
// console.log(func2(objeto))
// //-----------
// //exercicio 3
// const func3 = (func1, func2) => {
//     for(let propriedade in objeto){
//       console.log(objeto[propriedade].toUpperCase())
//     }
//     let resultadoFinal = func2(func1)
//     return resultadoFinal
// }

// console.log(func3(func1, func2)) 


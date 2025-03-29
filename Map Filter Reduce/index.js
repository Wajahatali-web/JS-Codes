// let arr = [12,13,14,15,16]
// // ARRAY FOREACH
// // exixting array p kam krta h
// let a = arr.forEach((element)=>{
//     console.log(element*element)
// })
// // ARRAY MAP METHOD 
// // creates new array
// let b = arr.map((value,index,array)=>{
//     console.log(value,index,array)
//     return value + index
// })
// console.log(b)

// // filter kr k new array print krta h

// let arr1 = [2,4,7,9,15,20,25]
// let c = arr1.filter((element)=>{
//     return element<5
// })
// console.log(c)

// // ARRAY REDUCE METHOD
// value return krta h
let arr = [1,2,3,4,5]
const reduce_func = (h1,h2) =>{
    return h1+h2
}
let newarr = arr.reduce(reduce_func)
console.log(newarr)




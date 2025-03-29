

let name = "Wajahat"
console.log(name.length)
console.log (name.toUpperCase())
console.log (name.toLowerCase())
console.log (name.slice(2))

console.log (name.replace("Wajahat", "syed"))

let friend = "Noman"
console.log(name.concat("is a friend of ", friend, "ok"))

let friend2 = "    Meena    "
console.log(friend2)
console.log(friend2.trim())

let fr = friend2.trimStart()
console.log(friend2.length)
console.log(fr.length)

let fname  = "Syed Wajahat Ali"
console.log(fname.substr(5,7))
let tname  = "Syed Wajahat Ali"
console.log(tname.substring(5,12))

let num = "5"
console.log(num.padStart(4,"123"))
console.log(num.padEnd(4,"123"))

let name1 = "Wajahat"
console.log(name1.repeat(3))


let text = "Hello world, welcome to the universe.";
let word = "Hello"

let sentence = text.includes(word)
console.log(sentence)
console.log(text.includes("universe"))

console.log(text.startsWith("Hello",0))


// let str = "Please give me Rs 1000"
// let amount = Number.parseInt(str.slice(-4))
// console.log(amount)
// console.log(typeof amount)

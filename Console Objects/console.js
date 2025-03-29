// console.log(console) //-----For console object..
/*
assert : ƒ assert()

clear: ƒ clear()

context: ƒ context()

count
:
ƒ count()
countReset
:
ƒ countReset()
createTask
:
ƒ createTask()
debug
:
ƒ debug()
dir
:
ƒ dir()
dirxml
:
ƒ dirxml()
error
:
ƒ error()
group
:
ƒ group()
groupCollapsed
:
ƒ groupCollapsed()
groupEnd
:
ƒ groupEnd()
info
:
ƒ info()
log
:
ƒ log()
memory
:
MemoryInfo {totalJSHeapSize: 11900000, usedJSHeapSize: 10000000, jsHeapSizeLimit: 1136000000}
profile
:
ƒ profile()
profileEnd
:
ƒ profileEnd()
table
:
ƒ table()
time
:
ƒ time()
timeEnd
:
ƒ timeEnd()
timeLog
:
ƒ timeLog()
timeStamp
:
ƒ timeStamp()
trace
:
ƒ trace()
warn
:
ƒ warn()
*/
// console.error("this is an error")

// console.assert(7>5)  --- Assert is function
// assert error dega agr is m false hoga toh wrna koi error nh dega

// console.clear() -- for clear the console

// obj = {a:2 , b:3 , c:4}
// console.table(obj)   ---- Tabular form m data show krwata h

// console.warn("This is warning")--- For warning message

// console.info("This is an information") --- Similar as log (bas yeh console m info wale portion m show hoga)

// Example of console.time()
console.time("forLoop")
for (let i=0 ; i<5 ; i++){
    console.log(i)
}
console.timeEnd("forLoop")

console.time("WhileLoop")

let i = 0;
while(i < 5) {
    console.log(i)
    i++
}

console.timeEnd("WhileLoop")
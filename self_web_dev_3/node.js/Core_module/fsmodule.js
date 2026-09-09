const fs = require('fs')

// #if u want  read and print a file but this file console print

// fs.readFile('file.txt', 'utf8', (err, data)=>{
//     console.log(err, data )
// })

// console.log("Finished reaading file")

// #if u want ur file read firt then ur console log of this file print

// const a = fs.readFileSync('file.txt')
// console.log(a.toString())
// console.log("Finished reaading file")

// #for write in a file but console.log of this file print first then file.text content

// fs.writeFile('file.txt',"This is a data", ()=>{
//     console.log("Written to this file")
// });

// console.log("Finished reaading file")

// #if u want run file.txt first then console.log of this file then use sync

b = fs.writeFileSync('file2.txt', "This is a data2")
console.log(b)
console.log("Finished reading file")





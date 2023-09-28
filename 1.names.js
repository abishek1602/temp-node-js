// //Module -- encapsulated code - minimum code only
// // every file in a node is module

// const names = require('./1.names')
// const sayHi = require('./2.utils')
// const data = require('./index')
// require('./mindg')
// // sayHi('Abi')
// // sayHi(names.john)
// // sayHi(names.bill)
// // console.log(names)

//local
const secret = "confidential";
//share
const john = "john";
const bill = "bill";

module.exports = { john, bill };

require('colors')
var { calculateResultSum } = require('./calculateResultSum.js')

const totalDiscount = calculateResultSum([12.1, 32.2, 43.1], 0.9);
console.log(totalDiscount > 50 ? `${totalDiscount}`.red : `${totalDiscount}`.green);
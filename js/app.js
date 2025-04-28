//Coin Sorter and Wrapper Calculator

//Non RNG for coins(static 200)
// let pennies = 200;
// let nickels = 200;
// let dimes = 200;
// let quarters = 200;

//RNG for coins(between 0 and 200)
let pennies = Math.floor(Math.random() * 201);
let nickels = Math.floor(Math.random() * 201);
let dimes = Math.floor(Math.random() * 201);
let quarters = Math.floor(Math.random() * 201);


//Coin values
const pennyVal = 0.01;
const nickelVal = 0.05;
const dimeVal = 0.1;
const quarterVal = 0.25;

//Wrappers
const pennyWrap = 50;
const nickelWrap = 40;
const dimeWrap = 50;
const quarterWrap = 40;

//Total Amount
let total = ((pennies * pennyVal) + (nickels * nickelVal) + (dimes * dimeVal) + (quarters * quarterVal));

//How Many Wrappers and Remainder
let pWrapper = Math.floor(pennies / pennyWrap);
let pRemain = pennies % pennyWrap;
let nWrapper = Math.floor(nickels / nickelWrap);
let nRemain = nickels % nickelWrap;
let dWrapper = Math.floor(dimes / dimeWrap);
let dRemain = dimes % dimeWrap;
let qWrapper = Math.floor(quarters / quarterWrap);
let qRemain = quarters % quarterWrap;

console.log(`Number of Pennies: ${pennies}, Number of Wrappers used: ${pWrapper}, Pennies not wrapped: ${pRemain}`);
console.log(`Number of Nickels: ${nickels}, Number of Wrappers used: ${nWrapper}, Nickels not wrapped: ${nRemain}`);
console.log(`Number of Dimes: ${dimes}, Number of Wrappers used: ${dWrapper}, Dimes not wrapped: ${dRemain}`);
console.log(`Number of Quarters: ${quarters}, Number of Wrappers used: ${qWrapper}, Quarters not wrapped: ${qRemain}`);
console.log(`Total Amount: $${total.toFixed(2)}`);
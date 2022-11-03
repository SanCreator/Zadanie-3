let a = 13.890123;
let b = 2.891564;
let n = 3;

let dec = Math.round(a % 1* Math.pow(10,n));
let bin = Math.round(b % 1* Math.pow(10,n));

console.log(dec, bin);

console.log('1 = 2 ', a === b);
console.log('1 = 2', dec === bin);
console.log('1 > 2', dec > bin);
console.log('1 < 2', dec < bin);
console.log('1 != 2', dec != bin);
console.log('1 >= 2', dec >= bin);
console.log('1 <= 2', dec <= bin);
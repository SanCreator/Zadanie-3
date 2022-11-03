let x1 = 2
let y1 = 3

let x2 = 10
let y2 = 5

let cathetus1 = Math.abs(x1 - x2);
let cathetus2 = Math.abs(y1 - y2);

console.log(Math.sqrt(
  Math.pow(cathetus1, 2) * Math.pow(cathetus2, 2)
));
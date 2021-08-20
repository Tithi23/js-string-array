const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
//slice
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);


// splice to remove from array
// const numberSpliced = numbers.splice(4, 3);
//console.log(numberSpliced);
// console.log(numbers);


// add korte hole 
const numberSpliced2 = numbers.splice(4, 0, 777, 888, 999);
console.log(numberSpliced2);
console.log(numbers);
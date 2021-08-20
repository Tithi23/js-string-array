// 1st system split
const arthom = 'amar sonar bangla ami tumay valobasi';
const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' ');
// console.log(words);
const withoutA = anthem.split('a');
// console.log(withoutA);

// 2nd system slice
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// 3rd system substr
const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart);

// 4th system substring
const anotherPartString = anthem.substring(11, 15);
// console.log(anotherPartString);

// add korte pari normal 1st way
const first = 'Amader';
const second = 'City';
// const fullString = first + second;
// console.log(fullString);
// 2nd way concat
const fullString = first.concat(second).concat('abc').concat('RJ Kibria')
// console.log(fullString);

// join 

const words2 = ['alim', 'badhon', 'cameron', 'david'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
// const allJoined = words2.join(', ');
const allJoined = words2.join('WWW');
console.log(allJoined);

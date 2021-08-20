// sort  
const numbers = [6, 4, 7, 1, 3, 9, 2, 8, 5];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

// sort
const friends = ['kabli', 'josim', 'razzak', 'anwar', 'deepjol', 'badsha'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);
// reverse
// const reveredFriends = friends.reverse();
// console.log(reveredFriends);

// sort and reverse
const sortedReversedFriends = friends.sort().reverse();
// console.log(sortedReversedFriends);



// number sorting fun
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);

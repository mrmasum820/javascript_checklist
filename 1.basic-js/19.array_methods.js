var bestFriends = ['shawan', 'atik', 'rupom', 'shiraz', 'mustafa'];
console.log(bestFriends);

//array methods(push, pop, concatinations)
// bestFriends.push('pranta');
// console.log(bestFriends);

// bestFriends.pop();
// console.log(bestFriends);

var country1 = ['Bangladesh', 'USA'];
var country2 = ['Uk', 'Canada'];

var country = country1.concat(country2);
// console.log(country);


//shift (opposite of pop)
// bestFriends.shift();
// console.log(bestFriends);

//unshift (opposite of push)
// bestFriends.unshift('mehedi');
// console.log(bestFriends);

//splice (position, remove, add elements)
//adding elements using splice
// bestFriends.splice(2, 2, 'manik', 'sagor');
// console.log(bestFriends);

//removing elements using splice
// bestFriends.splice(1, 2);
// console.log(bestFriends);

//slice method
// var newFriends = bestFriends.slice(2);
// console.log(newFriends);
// console.log(bestFriends);

//sort method(alphabatically sorting)
bestFriends.sort();
console.log(bestFriends);

//reverse method(alphabatically sorting)
bestFriends.reverse();
console.log(bestFriends);

//for numbers sorting add an anonymous function
var numbers = [10, 25, 12, 61, 5];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);

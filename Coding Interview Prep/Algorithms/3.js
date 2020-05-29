const wordTest = 'abc'

let string = [];
let strings = [];

for (let i = 0; i < wordTest.length; i++) {
  string = wordTest.split('');
  string.splice(i, 0, wordTest[i]);
  strings.push(string);
}


console.log(string);



/* // An approach to introduce a new character to a permutation
var ch = '?';
var source = ['?', '?', '?'];     // Current sub-permutation
var temp, dest = [];

for (var i = 0; i <= source.length; ++i) {
  temp = source.slice(0);         // Copy the array
  temp.splice(i, 0, ch);          // Insert the new character
  dest.push(temp);                // Store the new sub-permutation
}

console.log(dest); */
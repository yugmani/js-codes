// *********************************
// Javascript Hacks
// *********************************

// ***** Resize the array ******
const cities = [
  'New York',
  'Dallas',
  'Washington DC',
  'Boston',
  'Los Angeles',
  'Las Vegas'
];

// console.log(cities.length); // 6

cities.length = 3;
// console.log(cities);
// (3) ["New York", "Dallas", "Washington DC"]

// Swapping of two values;

let first_name = 'Baburam';
let last_name = 'Bhattarai';
// console.log('First Name: ', first_name); //  First Name:  Baburam
// console.log('Last_name: ', last_name); // Last_name:  Bhattarai

[first_name, last_name] = [last_name, first_name];

// console.log('First Name: ', first_name); // First Name:  Bhattarai
// console.log('Last_name: ', last_name); // Last_name:  Baburam

// Concatenating two or more arrays

let a = [1, 2, 3];
let b = [4, 5, 6];

// causing server overload
let c = a.concat(b);
// console.log(c);
// (6) [1, 2, 3, 4, 5, 6]

// Without causeing server overload
a.push.apply(a, b);
// console.log("a: ", a);
// a:  (6) [1, 2, 3, 4, 5, 6]

// New way of using filter()

const array1 = [
  null,
  undefined,
  { name: 'Keshar' },
  { name: 'Mamata' },
  { name: '' },
  null
];

// const newArray1 = array1.filter(item => item.name.length = 0);
//this will show error Uncaught TypeError: Cannot read property 'length' of undefined

const newArray1 = array1.filter(Boolean).filter(item => item.name.length > 0);

// console.log(newArray1);
// [{ name: 'Keshar' }, { name: 'Mamata' }]

// iterate on the map from 0 to n;

const array2 = [...Array(10)].map((item, index) => index + 1);
// console.log(array2);
// (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Replace all occurances of a word in a string

const string =
  'I love america. I live in America. I study in america. I work in America';

// console.log(string.replace(/america/gi, 'Nepal'));
// I love Nepal. I live in Nepal. I study in Nepal. I work in Nepal

// Control flow shortcuts

let x, y;

// if x is undefined, y = 'nothing' otherwise, y = x;
y = x || 'Nothing';
// console.log(y); // Nothing

// if y exists do something;
// y && console.log(y); // Nothing
// if x exists do something otherwise nothing
// x && console.log('x:', x); //  =>no output because x is undefined;

// Type Conversiton: string to number & viceversa

// string to number
let string1 = '123';
// console.log(string1); // 123 =>string
// console.log(string1 + 321); // 123321

// console.log(+string1); // 123 =>number
// console.log(+string1 + 321); // 444

let string2 = '';
// console.log(+string2); // 0 

// number to string
let num = 7;
let numToString = 7 + "";
// console.log(numToString);  // 7 => string
// console.log(numToString + 100); // 7100

// console.log(num + 100); // 107
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

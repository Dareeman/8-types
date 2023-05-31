//Number
const age = 22;
console.log('age', typeof age, age);

//String
const name = 'Anna';
console.log('name', typeof name, name);

//Boolean
const married = true;
console.log('married', typeof married, married);

//Null
const kids = null;
console.log('null', typeof null, null);

//Undefined1
const phoneNumber = undefined;
console.log('phoneNumber', typeof phoneNumber, phoneNumber);
//Undefined2
let carOwner = undefined;
const carOwner2 = carOwner;
console.log('carOwner2', typeof carOwner2, carOwner2);

//Object
const person = {
  name: 'Tima',
  age: 4,
  work: false,
};
console.log('person', typeof person, person);

//Symbol
const id = Symbol('id');
console.log('id', typeof id, id);

//BigInt
const money = BigInt(10);
console.log('money', typeof money, money);

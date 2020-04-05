// Write a function  that accepts an array and puts it into a variable, then log that variable to the console

function myFunc() {
  const numArr = [1, 2, 3, 4]
  console.log(numArr);
}
myFunc();


// Description: Write an object that has a method which can over write the parameters of that object by passing an argument to it, 
// in this case create an object and name it products and it should be like this mock object:
// example : products: { name: 'mack book', type: 'electronics', pieces: 354 } 
// in this case we want the pieces to be dynamic and it shouldn't have initial value.

const products = {
  name: 'BMW',
  color: 'black',
  hasSunroof: true,
  horsePower: (function (hp) {
    return hp
  })(300)
}

console.log(products);



// Write a function  that accepts an array and puts it into a variable, then log that variable to the console

const numArr = ['A', 'B', 'C', 'D']

function myFunc(arr) {
  console.log(arr);
}
myFunc(numArr);


// Description: Write an object that has a method which can over write the parameters of that object by passing an argument to it, 
// in this case create an object and name it products and it should be like this mock object:
// example : products: { name: 'mack book', type: 'electronics', pieces: 354 } 
// in this case we want the pieces to be dynamic and it shouldn't have initial value.

const products = {
  name: 'BMW',
  color: 'black',
  hasSunroof: true,
  horsePower: null,
  HPFunc: function(hp) {
    this.horsePower = hp
  }
}

products.HPFunc(300)

console.log(products);



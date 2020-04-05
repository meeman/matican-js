// Write a function  that accepts an array and puts it into a variable, then log that variable to the console


function myFunc(arr) {
  const numArr = arr;
  console.log(numArr);
}
myFunc(['A', 'B', 'C', 'D']);


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



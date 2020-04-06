// Task One

switch (new Date().getDay()) {
  case 0:
    console.log('Today is Sunday.')
    break
  case 1:
    console.log('Today is Monday.')
    break 
  case 2:
    console.log('Today is Tuesday.') 
    break
  case 3:
    console.log('Today is Wednesday.') 
    break
  case 4:
    console.log('Today is Thursday.') 
    break
  case 5:
    console.log('Today is Friday.') 
    break
  case 6:
    console.log('Today is Saturday.')
    break
}

// Task Two

const funcOne = (goal) => {
  const myArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  // const myGoal = myArr.some(item => item === goal)
  // if (myGoal){
  //   console.log('Wow found')
  // } else {
  //   console.log('Oops not found')
  // }
  let found = false
  for(let i = 0; i < myArr.length; i++ ) {
    if (myArr[i] === goal) {
      found = true
    }
  }
  if (found){
     console.log('Wow found');
  } 
  else {
     console.log('Oops not found')
  }
}
funcOne("F")


// Task Three

const funcTwo = () => {
  const myObj = {
    id: 4,
    firsname: 'Sam',
    lastname: 'Golzar',
    Age: 12,
    height: '188cm',
    weight: '90kg'
  }

  for(let values of Object.values(myObj)){
    console.log(values)
  }
  
  // for (let [key, value] of Object.entries(myObj)) {
  //   console.log(`${key}: ${value}`)
  // }
}
funcTwo()


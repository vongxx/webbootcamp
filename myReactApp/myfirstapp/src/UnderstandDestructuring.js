// Array Destructuring - just match the [,,] with [,,]
const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles; 
console.log('Car='+car+', Truck='+truck+', SUV='+suv)


// Object Destructuring - use match the {name1,name2} with {name1,name2}
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }

function InitVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
  console.log(message)
}

InitVehicle(vehicleOne)
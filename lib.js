/* Divide */
export function halfOf(x){
  return x/2;
}

/* multiply */
export function multiply(x, y){
  return x * y;
} 

/* User friends */
function userFrineds(user, ...frineds) {
  console.log(user + " " + "has" + " " + frineds.length + " " + "Friends");
}

 userFrineds("User", "Bob", "Alice"); 

 /* car class */
 class Vehicle {
  constructor(wheels) {
  this.wheels = wheels;
  }

  toString() {
  return '(' + this.wheels + ')';
  }
  }

  class Car extends Vehicle {
  constructor(color) {
  super(4);
  this.color = color;
  }
  toString() {
  return super.toString() + ' colored: ' + this.color;
  }
  }

  let car = new Car('blue');
  car.toString();
 
  console.log(car instanceof Car); 
  console.log(car instanceof Vehicle);
 

 /* Parent child */
  export function parent() {
    const message = 'Hello World';
    function child() {
    alert (message);
    }
    return child;
    }
  
export let a = 40;
export let str = "Computer";
export let person = {
  name: "Mahir Absar",
  age: 23,
};

export let TypeSomething = (msg) => console.log(msg);
let fruits = ["apple", "guava", "orange"];
export class Vehicle {
  constructor(type) {
    this.type = type;
  }
  StopOrStart() {
    console.log("You Decide");
  }
}

export default fruits;

// Export by Default Method

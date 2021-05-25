import BAAL, {
  a,
  str,
  person as p,
  TypeSomething,
  Vehicle,
} from "./component.js";

import * as all from "./other.js";

console.log(a);
console.log(str);
console.log(p.age);
console.log(TypeSomething("you Suck"));
console.log(BAAL);
let car = new Vehicle("Car");
console.log(car);
console.log(all.str);
let f1 = new all.Fruit("Apple");
console.log(f1);

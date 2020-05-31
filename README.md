# JavaScript Questions

## 1. What is the difference between classical inheritance and prototypal inheritance?

| Classical Inheritance | Prototypal Inheritance |
------------------------|------------------------|
| Classes are used as blueprints to create objects. | Objects can be created from other objects, either by using function constructors like Object.create(), or defined as object literals like `{}`. It is also possible to use the keyword `new`. |
| Classes inherit from other classes. | Objects could inherit from several prototypes. |
You can't create an object without a class. | You can create new objects either from other objects or from an empty object. |
Classes can't be modified at runtime. | Prototypes can be modified at runtime. |
Classes are tightly coupled to a hierarchy system in which classes inherit from other classes. | Prototypes are loosely coupled. |

## Classical Inheritance Example

```javascript
class Computer {
  constructor(processor, ram, storage) {
    this.processor = processor;
    this.ram = ram;
    this.storage = storage;
  }

  changeRam(newRam) {
    return this.ram = newRam;
  }

  addStorage(storage) {
    return this.storage += storage;
  }
}

const pc = new Computer('i7', '16GB', '512GB');
console.log(pc);
// Computer { processor: 'i7', ram: '16GB', storage: '512GB' }

class Laptop extends Computer {
  constructor(processor, ram, storage, screenSize) {
    super(processor, ram, storage);
    this.screenSize = screenSize
  }
}

const laptop = new Laptop('i9', '32GB', '1TB', '16in');
console.log(laptop);
/* Laptop {
  processor: 'i9',
  ram: '32GB',
  storage: '1TB',
  screenSize: '16in'
} */
laptop.changeRam('64GB');
console.log(laptop);
/* Laptop {
  processor: 'i9',
  ram: '64GB',
  storage: '1TB',
  screenSize: '16in'
} */
```

### Prototypal Inheritance Example

```javascript
var Computern = function(processor, ram, storage) {
  this.processor = processor;
  this.ram = ram;
  this.storage = storage;
}

Computern.prototype.changeRam = function(newRam) {
  return this.ram = newRam;
}

Computern.prototype.addStorage = function(storage) {
  return this.storage += storage;
}

var myComputer = new Computern('i7', '16GB', '512GB');
console.log(myComputer);
// Computern { processor: 'i7', ram: '16GB', storage: '512GB' }

var Laptopn = function(processor, storage, ram, screenSize) {
  Computern.call(this, processor, storage, ram);

  this.screenSize = screenSize;
}

var myLaptop = new Laptopn('i9', '32GB', '1TB', '16in');
console.log(myLaptop);
/* Laptopn {
  processor: 'i9',
  ram: '32GB',
  storage: '1TB',
  screenSize: '16in'
} */
Computern.prototype.changeRam.call(myLaptop, '64GB');
console.log(myLaptop);
/* Laptopn {
  processor: 'i9',
  ram: '64GB',
  storage: '1TB',
  screenSize: '16in'
} */
```

## 2. Discuss possible ways to write a function isInteger(x) that determines if x is an integer.

I would write a function like the following one:

```javascript
function isInteger(x) {
  return x % 1 === 0;
}

console.log(isInteger(150))
// true
console.log(isInteger(182))
// true
console.log(isInteger(1500000))
// true
console.log(isInteger(120.00000000000001))
// false
console.log(isInteger(0.789))
// false
console.log(isInteger(-58.789995225))
// false
```

For me it is the best approach as it is a clean one liner solution. Other solution may be the one shown below:

```javascript
function isInteger(x) {
  return Math.round(x) === x;
}

console.log(isInteger(150))
// true
console.log(isInteger(182))
// true
console.log(isInteger(1500000))
// true
console.log(isInteger(120.00000000000001))
// false
console.log(isInteger(0.789))
// false
console.log(isInteger(-58.789995225))
// false
```

# BrandGuardeFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

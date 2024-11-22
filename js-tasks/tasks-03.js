class Phone {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  call() {
    console.log(`${this.brand} дзвонить...`);
  }
}

class Smartphone extends Phone {
  installApp(appName) {
    console.log(`Встановлення ${appName} ...`);
  }
}

//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  return +(2 * Math.PI * circle.radius);
}

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

// варіант 1
function giveMeFive(obj) {
  const resultArray = [];
  for (let key in obj) {
    if (key.length === 5) {
      resultArray.push(key);
    }
    if (obj[key].length === 5) {
      resultArray.push(obj[key]);
    }
  }
  return resultArray;
}

// варіант 2
function giveMeFive(obj) {
  return Object.entries(obj).flatMap(([key, value]) =>
    [key, value].filter((item) => item.length === 5)
  );
}

//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

//замінити var на let, зміниться область видимості змінної і
function buildFun(n) {
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push(function () {
      console.log(i);
      return i;
    });
  }
  return res;
}

// спробував реалізувати замикання, хз чи правильно :)
function buildFun(n) {
  var res = [];

  const newElement = function (index) {
    res.push(function () {
      console.log(index);
      return index;
    });
  };

  for (var i = 0; i < n; i++) {
    newElement(i);
  }

  return res;
}

//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}

//www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

https: function circleCircumference(circle) {
  const { radius } = circle;
  return +(2 * Math.PI * radius).toFixed(6);
}


//Task 1
class Phone {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model; 
  }

  call() {
    console.log(`${this.brand} дзвонить...`);
  }
}
const myPhone = new Phone("Apple", "Iphone 13 Pro Max");
myPhone.call();


//Task2

class Smartphone extends Phone {
  installApp(appName) {
    console.log('Встановлення ' + appName + '...');
  }
}
const samsung = new Smartphone('Samsung', 'Galaxy A5');
samsung.installApp('Facebook');

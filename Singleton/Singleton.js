// Singleton pattern
class Singleton{
  static instance = new Singleton();
  
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }

  getInstance() {
    return Singleton.instance;
  }

  getName() {
    return this.testMap;
  }

  addName(name) {
    if (!this.testMap) {
      this.testMap = [];
    }
    this.testMap.push(name);
  }
}

const instance1 = new Singleton();
instance1.addName('instance1');
console.log(instance1.getName()); // instance1
const instance2 = new Singleton();
console.log(instance2.getName()); // instance1

// enter node Singleton/Singleton.js in Terminal to run the code
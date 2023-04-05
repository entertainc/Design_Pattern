// Singleton pattern

// Class Demo
// class Singleton{
//   static instance = new Singleton();
  
//   constructor() {
//     if (Singleton.instance) {
//       return Singleton.instance;
//     }
//     Singleton.instance = this;
//   }

//   getInstance() {
//     return this.instance;
//   }

//   getName() {
//     return this.testMap;
//   }

//   addName(name) {
//     if (!this.testMap) {
//       this.testMap = [];
//     }
//     this.testMap.push(name);
//   }
// }

// const instance1 = new Singleton();
// instance1.addName('instance1');
// console.log(instance1.getName()); // instance1
// const instance2 = new Singleton();
// console.log(instance2.getName()); // instance1

// ---------------------------------------------------------------
// Function Demo
// Singleton pattern
const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: 'Singleton' });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1); // true

// enter node Singleton/Singleton.js in Terminal to run the code


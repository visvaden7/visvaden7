class Runner {
  static lastRunTypeName: string;

  constructor(private typename: string) {}
  run() {
    Runner.lastRunTypeName = this.typename;
  }
}

const a = new Runner("a");
const b = new Runner("b");

a.run();
b.run();

console.log(Runner.lastRunTypeName);
// expect : b

// class ClassA {
//   static typeName: string;

//   constructor() {}

//   static getFullName() {
//     return "ClassA" + ClassA.typeName;
//   }
// }

// const a = new ClassA();

// // a.typeName;
// console.log(ClassA.typeName);
// console.log(ClassA.getFullName());

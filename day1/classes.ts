// class Person {
//   private message: string = "";
//   constructor(private name: string) {
//     console.log("생성자 정말 되나?");
//     console.log(name);
//   }
//   get Message() {
//     if (!this.message.includes(this.name)) {
//       throw new Error("message is missing speaker's name");
//     }
//     return this.message;
//   }
//   set Message(val: string) {
//     let tmpMessage = val;
//     console.log(tmpMessage);
//     if (!val.includes(this.name)) {
//       tmpMessage = this.name + " " + val;
//     }
//     this.message = tmpMessage;
//   }
// }

// const speaker = new Person("john");
// speaker.Message = "hello";
// console.log(speaker.Message);

class Person2 {
  constructor(private name: string, private gender: string) {}

  get _name() {
    return this.name;
  }

  get _gender() {
    return this.gender;
  }
}

const nick = new Person2("nick", "male");
console.log(nick._name);
console.log(nick._gender);

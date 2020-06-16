// import 'reflect-metadata'

// declare var Reflect: any

// @Reflect.metadata('inClass', 'A')
// class Test {
//   @Reflect.metadata('inMethod', 'B')
//   public hellos(): string {
//     return 'hello world';
//   }
// }
// const t = new Test()
// console.log(Reflect.getMetadata('inMethod',t, 'hellos'))

// Reflect.defineMetadata('other', 'world', t, 'hellos')
// console.log(Reflect.getOwnMetadata('other',t, 'hellos'))
// console.log(Reflect.getOwnMetadataKeys(t, 'hellos'))

// console.log(Reflect.getMetadata('inClass', Test)); // 'A'
// console.log(Reflect.getMetadata('inMethod', new Test(), 'hellos')); // 'B'


// const classDecorator = (target: Object) => {
//   console.log(Reflect.getMetadata('design:paramtypes'), target)
// }

// // @classDecorator
// // class Demo {
// //   innerValue: string
// //   constructor(val: string) {
// //     this.innerValue = val
// //   }
// // }

// // class Demo<T> {
// //   public username: T
// //   log(arg: {}): string {
// //     console.log(Object.keys(arg).length.toString())
// //     console.log(Object.keys(arg))
// //     return Object.keys(arg).length.toString()
// //   }
// // }

// // const demo = new Demo<number>()

// // demo.log(function(){})
// // demo.username = 1
// // console.log(demo.username)

// export class IceCreamComponent {

//   toppings: any[] = [];

//   @Confirmable('Are you sure?')
//   @Confirmable('Are you super, super sure? There is no going back!')
//   addTopping(topping: any) {
//     this.toppings.push(topping);
//   }

// }


// // Method Decorator
// function Confirmable(message: string) {
//   return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
//     console.log(descriptor)
//     const original = descriptor.value;

//       descriptor.value = function( ... args: any[]) {
//           const allow = confirm(message);

//           if (allow) {
//             const result = original.apply(this, args);
//             return result;
//           } else {
//             return null;
//           }
//     };

//     return descriptor;
//   };
// }

// // const ice = new IceCreamComponent()
// // ice.addTopping('123')

// type ThisSon = {
//   height: number
//   width: string
// }

// type HasLength = {
//   length: number
// }

// class TestT<T extends HasLength, P> {
//   child: P
//   name: T
//   constructor(name: T, child: P) {
//     this.name = name
//     this.child = child
//   }
//   say(): number {
//     console.log(this.name.length)
//     return this.name.length
//   }
//   printAge(): P {
//     console.log(this.child)
//     return this.child
//   }
// }

// const tt = new TestT<HasLength, ThisSon>('123', {height: 1, width: '2px'})
// tt.say()
// tt.printAge()

// interface Named {
//   name: string;
// }

// function extend<T, U>(first: T, second: U): T & U {
//   let result = <T & U>{};
//   for (let id in first) {
//       (<T & U>result)[id] = (<T & U>first)[id];
//   }
//   for (let id in second) {
//       if (!result.hasOwnProperty(id)) {
//           (<U>result)[id] = (<U>second)[id];
//       }
//   }
//   return result;
// }

// class Person {
//   constructor(public name: string) { }
// }
// interface Loggable {
//   log(): void;
// }
// class ConsoleLogger implements Loggable {
//   log() {
//   }
// }
// var jim = extend(new Person("Jim"), new ConsoleLogger());
// var n = jim.name;
// jim.log();
// console.log(jim)

// type Container<T> = {value: T}

// const a: Container<string> = {value: '4'}

// type ThisB = 1

// type Alias = { num: number }
// interface Interface {
//     num: number;
// }
// declare function aliased(arg: Alias): Alias;
// declare function interfaced(arg: Interface): Interface;

// require('./demo/demo')
// // declare class Wow {
// //   name: string
// //   age: number
// //   constructor(name: string, age: number)
// //   setName(name: string): void
// //   hello(): any
// //   getNameLength(): number
// //   setAge(age: number): void
// //   fullName(): string
// // }

// const w = new Wow('32', 32)
// console.log(w.getNameLength())
// w.setAge(123)
// console.log(w.fullName())
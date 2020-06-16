// const queuedObservers = new Set();

// const observe = (fn: () => void) => queuedObservers.add(fn);
// const observable = (obj: any) => new Proxy(obj, {set});

// function set(target: any, key: string, value: any, receiver: any) {
//   const result = Reflect.set(target, key, value, receiver);
//   queuedObservers.forEach((observer: () => void) => observer());
//   return result;
// }

// const person = observable({
//   name: '张三',
//   age: 20
// });

// function print() {
//   console.log(`${person.name}, ${person.age}`)
// }

// observe(print);
// person.name = '李四';
// setTimeout(() => person.age = 30, 3000)
import 'reflect-metadata'

// function logParamTypes(target : any, key : string, desc: any) {
//   console.log(desc)
//   var types = Reflect.getMetadata("design:returntype", target, key);
//   console.log(types.name)
//   console.log(typeof types)
// }

// class OtherService {
//   a = 1
// }

// function inject(target: any) {
//   var types = Reflect.getMetadata('design:paramtypes', target)
//   console.log(types)
// }

// function injectParams(t: any, k: any, i: any) {
//   console.log(t, k, i)
// }

// @inject
// class Demo {
//   @logParamTypes // apply parameter decorator
//   doSomething(
//     param1: string,
//     param2: number,
//   ): number {
//     console.log(param1, param2)
//     return 1;
//   }
//   constructor(public otherService: OtherService, @injectParams public name: string) {}
//   hello(@injectParams n: string): string {
//     return n
//   }

// }

// const d = new Demo(new OtherService, 'yan')
// d.hello('yes')
// d.doSomething('1', 2)
/** eslint-disable */
// import { injectable, Container } from 'inversify'

// interface IAnimals {
//   run(): void
// }

// @injectable()
// export class Animals implements IAnimals {
//   constructor(){}
//   run() {
//     console.log('run')
//   }
// }

// @injectable()
// export class Bird {
//   constructor(public animals: Animals) {}
//   fly() {
//     console.log('fly')
//   }
// }

// @injectable()
// export class Fish {
//   constructor(public animals: Animals) {}
//   swim() {
//     console.log('swim')
//   }
// }

// const myContainer = new Container()

// myContainer.bind<Animals>(Animals).toSelf()
// myContainer.bind<Bird>(Bird).toSelf()
// myContainer.bind<Fish>(Fish).toSelf()

// const bird = myContainer.get(Bird)
// console.log(bird)
// bird.animals.run()

// const testIs = {
//   name: '123',
//   age: 34
// }

// interface ITest {
//   name: string
//   age: number
//   gender?: boolean
// }

// const testIsJson = JSON.stringify(testIs)

// function test(a: any): a is ITest{
//   return typeof a === 'object' && typeof a.name === 'string' && typeof a.age === 'number'
// }

// const aaa = JSON.parse(testIsJson)

// if (test(aaa)) {
//   aaa.
// } else {

// }
import {injectable, inject, Container} from 'inversify'

// let TYPES = {
//   IWarrior: Symbol("IWarrior"),
//   IWeapon: Symbol("IWeapon"),
//   rank: Symbol("rank")
// }

// interface IWeapon {}

// @injectable()
// class Katana implements IWeapon {
// }

// interface IWarrior {
//   weapon: IWeapon;
//   rank: string;
// }

// @injectable()
// class Warrior implements IWarrior {
//   public weapon: IWeapon;
//   public rank: string;
//   public constructor(
//       @inject(TYPES.IWeapon) weapon: IWeapon,
//       @inject(TYPES.rank) rank: string
//   ) {
//       this.weapon = weapon;
//       this.rank = rank;
//   }
// }

// let kernel = new Container();
// kernel.bind<IWarrior>(TYPES.IWarrior).to(Warrior);
// kernel.bind<IWeapon>(TYPES.IWeapon).to(Katana);
// kernel.bind<string>(TYPES.rank).toConstantValue("master");

// const w = kernel.get<IWarrior>(TYPES.IWarrior)
// console.log(w)

let TYPES = {
  base: Symbol('base'),
  admin: Symbol('admin'),
  name: Symbol('name'),
  other: Symbol('other')
}

interface IBase {
  name: string
  log(): void
}

@injectable()
class Base implements IBase {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  log() {
    console.log(this.name)
  }
}

interface IOther {
  hit(): void
}

interface IAdmin extends IBase {
  say(): void
  isOther(): void
}

@injectable()
class Other implements IOther {
  hit() {
    console.log('hit')
  }
}

@injectable()
class Admin extends Base implements IAdmin {
  private other: Other
  constructor(@inject(TYPES.other) other: Other, @inject(TYPES.name) name: string) {
    super(name)
    this.other = other
  }
  public say() {
    console.log('say:', this.name)
  }

  isOther() {
    console.log('injected')
    this.other.hit()
  }
}

const container = new Container()
container.bind<IBase>(TYPES.base).to(Base)
container.bind<IAdmin>(TYPES.admin).to(Admin)
container.bind<IOther>(TYPES.other).to(Other)
container.bind<string>(TYPES.name).toConstantValue('yanxiaosong')

const c = container.get<IAdmin>(TYPES.admin)
c.say()
c.log()
c.isOther()
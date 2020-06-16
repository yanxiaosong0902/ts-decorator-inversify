function observer(classParams: any) {
  return classParams
}

function testDesc(constructor: any) {
  return observer(constructor)
}

interface IClassDemo {
  hello(prefix: string): void
}

function propertyDesc(a: number, b: number) {
  return function(target: any, key: string, description: PropertyDescriptor) {
    console.log(target, key, description)
    description.value = function() {
      console.log(a + b)
      return a + b
    }
  }
}
function propertyDesc1(target: any, key: string, description: PropertyDescriptor) {
  console.log(target, key, description)
}

function paramsDecorator(target: any, key: string | Symbol, index: number) {
  console.log(target, key, index)
}

@testDesc
class ClassDemo implements IClassDemo {
  constructor() {}
  public username = 'yanxiaosong'

  @propertyDesc(1, 2)
  static hello(@paramsDecorator prefix: string) {
    console.log(prefix)
  }

  @propertyDesc1
  hello() {

  }

  get name() {
    ClassDemo.hello('1')
    return this.username
  }
}

const u = new ClassDemo()
console.log(u.name)
u.hello()

class Wows {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  hello() {
    console.log(this.name)
    console.log(this.hello)
    return {
      name: this.name,
      age: this.age
    }
  }
  setName(name) {
    this.name = name
  }

  getNameLength() {
    return this.name.length
  }

  setAge(age) {
    this.age = age
  }

  fullName() {
    return this.name + '-yanxiaosong'
  }
}
window.Wow = Wows

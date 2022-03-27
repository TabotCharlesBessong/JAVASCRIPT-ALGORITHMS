

const javaScript = {}
const testArray = [1,2,3,4] 

javaScript.array = testArray
console.log(javaScript)

javaScript.title = 'Algorithm'
console.log(javaScript)

// concept of inheritance 

class exampleClass {
  constructor() {
    this.name = "JavaScript"
    this.sayName = () => {
      console.log(this.name)
    }
  }
}

const ex1 = new exampleClass()
ex1.sayName()

// constructors with variables 

class ExampleClass {
  constructor(name1,size){
    this.name1 = name1
    this.size = size 
  }
}

const example = new ExampleClass("Mamba",87)
console.log(example)

// we can also have a class with priavte members onlike the one above with public members

class LaurierClass {
  constructor(state,condition){
    let privateName = state
    let privateSize = condition

    this.getName = ()=> {
      return privateName
    }
    this.setName = ()=>{
      privateName = state
    }

    this.getSize = ()=>{
      return privateSize
    }
    this.setSize = ()=>{
      privateSize = condition
    }
  }
}

const state1 = new LaurierClass("Private",32)
console.log(state1,"state 1")
state1.setSize(43)
console.log(state1.privateName)
console.log(state1,"state 2")
state1.setName("Protected")
console.log(state1.privateSize)
console.log(state1)

// adding properties to an object 
const emptyClass = {}
emptyClass['hello'] = 'Hello World'
emptyClass.me = 'Hello me'
console.log(emptyClass)
// in javasctipt , these are the ways in which we can assign values to an empty array 
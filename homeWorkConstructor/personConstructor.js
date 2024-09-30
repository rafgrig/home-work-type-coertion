function Person(name='', age=0){
    this.name = name
    this.age = age
    this.stomach = []
}

Person.prototype = {
    eat(...food){
    let edibleFood = ["apple", "banana", "carrot", "tomatoe", "chicken", "fish", "rice", "broccoli", "egg", "cheese", "bread", "milk", "potatoe", "pasta", "beef", "lettuce", "mushroom", "yogurt",  "orange", 'toblerone']
    if(edibleFood.includes(...food)) this.stomach.push(...food)
        else return 'you cannot eat it'
},
    poop(){
        this.stomach.length = 0
},

    toString(){
        return `${this.name}, ${this.age}`
}

}

const person = new Person("Raf", 14)
console.log(person.stomach)
person.eat("banana", 'apple', 'toblerone')
console.log(person.stomach)
person.poop()
console.log(person.stomach)
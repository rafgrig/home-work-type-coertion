function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype={
    compareAge(obj){
        if(this.age > obj.age)return `${obj.name} is younger than me`
        else if(this.age < obj.age) return `${obj.name} is older than me`
        else return `${obj.name} is the same age as me`
    }
}

function Baby(name='', age=0, favoriteToy=''){
    this.name = name
    this.age = age
    this.favoriteToy = favoriteToy
}

Baby.prototype={
    play(){
        return `Playing with ${this.favoriteToy}`
    },
    __proto__:Person.prototype
}

const baby = new Baby('Jack', 4, "Rubik's Cube")

console.log(baby.play())
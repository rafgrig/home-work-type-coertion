class Author{
    constructor(name='', email='', gender=''){
        this.name = name
        this.email = email
        this.gender = gender
    }
    get name(){
        return this.name
    }
    set name(name){
        if(typeof name === "string") this.name = name
    }

    get email(){
        return this.email
    }
    set email(email){
        if(typeof email === 'string') this.email = email
    }

    get gender(){
        return this.gender.toLowerCase()
    }
    set gender(gender){
        if(typeof gender === 'string' && ( gender === 'male' || gender === 'female')){
            this.gender = gender
        }
    }

    toString(){
        return `Author's name is ${this.name}. Author's email is ${this.email}`
    }
}

class Book {
    constructor(title="", author="", price=0, quantity=0){
        this.title = title
        this.author = author
        this.price = price
        this.quantity = quantity
    }
    get title(){
        return this.title
    }
    set title(title){
        if(typeof title === "string") this.title = title
    }

    get author(){
        return this.author
    }
    set author(author){
        if(typeof author === "string") this.author = author
    }

    get price(){
        return this.price
    }
    set price(price){
        if(typeof price === "number" && !isNaN(price)) this.price = price
    }

    get quantity(){
        return this.quantity
    }
    set quantity(quantity){
        if(typeof quantity === "number" && !isNaN(quantity)) this.quantity = quantity
    }
}

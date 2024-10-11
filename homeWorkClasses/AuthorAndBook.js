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
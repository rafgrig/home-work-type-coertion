function Car(model='', milesPerGallon=0){
    this.model  = model
    this.milesPerGallon = milesPerGallon
    this.tank = 0
    this.odometr = 0
}

Car.prototype = {
    fill(gallons){
        this.tank += gallons
    },
    drive(distance){
        if(this.tank > 0){
        this.odometr += distance
        this.tank -= (this.odometr*this.milesPerGallon)
        }
        if(this.tank < -1){
            // this.tank=0
            return  `You cannot drive this distance`
        }else if(this.tank === 0) return  `I ran out fuel at ${this.odometr} miles`
    }

}

const car = new Car("mercedes", 4)
car.fill(8)
console.log('tank checking:', car.tank)

car.drive(2)
console.log('tank before:', car.tank)

console.log(car.drive(8))
console.log('odometr after:', car.odometr)
console.log('tank after:', car.tank)


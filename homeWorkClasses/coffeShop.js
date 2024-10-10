class CoffeeShop{
    constructor(name='',menu=[{}],){
        this.name=name
        this.menu= menu
        this._order=[]

        Object.defineProperties(this, {
            menu:{
                writable:false,
                enumerable:false,
                configurable:false
            },
            _order:{
                enumerable:false,
                configurable:false
            }
        })
    }
    addOrder(itemName) {
        const item = this.menu.find((menuItem) => menuItem.name === itemName)
        if (item) {
          this._order.push(item);
          return 'Order Added!'
        } else {
          return "This item is currently unavailable!";
        }
      }

    fulfillOrder(){
        if(this._order.length !== 0){
            let item = this._order.shift()
            return `The ${item.name} is ready`
        }else return "All orders have been fulfiled!"
    }

    dueAmout(){
        return this._order.reduce((acc, item) => acc + item.price, 0);
    }

    cheapestItem(){
        const cheapestItem = this.menu.reduce((acc, item)=>{
            if(item.price < acc) acc=item.price
            return item.name
        }, Infinity)

        return cheapestItem
    }

    foodOnly(){
        const food = this.menu.filter((item)=>{
            if(item.type === 'food') return true
        }).map((item) => item.name)

        return food
    }

    listOrder(){
        return this._order.map((item)=> item.name)
    }
}

const menu = [
    {name:"americano", type:'drink', price:2.99},
    {name:"espreso", type:'drink', price:3.05},
    {name:"cappuccino", type:'drink', price:6.90},
    {name:"croissant", type:'food', price:4.99},
    {name:"bulki", type:'food', price:1.99}

]



const tcs = new CoffeeShop("StarBucks", menu)

console.log(tcs.addOrder("americano"))
console.log(tcs.addOrder("bulki"))
// console.log(tcs.fulfillOrder())
console.log(tcs.listOrder())
console.log(tcs.dueAmout())


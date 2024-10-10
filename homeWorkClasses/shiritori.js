class Shiritory{
    constructor(wordArray=[]){
        this.wordArray = wordArray
        this.game_over = false

        Object.defineProperties(Shiritory.prototype, {
            wordArray:{
                writable:false,
                configurable: false
            },
            game_over:{
                writable:false,
                enumerable:false,
                configurable:false
            }
        })
    }
    #isPlayable(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i].at(-1) !== arr[i + 1][0]) {
                return false; 
            }
        }
        return true; 
    }
    
    play(word) {
        if (!this.game_over) {
            const tempArray = [...this.wordArray, word]; 
            
            if (this.wordArray.length === 0 || this.#isPlayable(tempArray)) {
                this.wordArray.push(word); 
                return 'Added!';
            } else {
                this.game_over = true; 
                return 'Game Over!';
            }
        }
    }
    


    restart(){
        this.wordArray.length = 0
    }

}

const myShiritori = new Shiritory();

console.log(myShiritori.play("adobe"))
console.log(myShiritori.play("era"))
console.log(myShiritori.play("Der"))

console.log(myShiritori.wordArray)
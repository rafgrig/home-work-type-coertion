const users = [
{
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
},
{
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
},
];

function getAveregeAge(arr = []){
    const newArr = arr.reduce((acc, item)=>{
        acc = (acc + item.age)
        return acc
    }, 0)
    const averegeAge = newArr/arr.length
    return averegeAge
}

console.log(getAveregeAge(users))
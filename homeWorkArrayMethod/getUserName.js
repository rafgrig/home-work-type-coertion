const users = [
{
    username: "Yuri Gagarin",
    lang: "ru",
},
{
    username: "Nil Armstrong",
    lang: "ENG",
},
];

function getUserName(arr =[]){
    const newArr = arr.map((item)=> item.username )
    return newArr
}

console.log(getUserName(users))
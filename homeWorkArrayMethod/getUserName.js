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
    const newArr = users.map((item)=> item.username )
    return newArr
}

console.log(getUserName(users))
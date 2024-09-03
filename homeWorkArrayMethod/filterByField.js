const users = [
{
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
},
{
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
},
{
    username: "Elon Musk",
    isAstronaut: false,
},
];

function filterByField(arr=[], field=''){
    const newArr = arr.filter((item)=>{return item[field]})
    return newArr
}

console.log(filterByField(users, "isAstronaut"));
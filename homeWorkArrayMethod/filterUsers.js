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

function filterUsers(arr=[]){
    const newArr = arr.filter((item)=> {if(item.lang !== 'ru')return true})
        return newArr
}

console.log(filterUsers(users))
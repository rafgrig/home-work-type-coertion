const evaluations = [
    {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 70
    },
    {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 60
    },
    {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 50
    },
    {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    
    score: 60
    },
    {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 50
    },
    {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 40
    },
    {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 45
    },
    {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 35
    },
    {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 3, // Unique identifier for each course
    
    courseName: "JS Level 1",
    score: 25
    }
]

function getLowestScore(arr=[]){
    const lowestScore = arr.reduce((acc, item) => {
        return item.score < acc ? item.score : acc;
    }, arr[0].score);
    
    return lowestScore
}

console.log(getLowestScore(evaluations))


function getWorstStudent(arr=[]){
    let worstStudentObj = arr.reduce((acc, item)=>{
        if(item.score < acc.score){
           return item
        } else{
            return acc
        }
        
    }, arr[0])
    return worstStudentObj.studentName
}

console.log(getWorstStudent(evaluations))

function getGoodStudents(arr=[]){
    let goodStudents = arr.filter((item)=>{
        if(item.score>60)return true
    })
    return goodStudents[0].studentName
}

console.log(getGoodStudents(evaluations))
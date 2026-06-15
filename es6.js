//LET
let studentCount = 10;
studentCount = 11;

 console.log("Student Count:", studentCount);

 //CONST
const collageName = "VETIAS"

console.log("collageName",collageName);

//TEMPLATE 
let studentName = "RAGAVI"

console.log(`Welcome ${studentName} to ${collageName}`);

//OBJECT
const student =
 {
    name: "arun",
    age: "18",
    department:"CSA"
}

//DESTRUCTURING
const {name,age,department} = student;

console.log("Name:",name);
console.log("Age:",age);
console.log("Department:",department);

//ARROW FUNCTION
const displayStudent =() => {
     console.log(`Student Name : ${Name}`);
}

//ARRAY
const studentArray= ["ragavi","nithila","sriniga","deva"]
console.log(studentArray);


//spread operator
const updateStudents= [
    ...studentArray,
    "nikitha"
]

console.log(updateStudents);

//rest operator
function maximumMarks(...marks)
{
    let max = Math.max(...marks);
    return max;  
}
console.log("Maximum Marks:",maximumMarks(100,60,50));
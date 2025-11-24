let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let codestackEmail = document.getElementById("codestackEmail");
let personalEmail = document.getElementById("personalEmail");
let rndStudentTeacherBtn = document.getElementById("rndStudentTeacherBtn");
let last5index0firstName = document.getElementById("last5index0firstName");
let last5index0lastName = document.getElementById("last5index0lastName");
let last5index0codestackEmail = document.getElementById("last5index0codestackEmail");
let last5index0personalEmail = document.getElementById("last5index0personalEmail");
let last5index1firstName = document.getElementById("last5index1firstName");
let last5index1lastName = document.getElementById("last5index1lastName");
let last5index1codestackEmail = document.getElementById("last5index1codestackEmail");
let last5index1personalEmail = document.getElementById("last5index1personalEmail");
let last5index2firstName = document.getElementById("last5index2firstName");
let last5index2lastName = document.getElementById("last5index2lastName");
let last5index2codestackEmail = document.getElementById("last5index2codestackEmail");
let last5index2personalEmail = document.getElementById("last5index2personalEmail");
let last5index3firstName = document.getElementById("last5index3firstName");
let last5index3lastName = document.getElementById("last5index3lastName");
let last5index3codestackEmail = document.getElementById("last5index3codestackEmail");
let last5index3personalEmail = document.getElementById("last5index3personalEmail");
let last5index4firstName = document.getElementById("last5index4firstName");
let last5index4lastName = document.getElementById("last5index4lastName");
let last5index4codestackEmail = document.getElementById("last5index4codestackEmail");
let last5index4personalEmail = document.getElementById("last5index4personalEmail");


let studentList = [];

function getData() {
    return fetch("../data/data.json")
        .then((response) => response.json())
        .then((data) => {
            return data.studentsAndTeachers;
        })
}

getData();

function rndStudentTeacher(studentsAndTeachers) {
    let randomIndex = Math.floor(Math.random() * studentsAndTeachers.length);
    return studentsAndTeachers[randomIndex];
}
rndStudentTeacherBtn.addEventListener("click", () => {
    getData().then((studentsAndTeachers) => {
        let randomStudentTeacher = rndStudentTeacher(studentsAndTeachers);
        studentList.push(randomStudentTeacher);
        if (studentList.length > 5) { studentList.shift(); }
        console.log(studentList)

        firstName.innerText = randomStudentTeacher.firstName;
        lastName.innerText = randomStudentTeacher.lastName;
        codestackEmail.innerText = randomStudentTeacher.codestackEmail;
        personalEmail.innerText = randomStudentTeacher.personalEmail;
        last5index0firstName.innerText = studentList[0].firstName;
        last5index0lastName.innerText = studentList[0].lastName;
        last5index0codestackEmail.innerText = studentList[0].codestackEmail;
        last5index0personalEmail.innerText = studentList[0].personalEmail;

        if (studentList.length >= 2)
        {last5index1firstName.innerText = studentList[1].firstName;
        last5index1lastName.innerText = studentList[1].lastName;
        last5index1codestackEmail.innerText = studentList[1].codestackEmail;
        last5index1personalEmail.innerText = studentList[1].personalEmail;}

        if (studentList.length >=3)
        {last5index2firstName.innerText = studentList[2].firstName;
        last5index2lastName.innerText = studentList[2].lastName;
        last5index2codestackEmail.innerText = studentList[2].codestackEmail;
        last5index2personalEmail.innerText = studentList[2].personalEmail;}

        if (studentList.length >=4)
        {last5index3firstName.innerText = studentList[3].firstName;
        last5index3lastName.innerText = studentList[3].lastName;
        last5index3codestackEmail.innerText = studentList[3].codestackEmail;
        last5index3personalEmail.innerText = studentList[3].personalEmail;}
        
        if (studentList.length >= 5)
        {last5index4firstName.innerText = studentList[4].firstName;
        last5index4lastName.innerText = studentList[4].lastName;
        last5index4codestackEmail.innerText = studentList[4].codestackEmail;
        last5index4personalEmail.innerText = studentList[4].personalEmail;}
    })
})
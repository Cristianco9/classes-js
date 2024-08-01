import StudentServices from '../../services/studentServices.js';

const Student = new StudentServices();

console.log("created students");

const student1 = {
    name: "jose",
    age: 16,
    id: "111"
}

const student2 = {
    name: "sara",
    age: 16,
    id: "222"
} 

const student3 = {
    name: "lina",
    age: 16,
    id: "333"
} 

Student.createOne(student1);
Student.createOne(student2);
Student.createOne(student3);

console.log("list all students");
console.log(Student.findAll());

console.log("find one student");
console.log(Student.findOne(student3.id));

console.log("delete a student");
console.log(Student.deleteOne(student3.id));

console.log("list all students");
console.log(Student.findAll());


const newStudent2 = {
    name: "maria",
    age: 17,
    id: "444"
} 


console.log("edit a student");
console.log(Student.editOne(student2.id, newStudent2));

console.log("list all students");
console.log(Student.findAll());
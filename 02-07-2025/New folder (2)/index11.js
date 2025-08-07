// // Q-1 create 3 objects. each object should have these properties:
// // name, age, salary, education

// // then calculate and print:
// // 1. the average age of all 3 peoples
// // 2. the total salary of all 3 peoples



// let Harshit = {
//     Name :" Harshit ",
//     age :19,
//     salary:6000,
//     education : "12th pass"
// }
// let Aryan = {
//     Name :" Aryan ",
//     age :19,
//     salary:6000,
//     education : "12th pass"
// }
// let yogesh = {
//     Name :" Yogesh `",
//     age :19,
//     salary:6000,
//     education : "12th pass"
// }

//  let age_sum = Harshit.age + Aryan.age + yogesh.age;
//  let totalperson = 3;
//  let average = age_sum/totalperson;

//  console.log(` the averag of age is :- ${average}`);

//  let sum_salary = Harshit.salary+ Aryan.salary + yogesh.salary;
//   let totalsalary  = 3;
//   let average_salary = sum_salary/totalperson;

//    console.log(` the averag salary is :- ${average_salary}`);


// // // Q-2 create 2 objects. with age and salary
// // // Incerate the age of both by 2
// // // Incerate  the salary of both  by 

// let harshit = {
//     age  : 19,
//     salary :  12000

// }
// let yogesh = {
//     age  : 17,
//     salary :  14000
// }


// // Incerate the age of both by 2

// let incerate_age1 = harshit.age + 2 ;
// harshit.age=incerate_age1;
// console.log( "age from 19 after adding +2 :", incerate_age1)
 
// let incerate_age2 = yogesh.age + 2 ;
// console.log( "age from 17 after adding  +2 :", incerate_age2) 
 
// // Incerate  the salary of both  by  10,000 

// let incerate_salary1 = harshit.salary + 10000 ;
// console.log( "salary from 1000 after adding +10,000 :", incerate_salary1)
 
// let incerate_salary2 = yogesh.salary + 10000 ;
// console.log( "salary from 1200 after adding +10,000 :", incerate_salary2) 



// // //Q-3  1: create 3 student object with these property :
// // // name , marks1 ,marks2 ,marks3 
// // // - find the average marks of each students by calulating their total marks 
// // // then   store the average marks of each student in arry - called student-marks

// let stu1 = {
//     name : "aryan jaiswal",
//     marks1 : 60, 
//     marks2  : 80,
//     marks3 : 70

// }

// let stu2 = {
//     name : "prachi jaiswal",
//     marks1 : 70, 
//     marks2  : 50,
//     marks3 : 60
// }

// let stu3 = {
//     name : "ganga thawaliya",
//     marks1 : 90, 
//     marks2  : 60,
//     marks3 : 60
// }

// // 1- find the average marks of each students by calulating their total marks 


// //average marks of stu1 
//  let  average_stu1_marks = (stu1.marks1 + stu1.marks2 + stu1.marks3)/3;
//  stu1.ave=average_stu1_marks;
//  console.log(average_stu1_marks);
 
 
 
// //average marks of stu2 
//  let  average_stu2_marks = (stu2.marks1 + stu2.marks2 + stu2.marks3)/3;
//  console.log(average_stu2_marks);
 
 
// //average marks of stu3 
//  let  average_stu3_marks = (stu3.marks1 + stu3.marks2 + stu3.marks3)/3;
//  console.log(average_stu3_marks);
 
 
 
//  // then   store the average marks of each student in arry - called student-marks
 
// let array = [
//      average_stu1_marks,
//      average_stu2_marks,
//      average_stu3_marks
//     ]

// console.log( "This is an array objects =" ,'\n',array[0],'\n', array[1],'\n', array[2]);

// // // Q-4 create an object called classroom
// // it should have a property student that is an array of 3 students objects
// // each student object should have:
// // -name, hobbies(an array of 3 hobbies), city
// // print the second hobby of the third student

// const classroom ={
//     student:[
//         student1={
//             name:"harshit",
//             hobbies : ["cricket","gaming","rideing"]
//         },
//          student2={
//             name:"ram",
//             hobbies : ["cricket","gaming","drowing"]
//         },
//          student3={
//             name:"yogesh",
//             hobbies : ["cricket","drowing","sing"]
//         },
//     ]
// }
// console.log(classroom.student[2].hobbies[1]);

 
// Question 1: Student Grading System
// Create an object for a student with marks in three subjects: math, english, and science. Calculate the average marks and use if-else to assign grades based on the average:
// A+ (≥90), A (80–89), B (70–79), C (60–69), Fail (<60).
//  Print the average and the grade in a sentence.

let student={
    english:44,
    science:55,
     maths:60,
}
 let  average_student_marks = (student.english + student.science + student.maths)/3;


 if (average_student_marks > (90)) {
     console.log("Grad A+")
 } else if(average_student_marks > (80-89)){
    console.log("Grad A")
 }else if(average_student_marks > (70-79)){
    console.log("Grad B")
 }else if(average_student_marks > (60-69)){
    console.log("Grad c")
 }else {
    console.log("Fail")
 };
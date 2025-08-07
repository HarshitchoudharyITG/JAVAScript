// 🔶 Question 8: Leap Year Checker
// // Create an object with a year key. Use conditional logic to check if the year is a leap year. A year is a leap year if:
// Divisible by 4


// But not divisible by 100 unless also divisible by 400
//  Print if the year is leap year or not.

let year_lip = {
    year:2025,
}
if (((year_lip.year % 4 === 0 && year_lip.year % 100 !== 0)||(year_lip.year % 400 ===0))) {
    console.log("this is a lip yera");
} else {
    console.log("this is a not lip yera");
}
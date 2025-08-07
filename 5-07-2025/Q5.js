//  Question 5: Compare Salaries
// Create two person objects with name and salary. Compare the salaries using conditional logic and print who earns more, or if both earn equally.


let man_one = {
    Name:"harshit",
    salary:102000,
}
let man_two = {
    Name:"Aryan",
    salary:102000,
}

if (man_one.salary > man_two.salary) {
    console.log("harshit earn more salary ")
    
} else if(man_one.salary < man_two.salary) {
    console.log("Aryan earn more salary ")

} else if (man_one.salary === man_two.salary){
    console.log("both aren equele salary");
    
}

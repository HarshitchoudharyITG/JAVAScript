// Given a person object with name and age, determine if the person is:
// Child (<13), Teenager (13–19), Adult (20–59), or Senior (60+)
//  Use if-else to display the correct age category.


let boy= {
    Name:"xyz",
    age:80,
}

if (boy.age<13) {
     console.log("Child" );
} else if (boy.age<(20-59)) {
     console.log("Adult");
}else if (boy.age>(13-19)) {
     console.log("Teenager");
}else if (boy.age<(60)) {
     console.log("Senior");
}
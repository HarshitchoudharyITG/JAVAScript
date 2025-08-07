// // // //  make an Object which has three variables name ,age ,marks and console log
// // let studentdetails = {
// //     studentname : ["Ram","harshirt","aryan"],
// //     age : [15,17,19],
// //     marks :[70,55,23],
// // }
// // console.table(studentdetails);

// // // // Q2. make an Object which has three variables employeeName, basesalary , bonus and calculate totalsalary and bonus and print?

// // let employeedetails = {
// //    "Names" : ["harshit","aryan","yogesh"],
// //    "Basesalary" : [7000,9000,14000],
// //    "Bonus" : [500, 300,1000]  
// // }
// // console.table(employeedetails);
// // console.log("totalsalary of " ,employeedetails.Names[0],":-",employeedetails.Basesalary[0]+employeedetails.Bonus[0],":-","Bonus :-",employeedetails.Bonus[0]);

// // // // Q3. make an Object and store the book details including ' tittle , author ,price and console the data?

// // let books = {
// //     "book" :["The Guide","The God of Small Things","Train to Pakistan"],
// //     "author's Name" :["R.K. Narayan","Arundhati Roy"," Khushwant Singh"],
// //     "price" :["rs 500","rs 478","rs 447"]
// // }
// // console.table(books);

// // // // Q4. make an object which has all 7 premetive data type with your information ?

// // let premetive = {
// //     "Null" :[" 'null' is a premetive values that represents no values", "exampal = let a = null"],
// //     "Number" :["number is a premetive values that represents intagers","exampal = let a = 1233447"],
// //     "Symbol" :["To create a new primitive Symbol, you write Symbol()","exampal = let a = $"],
// //     "String" :[" a string is a primitive data type that represents a sequence of characters ","exampal = let a='harshit';"],
// //     "Boolean" :["show the values in true and fuals","exampal = let a = true and fulas"],
// //     "Bigint" :["primitive data type that allows for the representation and manipulation of integers with arbitrary precision","exampal = let a = 99999n"],
// //     "undefind" :["undefined is a primitive value that signifies the absence of an assigned value.","exampal = let a = undifind"],
// // }

// // console.table(premetive);

// // // // Q5. make an array which has 2 object 
// // // // 1.first object includes
// // // // 2.name,father's-name,age.
// // // // 3.second object includes
// // // // 4.class,hobby,mobile-number
// // // // 5.print all the data

// // let array =[
// //     Bio_data ={
// //         Myname : "harshit chouydhary",
// //         fathername :"shaker choudhary",
// //         age: 19,
// //     },
// //     detiles = {
// //         class_name :"12th",
// //         hobby :"playing game",
// //         mobile_number :"674648 xxxx",
// //     }
// // ] 

// // console.table(array);

// // // // Q6. use typeof operator and print the type of variables used in all Q ?

// // console.log(typeof {},typeof [], typeof 16786, typeof "harshit",typeof undefined,);


// let min = 0;
// let max = 23;
// const index= Math.floor((Math.random() * (max -min ))+ min);

// let arr = [
//     document.writeln('<img src="C:/Users/Itgeeks2/Desktop/cute-boy-standing-position-showing-thumb_96037-450.avif"'),
//     document.getElementById('pic'),
// image = "C:/Users/Itgeeks2/Desktop/cute-boy-standing-position-showing-thumb_96037-450.avif",
// "Deepika pandya",
// "Siddhi sengar",
// image = "C:/Users/Itgeeks2/Desktop/cute-boy-standing-position-showing-thumb_96037-450.avif",
// "Khushi Garoda",
// "Manish Kumar",
// image = "C:/Users/Itgeeks2/Desktop/cute-boy-standing-position-showing-thumb_96037-450.avif",
// "Abha Bhagat",
// "Balwan Singh Rajput",
// "Roshin mandloi",
// "Aman Kumar",
// "Varsha padiyar",
// "Homey Goswami",
// "Sneha Mishra",
// image = "C:/Users/Itgeeks2/Desktop/cute-boy-standing-position-showing-thumb_96037-450.avif",
// "Shivang Ranawat",
// "Parth Sharma",
// "Raghav  Vishwakarma",
// "Kuldep Badodiya",
// image = "C:/Users/Itgeeks2/Desktop/cute-boy-standing-position-showing-thumb_96037-450.avif",
// image = "C:/Users/Itgeeks2/Desktop/cute-boy-standing-position-showing-thumb_96037-450.avif",
// "Kanha Jhangrala",
// image = "C:/Users/Itgeeks2/Desktop/cute-boy-standing-position-showing-thumb_96037-450.avif",
// "Priyanshi Mishra",
// ];





// console.log(`
//     the name of the student who selected is : ${arr[index]}
//     `)

let a = prompt("what is your name?")
console.log( a)

let b = prompt("Hey whats you age?")
b= Number.parseInt(b)
if(b<18){
alert("this is a not valid age")
}



let c = prompt("Hey whats you phone number?")
c= Number.parseInt(c)
console.log( c)

let d = prompt("Hey whats you Email?")
console.log( d)

let e = prompt("Hey whats you Father Name?")
console.log( e)
 
let f = prompt("Hey whats you Mother Name?")
console.log( f)

let g = prompt("Hey whats you A/C Number?")
console.log( g)

let h = prompt("Male or fimail")
console.log( h)
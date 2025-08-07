// 🔶 Question 7: Bill Splitter with Service Charge
// Create a bill object with totalAmount and numberOfPeople. If the bill is more than 500:
// Add a 10% service charge
//  Then divide and print how much each person should pay.



let bill={
    totalAmount :1000,
    number_of_People:2
}
if (bill.totalAmount > 500) {
    let Payment = bill.totalAmount + (bill.totalAmount*(10/100));
    let People = Payment/bill.number_of_People;
    console.log("Each person pays:", People );
    
} else {
    console.log("Only one person pay");
}
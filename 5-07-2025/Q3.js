//  Question 3: Discount Calculator
// Create an object with a productName and price. Apply:
// 20% discount if price is above 10000


// 10% discount if price is between 5000–10000


// No discount if below 5000
//  Calculate and print the final price after applying discount.

let product= {
    Name:"laptop",
    price:1000,
}

if (product.price>=10000) {
    let discount = product.price-(product.price*(20/100));
     console.log(discount);
} else if (product.price<=(5000-10000)) {
    let discount_tow = product.price-(product.price*(10/100));
     console.log(discount_tow);
}else if (product.price<=5000) {
    let discount_three = product.price-(product.price*(0/100));
     console.log(discount_three);
};





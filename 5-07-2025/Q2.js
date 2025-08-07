
// Question 2: Product Stock Checker
// Create a product object with keys: name, quantity, and price. Check if the quantity is more than 0:
// If yes, print "Product is in stock".


// Otherwise, print "Out of stock".

let  product={
     name:"cpu",
     quantity:0,
     price:6000,
}
if (product.quantity > 0) {
     console.log("Product is in stock")
 } else if( product.quantity < 1 ){
    console.log("Out of stock")
}
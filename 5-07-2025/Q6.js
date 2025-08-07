
// 🔶 Question 6: Triangle Type Identifier
// Create an object with three sides of a triangle: a, b, and c. Determine:
// Equilateral: All sides equal


// Isosceles: Any two sides equal


// Scalene: All sides different
//  Use if-else to classify the triangle.


let triangle={
    a:19,
    b:1,
    c:9,
}

if (triangle.a===triangle.b && triangle.b ===triangle.c && triangle.c===triangle.a) {
    console.log("triangle is Equilateral")
} else if (triangle.a===triangle.b || triangle.b===triangle.c || triangle.c===triangle.a){
    console.log("triangle is Isosceles")
} else {
    console.log("triangle is Scalene")
} 
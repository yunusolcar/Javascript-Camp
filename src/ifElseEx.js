//Ex-0
let age = 20;
let graduation = "high School";

if ((age >= 18 && (graduation == "universty" || graduation == "high School"))) { // || operatörü seçimlerden birinin tutması dahilinde true döndürmektedir.
    console.log("You can get a driver's license");

} else {
    console.log("You cannot obtain a  driver's license");
}

//Ex-1
let number = 10;

if (number >= 10 && number <= 50) {
    console.log("true");
} else {
    console.log("false");
}

//Ex-2
let number1 = -17;

if (number1 > 0) {
    if (number1 % 2 == 0) {
        console.log("odd number");
    } else {
        console.log("even number");
    }
} else {
    console.log("number not positive");
}

//Ex-3
let x = -12, y = -4, z = -7;

if (x > y && x > z) {
    console.log("x is bigger than other numbers");
} else if (y > x && y > z) {
    console.log("y is bigger than other numbers");
} else if (z > x && z > y) {
    console.log("z is bigger than other numbers");
}
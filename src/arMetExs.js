let fruits = ["Apple", "Orange", "Banana", "Strawberry"];
console.log(fruits.length);

console.log(fruits);
console.log(fruits[0]); //ilk eleman
console.log(fruits[fruits.length - 1]); //son eleman

console.log(fruits.includes("Apple")); //apple check

let addFruit = fruits.push("Cherry"); //add cherry
console.log(fruits);

fruits.pop(); //delete (last 2)
fruits.pop();
console.log(fruits);

let student1 = [
    "Billy", 2010, [80, 80, 80]
];
let student2 = [
    "Fred", 2006, [80, 80, 90]
];
let student3 = [
    "Thomas", 2011, [60, 60, 70]
];
let students = [student1, student2, student3];

let age_Billy = new Date().getFullYear() - students[0][1];
console.log(age_Billy);

let examMark1 = (students[0][2][0] + students[0][2][1] + students[0][2][2]) / 3;
let examMark2 = (students[1][2][0] + students[1][2][1] + students[1][2][2]) / 3;
let examMark3 = (students[2][2][0] + students[2][2][1] + students[2][2][2]) / 3;

console.log(examMark1.toFixed(1)); //ondalıklı kısmın kaç basamaklı olması gerektiğini belirtmek için
console.log(examMark2.toFixed(1));
console.log(examMark3.toFixed(1));
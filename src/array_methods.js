let students = ["John", "Mia", "Bruce"];
let names = students.length; //uzunluk bilgisi
console.log(students);

//array to string
names = students.toString();
names = students.join(","); //Dizi elemanları arasına karakter koymak için join kullanılır

//eleman silme
names = students.pop();   //Dizinin son elemanı silinir, silinen elemanı gösterir
console.log(students);
console.log(names);

names = students.shift(); //Dizinin ilk elemanı silinir
console.log(names);
console.log(students);

//eleman ekleme
names = students.push("Emma"); //Dizinin sonuna eleman ekler
console.log(students);

names = students.unshift("Olivia"); //Dizinin  başına eleman ekler
console.log(students);
console.log(names);

let brands1 = ["Mazda", "Toyota"];
let brands2 = ["Opel", "Renault"];
let brands3 = ["Mercedes"];

cars = brands1.concat((brands2), (brands3)); //metodu var olan dizileri uç uca ekleyerek yeni bir dizi oluşturur.
console.log(cars);

let fruits = ["Banana", "Orange", "Apple", "Apricot"];
fruits.splice(0, 1); //meyveler dizisindeki ilk elemanı siler
//fruits.splice(0, 1, "Lime", "Cherry");
console.log(fruits);



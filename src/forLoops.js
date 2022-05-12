/*let total = 0;

for (
   let i = 0; i <= 10; i++) {
   total += i;
}
console.log(total);

let numbers = [1, 4, 5, 8, 4, 3, 12, 9];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
console.log(total); */
let numbers = [1, 4, 5, 8, 4, 3, 12, 9];
let total = 0;
for (let number of numbers) { //of operatörü liste içerisindeki sayıları toplar
    total += number;
}
console.log(total);

let user = {
    "name": "Yunus",
    "lastName": "Olçar",
    "password": "password",
    "email": "y@hotmail.com"
};
for (let key in user) { //key ile object içindeki bilgileri çekebiliriz
    console.log(key);
    console.log(user[key]);//filtreleme yapılır, sonuç değeri yazdırılır.
}
//10 ile 15 sayıları arasındaki tamsayıların çarpımını hesaplayıp ekrana yazdıran Javacsript kodunu yazınız.
let carpim = 1;
for (i = 10; i <= 15; i++) {
    carpim = carpim * i;
}
console.log(carpim);

// 100 ile 200 sayılarının arasında 23 ün katı olan sayıların toplamını hesaplayıp ekrana yazdıran Javascript kodunu yazınız.

let a = 0;
for (let i = 100; i <= 200; i++) {
    if (i % 23 == 0) {
        console.log("Bölünen sayılar: " + i);
        a = a + i;
    }
}
// x y ve z sayılarının en küçüğünü ekrana yazan javascript kodunu yazınız.
let x = -40, y = 6, z = 30;
if (x < y && x < z) {
    console.log("x en küçük");
} else if (y < x && y < z) {
    console.log("y en küçük");
} else if (z < x && z < y) {
    console.log("z en küçük");
}